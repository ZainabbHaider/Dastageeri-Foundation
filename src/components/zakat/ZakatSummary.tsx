import { Calculator, Info } from 'lucide-react';
import { NISAB_THRESHOLD, ZAKAT_RATE } from '../../utils/zakatCalculations';

interface ZakatSummaryProps {
  totalAssets: number;
  totalLiabilities: number;
}

export default function ZakatSummary({ totalAssets, totalLiabilities }: ZakatSummaryProps) {
  const netWorth = totalAssets - totalLiabilities;
  const zakatDue = netWorth >= NISAB_THRESHOLD ? netWorth * ZAKAT_RATE : 0;

  return (
    <div className="bg-dark-200 rounded-lg shadow-lg p-8">
      <h2 className="text-lg font-medium text-white mb-4">Zakat Summary</h2>
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Total Assets</span>
            <span className="font-medium text-white">
              {"$" + totalAssets.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-400">Total Liabilities</span>
            <span className="font-medium text-white">
              {"$" + totalLiabilities.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-400">Net Worth</span>
            <span className="font-medium text-white">
              {"$" + netWorth.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="border-t border-dark-300 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-white">Zakat Due</span>
            <span className="text-xl font-bold text-emerald-500">
              {"$" + zakatDue.toFixed(2)}
            </span>
          </div>
          {netWorth < NISAB_THRESHOLD && (
            <p className="text-sm text-gray-400 mt-2">
              No Zakat is due as net worth is below Nisab threshold (${NISAB_THRESHOLD})
            </p>
          )}
        </div>

        <button
          type="button"
          className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => window.location.href = '/donate'}
          disabled={zakatDue === 0}
        >
          <Calculator className="h-5 w-5 mr-2" />
          Pay Zakat Now
        </button>

        <div className="mt-6 bg-dark-300 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-white">About Zakat</h3>
              <div className="mt-2 text-sm text-gray-400">
                <p>Zakat is calculated at {ZAKAT_RATE * 100}% of your eligible wealth above the Nisab threshold (${NISAB_THRESHOLD}).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}