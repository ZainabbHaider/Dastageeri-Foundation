import { Banknote, Info, Heart } from 'lucide-react';

export default function Donate() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
          Make a Donation
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Your support helps us continue our mission. Please use the following bank details to donate.
        </p>

        <div className="bg-dark-200 rounded-2xl shadow-lg p-8 text-left text-gray-200 space-y-6">
          <div className="flex items-center space-x-3">
            <Banknote className="h-6 w-6 text-emerald-500" />
            <h2 className="text-xl font-semibold">Bank Account Information</h2>
          </div>

          <div className="space-y-4">
            <div>
              <span className="block text-sm text-gray-400">Account Title</span>
              <span className="text-lg font-medium text-white">Asad Hussain</span>
            </div>
            <div>
              <span className="block text-sm text-gray-400">Account Number</span>
              <span className="text-lg font-medium text-white">3284383000000441</span>
            </div>
            <div>
              <span className="block text-sm text-gray-400">Bank Name</span>
              <span className="text-lg font-medium text-white">Faysal Bank</span>
            </div>
            <div>
              <span className="block text-sm text-gray-400">IBAN</span>
              <span className="text-lg font-medium text-white">PK39FAYS3284383000000441</span>
            </div>
            {/* <div>
              <span className="block text-sm text-gray-400">Branch Code</span>
              <span className="text-lg font-medium text-white">1234</span>
            </div> */}
          </div>

          <div className="flex items-start space-x-2 text-sm text-gray-400 pt-4 border-t border-dark-300">
            <Info className="w-4 h-4 mt-1 text-gray-500" />
            <span>
              After making a donation, please email your receipt to <a href="mailto:dastigeerifoundation@gmail.com" className="text-emerald-400 underline">dastigeerifoundation@gmail.com</a> for confirmation.
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Heart className="h-8 w-8 text-emerald-500" />
        </div>
      </div>
    </div>
  );
}
