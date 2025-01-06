import { useZakatCalculator } from '../hooks/useZakatCalculator';
import AssetInput from '../components/zakat/AssetInput';
import ZakatSummary from '../components/zakat/ZakatSummary';

export default function Zakat() {
  const {
    assets,
    liabilities,
    calculations,
    handleAssetChange,
    handleLiabilityChange
  } = useZakatCalculator();

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Zakat Calculator
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Calculate your Zakat obligation with our easy-to-use calculator
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="bg-dark-200 rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-medium text-white mb-4">Assets</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {Object.entries(assets).map(([key, value]) => (
                      <AssetInput
                        key={key}
                        label={key}
                        value={value}
                        onChange={(value) => handleAssetChange(key as keyof typeof assets, value)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-white mb-4">Liabilities</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {Object.entries(liabilities).map(([key, value]) => (
                      <AssetInput
                        key={key}
                        label={key}
                        value={value}
                        onChange={(value) => handleLiabilityChange(key as keyof typeof liabilities, value)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ZakatSummary
              totalAssets={calculations.totalAssets}
              totalLiabilities={calculations.totalLiabilities}
            />
          </div>
        </div>
      </div>
    </div>
  );
}