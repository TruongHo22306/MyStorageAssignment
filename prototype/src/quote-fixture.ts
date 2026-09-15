// Candidate-reported quote, not an inventory feed or independently verified tariff.
export const capturedQuote = {
  capturedDate: '2026-09-15',
  capturedTime: null,
  dateSource: 'Candidate implementation brief',
  facility: '375 Võ Nguyên Giáp',
  vatPercent: 8,
  options: [
    {
      id: 'cool',
      name: '1 CBM Cool Locker',
      capacityCbm: 1,
      monthlyPrice: 990000,
      privateAccess24h: true,
      temperatureCelsius: 15,
      conditional: true,
    },
    {
      id: 'standard',
      name: '2 CBM Non-AC Self Storage',
      capacityCbm: 2,
      monthlyPrice: 1188000,
      privateAccess24h: true,
      temperatureCelsius: null,
      conditional: false,
    },
  ],
} as const;

export const sources = {
  selfStorage: 'https://mystorage.vn/services/self-storage/',
  sizeGuide: 'https://mystorage.vn/size-guide/',
  wineStorage: 'https://mystorage.vn/wine-storage/',
  booking: 'https://booking.mystorage.vn',
} as const;
