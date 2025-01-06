import { useState, useMemo } from 'react';
import {
  Assets,
  Liabilities,
  calculateTotalAssets,
  calculateTotalLiabilities,
  calculateZakatDue
} from '../utils/zakatCalculations';

export const useZakatCalculator = () => {
  const [assets, setAssets] = useState<Assets>({
    cash: 0,
    gold: 0,
    silver: 0,
    stocks: 0,
    businessAssets: 0,
    otherInvestments: 0
  });

  const [liabilities, setLiabilities] = useState<Liabilities>({
    debts: 0,
    expenses: 0
  });

  const calculations = useMemo(() => ({
    totalAssets: calculateTotalAssets(assets),
    totalLiabilities: calculateTotalLiabilities(liabilities),
    zakatDue: calculateZakatDue(assets, liabilities)
  }), [assets, liabilities]);

  const handleAssetChange = (field: keyof Assets, value: string) => {
    setAssets(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handleLiabilityChange = (field: keyof Liabilities, value: string) => {
    setLiabilities(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return {
    assets,
    liabilities,
    calculations,
    handleAssetChange,
    handleLiabilityChange
  };
};