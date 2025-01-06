import { useState } from 'react';
import { Heart, DollarSign, CreditCard, Calendar } from 'lucide-react';

const causes = [
  {
    id: 'emergency',
    title: 'Emergency Relief',
    description: 'Support immediate disaster response and humanitarian aid',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Help provide quality education to underprivileged children',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Support medical care and health initiatives',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  }
];

const amounts = [1000, 2500, 5000, 10000, 15000, 25000];

export default function Donate() {
  const [donationData, setDonationData] = useState({
    amount: '',
    customAmount: '',
    cause: '',
    frequency: 'one-time',
    currency: 'PKR'
  });

  const handleAmountSelect = (amount: number) => {
    setDonationData(prev => ({
      ...prev,
      amount: amount.toString(),
      customAmount: ''
    }));
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationData(prev => ({
      ...prev,
      amount: '',
      customAmount: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    console.log('Processing donation:', donationData);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Make a Donation
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Your generosity can change lives
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className={`bg-dark-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 ${
                donationData.cause === cause.id ? 'ring-2 ring-emerald-500' : ''
              }`}
              onClick={() => setDonationData(prev => ({ ...prev, cause: cause.id }))}
            >
              <img
                src={cause.image}
                alt={cause.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-white">{cause.title}</h3>
                <p className="mt-2 text-gray-400">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-dark-200 rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Select Amount
                </label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors
                        ${donationData.amount === amount.toString()
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-dark-300 text-gray-300 border-dark-400 hover:bg-dark-400'
                        }`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      PKR {amount}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label htmlFor="customAmount" className="sr-only">
                    Custom Amount
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    
                    <input
                      type="number"
                      name="customAmount"
                      id="customAmount"
                      className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 pr-12 border-dark-300 rounded-md"
                      placeholder="Custom Amount"
                      value={donationData.customAmount}
                      onChange={handleCustomAmount}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className={`flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium
                      ${donationData.frequency === 'one-time'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-dark-300 text-gray-300 border-dark-400 hover:bg-dark-400'
                      }`}
                    onClick={() => setDonationData(prev => ({ ...prev, frequency: 'one-time' }))}
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    One-time
                  </button>
                  <button
                    type="button"
                    className={`flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium
                      ${donationData.frequency === 'monthly'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-dark-300 text-gray-300 border-dark-400 hover:bg-dark-400'
                      }`}
                    onClick={() => setDonationData(prev => ({ ...prev, frequency: 'monthly' }))}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Monthly
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-300 mb-2">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-dark-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                  value={donationData.currency}
                  onChange={(e) => setDonationData(prev => ({ ...prev, currency: e.target.value }))}
                >
                  <option value="GBP">PKR - Pakistani Rupee</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
}