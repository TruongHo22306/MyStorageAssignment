import { capturedQuote } from './quote-fixture';

export const defaultInputs = {
  boxes: '6', length: '60', width: '40', height: '40', months: '2', access: '22:00',
};

export type Inputs = typeof defaultInputs;
export type NumericField = Exclude<keyof Inputs, 'access'>;
export const numericFields: NumericField[] = ['boxes', 'length', 'width', 'height', 'months'];
export type ErrorCode = 'positive' | 'whole' | 'time' | 'range';
export type InputErrors = Partial<Record<keyof Inputs | 'calculation', ErrorCode>>;

export function calculateVolume(boxes: number, length: number, width: number, height: number) {
  return boxes * length * width * height / 1_000_000;
}

export function priceComparison(months: number) {
  const [cool, standard] = capturedQuote.options;
  const monthlyDifference = standard.monthlyPrice - cool.monthlyPrice;
  return {
    coolTotal: cool.monthlyPrice * months,
    standardTotal: standard.monthlyPrice * months,
    monthlyDifference,
    totalDifference: monthlyDifference * months,
  };
}

export type CapacityOverall = 'both-fit' | 'one-exceeds' | 'both-exceed';

export interface CapacityStatus {
  coolExceeds: boolean;
  standardExceeds: boolean;
  overall: CapacityOverall;
}

/** Compare unrounded volume against each option's nominal capacity using strict >. */
export function capacityStatus(volume: number): CapacityStatus {
  const [cool, standard] = capturedQuote.options;
  const coolExceeds = volume > cool.capacityCbm;
  const standardExceeds = volume > standard.capacityCbm;
  const overall: CapacityOverall =
    coolExceeds && standardExceeds ? 'both-exceed' :
    coolExceeds || standardExceeds ? 'one-exceeds' : 'both-fit';
  return { coolExceeds, standardExceeds, overall };
}

export function evaluateInputs(inputs: Inputs) {
  const errors: InputErrors = {};
  for (const field of numericFields) {
    const value = Number(inputs[field]);
    if (!Number.isFinite(value) || value <= 0) errors[field] = 'positive';
    else if ((field === 'boxes' || field === 'months') && !Number.isSafeInteger(value)) {
      errors[field] = 'whole';
    }
  }
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(inputs.access)) errors.access = 'time';
  if (Object.keys(errors).length) return { errors, result: null };

  const volume = calculateVolume(+inputs.boxes, +inputs.length, +inputs.width, +inputs.height);
  const prices = priceComparison(+inputs.months);
  // Even positive finite inputs can overflow when multiplied.
  if (!Number.isFinite(volume) || volume <= 0 || !Number.isSafeInteger(prices.standardTotal)) {
    return { errors: { calculation: 'range' } as InputErrors, result: null };
  }
  const capturedBoxes = (['boxes', 'length', 'width', 'height'] as const)
    .every((field) => Number(inputs[field]) === Number(defaultInputs[field]));
  const capacity = capacityStatus(volume);
  return { errors, result: { volume, months: +inputs.months, prices, capturedBoxes, capacity } };
}

export function displayVolume(volume: number) {
  return volume > 0 && volume < 0.005 ? '< 0.01' : volume.toFixed(2);
}
