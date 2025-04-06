import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-200">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-emerald-500" />
              <span className="text-white text-2xl font-bold">Dastigeeri</span>
            </div>
            <p className="text-gray-400 mb-6">
            Together, let’s make a difference. One life, one day at a time.

            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/dastigeerifoundation/" className="text-gray-400 hover:text-emerald-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/dastigeerifoundation/" className="text-gray-400 hover:text-emerald-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-500">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-emerald-500">Projects</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-emerald-500">Donate</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-500">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-emerald-500 mr-2" />
                <span className="text-gray-400">+92-3330252800</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-emerald-500 mr-2" />
                <span className="text-gray-400">dastigeerifoundation@gmail.com</span>
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
            <p>&copy; {new Date().getFullYear()} Dastigeeri Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}