export const NISAB_THRESHOLD = 7750; // Example threshold in USD
export const ZAKAT_RATE = 0.025; // 2.5%

export interface Assets {
  cash: number;
  gold: number;
  silver: number;
  stocks: number;
  businessAssets: number;
  otherInvestments: number;
}

export interface Liabilities {
  debts: number;
  expenses: number;
}

export const calculateTotalAssets = (assets: Assets): number => {
  return Object.values(assets).reduce((sum, value) => sum + value, 0);
};

export const calculateTotalLiabilities = (liabilities: Liabilities): number => {
  return Object.values(liabilities).reduce((sum, value) => sum + value, 0);
};

export const calculateNetWorth = (assets: Assets, liabilities: Liabilities): number => {
  return calculateTotalAssets(assets) - calculateTotalLiabilities(liabilities);
};

export const calculateZakatDue = (assets: Assets, liabilities: Liabilities): number => {
  const netWorth = calculateNetWorth(assets, liabilities);
  return netWorth >= NISAB_THRESHOLD ? netWorth * ZAKAT_RATE : 0;
};