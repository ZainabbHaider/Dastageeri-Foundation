import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-200">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-emerald-500" />
              <span className="text-white text-2xl font-bold">Dastageeri</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering communities and changing lives through sustainable development
              and humanitarian assistance.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Our Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Get Involved</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Donate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-emerald-500 mr-2" />
                <span className="text-gray-400">123 Charity Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-emerald-500 mr-2" />
                <span className="text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-emerald-500 mr-2" />
                <span className="text-gray-400">info@dastageeri.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-300 pt-8">
          {/* <div className="text-center">
            <form className="max-w-md mx-auto">
              <label htmlFor="email" className="block text-white text-lg font-semibold mb-4">
                Subscribe to Our Newsletter
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-r-md hover:bg-emerald-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
 */}
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dastageeri Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}