import { expect, test } from '@playwright/test';
import { calculateVolume, capacityStatus, defaultInputs, displayVolume, evaluateInputs, priceComparison } from '../src/calculations';

test('default arithmetic uses the captured prices and rounds volume only for display', () => {
  expect(calculateVolume(6, 60, 40, 40)).toBe(0.576);
  expect(displayVolume(0.576)).toBe('0.58');
  expect(priceComparison(2)).toEqual({
    coolTotal: 1980000, standardTotal: 2376000,
    monthlyDifference: 198000, totalDifference: 396000,
  });
  expect(displayVolume(0.001)).toBe('< 0.01');
});

test('validation rejects empty, negative, fractional counts and overflow without a result', () => {
  for (const length of ['', '0', '-1', 'NaN', 'Infinity', '1e308']) {
    expect(evaluateInputs({ ...defaultInputs, length }).result).toBeNull();
  }
  expect(evaluateInputs({ ...defaultInputs, boxes: '1.5' }).result).toBeNull();
  expect(evaluateInputs({ ...defaultInputs, months: '0' }).result).toBeNull();
  expect(evaluateInputs({ ...defaultInputs, access: '25:00' }).result).toBeNull();
});

test('default Vietnamese flow shows both conditional options and no external data requests', async ({ page }) => {
  const externalRequests: string[] = [];
  page.on('request', (request) => {
    if (!request.url().startsWith('http://127.0.0.1:4174')) externalRequests.push(request.url());
  });
  await page.goto('/');
  await expect(page.getByLabel('Số thùng')).toHaveValue('6');
  await expect(page.getByLabel('Giờ tự lấy đồ')).toHaveValue('22:00');
  await expect(page.getByTestId('volume')).toHaveText('0.58');
  await expect(page.getByTestId('raw-volume')).toHaveText('0.576');
  await expect(page.locator('.quote')).toHaveCount(2);
  await expect(page.getByText('Giá ghi nhận thấp hơn · Có điều kiện')).toBeVisible();
  await expect(page.getByText('Giá chưa gồm 8% VAT')).toBeVisible();
  await expect(page.locator('.savings')).toContainText('198.000 VND');
  await expect(page.locator('.savings')).toContainText('396.000 VND');
  await expect(page.locator('.cool .total')).toContainText('1.980.000 VND');
  await expect(page.locator('.standard .total')).toContainText('2.376.000 VND');
  await expect(page.locator('.explanation')).toContainText('Chưa tự động chọn Cool Locker');
  await expect(page.getByText(/Đáp ứng giờ 22:00/)).toHaveCount(2);
  await expect(page.locator('.verification')).toContainText('Tình trạng còn chỗ phải được xác minh trước khi đặt');
  await expect(page.locator('body')).not.toContainText(/rẻ nhất|guaranteed|confirmed live price|cheapest/i);
  await expect(page.getByRole('link', { name: 'Kiểm tra tình trạng còn chỗ hiện tại' })).toHaveAttribute('href', 'https://booking.mystorage.vn');
  await expect(page.locator('img')).toBeVisible();
  expect(await page.locator('img').evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  expect(externalRequests).toEqual([]);
});

test('invalid input removes recommendations; recovery and reset preserve Vietnamese', async ({ page }) => {
  await page.goto('/');
  for (const value of ['0', '-20', '']) {
    await page.getByLabel('Dài (cm)', { exact: true }).fill(value);
    await expect(page.getByText('Nhập một số lớn hơn 0.')).toBeVisible();
    await expect(page.getByTestId('recommendation')).toHaveCount(0);
    await expect(page.locator('body')).not.toContainText(/NaN|Infinity/);
  }
  await page.getByLabel('Dài (cm)', { exact: true }).fill('60');
  await expect(page.getByTestId('recommendation')).toBeVisible();
  await page.getByLabel('Thời gian (tháng)').fill('3');
  await expect(page.locator('.savings')).toContainText('594.000 VND');
  await page.getByRole('button', { name: 'Khôi phục giá trị ban đầu' }).click();
  await expect(page.getByLabel('Thời gian (tháng)')).toHaveValue('2');
  await expect(page.locator('html')).toHaveAttribute('lang', 'vi');
});

test('changed box needs remain unverified and oversized volume is flagged', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Số thùng').fill('30');
  await expect(page.getByRole('status').filter({ hasText: 'Kích thước hoặc số thùng đã thay đổi' })).toContainText('chưa có xác nhận phù hợp cho nhu cầu mới');
  await expect(page.getByText('Thể tích đồ vượt dung tích danh nghĩa của kho này.')).toHaveCount(2);
  await expect(page.getByTestId('volume')).toHaveText('2.88');
});

test('language switch updates the full comparison, conditions, warnings and actions', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { name: 'Compare storage options' })).toBeVisible();
  await expect(page.getByText('Lower captured price · Conditional')).toBeVisible();
  await expect(page.locator('.cool')).toContainText('Reconfirm item eligibility');
  await expect(page.locator('.explanation')).toContainText('not automatically selected');
  await expect(page.getByRole('link', { name: 'Verify current availability' })).toBeVisible();
  await expect(page.locator('body')).not.toContainText(/Báo giá|Cần xác|Điều kiện|cheapest|guaranteed/);
  await page.getByLabel('Length (cm)', { exact: true }).fill('0');
  await expect(page.getByText('Enter a number greater than 0.')).toBeVisible();
  await page.getByRole('button', { name: 'Tiếng Việt', exact: true }).click();
  await expect(page.getByText('Nhập một số lớn hơn 0.')).toBeVisible();
  await expect(page.getByTestId('recommendation')).toHaveCount(0);
});

test('desktop and mobile layout render images and fit the viewport', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  for (const [name, width, height] of [['desktop', 1280, 900], ['mobile', 390, 844], ['narrow', 320, 740]] as const) {
    await page.setViewportSize({ width, height });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const cool = await page.locator('.cool').boundingBox();
    const standard = await page.locator('.standard').boundingBox();
    expect(cool).not.toBeNull();
    expect(standard).not.toBeNull();
    if (width > 540) expect(standard!.y).toBe(cool!.y);
    else {
      expect(standard!.y).toBeGreaterThanOrEqual(cool!.y + cool!.height);
      for (const field of ['length', 'width', 'height']) {
        const input = await page.locator(`#${field}`).boundingBox();
        expect(input!.width).toBeGreaterThanOrEqual(70);
      }
    }
    await page.screenshot({ path: `docs/verification/${name}.png`, fullPage: true });
  }
  expect(errors).toEqual([]);
});

test('capacityStatus returns correct status for key volumes', () => {
  // 0.576 CBM: both fit (cool=1, standard=2)
  expect(capacityStatus(0.576)).toEqual({ coolExceeds: false, standardExceeds: false, overall: 'both-fit' });
  // 1.152 CBM: cool exceeds (>1), standard fits (<=2)
  expect(capacityStatus(1.152)).toEqual({ coolExceeds: true, standardExceeds: false, overall: 'one-exceeds' });
  // 2.304 CBM: both exceed
  expect(capacityStatus(2.304)).toEqual({ coolExceeds: true, standardExceeds: true, overall: 'both-exceed' });
  // Exact boundary: 1.0 CBM does NOT exceed cool (strict >)
  expect(capacityStatus(1.0)).toEqual({ coolExceeds: false, standardExceeds: false, overall: 'both-fit' });
  // Just above boundary: 1.0000001 CBM exceeds cool
  expect(capacityStatus(1.0000001)).toEqual({ coolExceeds: true, standardExceeds: false, overall: 'one-exceeds' });
  // Exact standard boundary: 2.0 CBM does NOT exceed standard
  expect(capacityStatus(2.0)).toEqual({ coolExceeds: true, standardExceeds: false, overall: 'one-exceeds' });
});

test('6 boxes: both fit, savings and lower-price ribbon shown, no capacity warnings', async ({ page }) => {
  await page.goto('/');
  // Default is 6 boxes, both should fit
  await expect(page.getByTestId('volume')).toHaveText('0.58');
  await expect(page.locator('.capacity-warning')).toHaveCount(0);
  await expect(page.locator('.quote-ribbon.over-capacity')).toHaveCount(0);
  await expect(page.locator('.savings')).toBeVisible();
  await expect(page.locator('.savings')).toContainText('396.000 VND');
  await expect(page.getByText('Giá ghi nhận thấp hơn · Có điều kiện')).toBeVisible();
  await expect(page.locator('.capacity-notice')).toHaveCount(0);
  await expect(page.locator('.explanation')).toContainText('Chưa tự động chọn Cool Locker');
});

test('12 boxes: cool exceeds, standard fits; savings replaced, cool ribbon changed', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Số thùng').fill('12');
  await expect(page.getByTestId('volume')).toHaveText('1.15');
  // Cool card: over-capacity ribbon, capacity warning near heading
  await expect(page.locator('.cool .quote-ribbon.over-capacity')).toBeVisible();
  await expect(page.locator('.cool .quote-ribbon')).toContainText('Vượt dung tích danh nghĩa');
  await expect(page.locator('.cool .capacity-warning')).toBeVisible();
  // Standard card: normal ribbon, no capacity warning
  await expect(page.locator('.standard .quote-ribbon.over-capacity')).toHaveCount(0);
  await expect(page.locator('.standard .quote-ribbon')).toContainText('Phương án tiêu chuẩn');
  await expect(page.locator('.standard .capacity-warning')).toHaveCount(0);
  // Savings replaced with capacity notice
  await expect(page.locator('.savings')).toHaveCount(0);
  await expect(page.locator('.capacity-notice')).toBeVisible();
  await expect(page.locator('.capacity-notice')).toContainText('Một phương án vượt dung tích danh nghĩa');
  // Explanation replaced
  await expect(page.locator('.explanation')).toContainText('không thể được coi là lựa chọn thay thế phù hợp');
  // Prices retained as reference
  await expect(page.locator('.cool .total')).toContainText('VND');
  await expect(page.locator('.standard .total')).toContainText('VND');
  // Return to default
  await page.getByRole('button', { name: 'Khôi phục giá trị ban đầu' }).click();
  await expect(page.getByLabel('Số thùng')).toHaveValue('6');
  await expect(page.locator('.savings')).toBeVisible();
});

test('24 boxes: both exceed; headings follow 6/12/24/6 boxes in Vietnamese and English', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Số thùng').fill('24');
  await expect(page.getByTestId('volume')).toHaveText('2.30');
  // Both cards: over-capacity ribbon and capacity warning
  await expect(page.locator('.quote-ribbon.over-capacity')).toHaveCount(2);
  await expect(page.locator('.capacity-warning')).toHaveCount(2);
  // Savings replaced with both-exceed notice
  await expect(page.locator('.savings')).toHaveCount(0);
  await expect(page.locator('.capacity-notice')).toContainText('Cả hai phương án đều vượt dung tích danh nghĩa');
  await expect(page.locator('.capacity-notice')).toContainText('Cần báo giá mới');
  // Explanation: neither has capacity
  await expect(page.locator('.explanation')).toContainText('Không phương án ghi nhận nào có đủ dung tích danh nghĩa');
  // Pricing disclaimer still present
  await expect(page.locator('.calculation-note')).toBeVisible();
  // Return to default
  await page.getByRole('button', { name: 'Khôi phục giá trị ban đầu' }).click();
  await expect(page.getByLabel('Số thùng')).toHaveValue('6');
  await expect(page.locator('.savings')).toBeVisible();

  await expect(page.getByLabel('Dài (cm)', { exact: true })).toHaveValue('60');
  await expect(page.getByLabel('Rộng (cm)', { exact: true })).toHaveValue('40');
  await expect(page.getByLabel('Cao (cm)', { exact: true })).toHaveValue('40');
  const explanation = page.locator('.explanation');
  for (const [boxes, viHeading, enHeading] of [
    ['6', 'Giá thấp hơn, điều kiện khác nhau', 'Lower price, different conditions'],
    ['12', 'Một phương án vượt dung tích', 'One option exceeds nominal capacity'],
    ['24', 'Cần phương án lưu trữ khác', 'A different storage option is needed'],
    ['6', 'Giá thấp hơn, điều kiện khác nhau', 'Lower price, different conditions'],
  ]) {
    await page.locator('#boxes').fill(boxes);
    for (const [language, heading] of [['Tiếng Việt', viHeading], ['English', enHeading]]) {
      await page.getByRole('button', { name: language, exact: true }).click();
      await expect(explanation.getByRole('heading', { level: 2 })).toHaveText(heading);
      if (boxes !== '6') {
        await expect(explanation).not.toContainText(/Giá thấp hơn, điều kiện khác nhau|Lower price, different conditions/);
      }
    }
  }
});

test('capacity boundary: volume exactly at nominal capacity does not trigger exceeds', async ({ page }) => {
  await page.goto('/');
  // 1 CBM = 1 box at 100x100x100cm
  await page.getByLabel('Số thùng').fill('1');
  await page.getByLabel('Dài (cm)', { exact: true }).fill('100');
  await page.getByLabel('Rộng (cm)', { exact: true }).fill('100');
  await page.getByLabel('Cao (cm)', { exact: true }).fill('100');
  await expect(page.getByTestId('volume')).toHaveText('1.00');
  // Cool = 1 CBM: volume == capacity, strict > means no exceeds
  await expect(page.locator('.cool .capacity-warning')).toHaveCount(0);
  await expect(page.locator('.cool .quote-ribbon.over-capacity')).toHaveCount(0);
  // Standard = 2 CBM: also no exceeds
  await expect(page.locator('.standard .capacity-warning')).toHaveCount(0);
  // Savings should still be shown (both fit)
  await expect(page.locator('.savings')).toBeVisible();
  // Return to default
  await page.getByRole('button', { name: 'Khôi phục giá trị ban đầu' }).click();
  await expect(page.getByLabel('Số thùng')).toHaveValue('6');
});
