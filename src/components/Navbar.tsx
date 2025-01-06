import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
            <img
                src="src/logo.png" // Replace with the correct path to your logo
              
                className="h-8 w-8"
              />
              <span className="font-bold text-xl text-white">Dastageeri Foundation</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-accent-400">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-accent-400">About</Link>
            <Link to="/zakat" className="text-gray-300 hover:text-accent-400">Zakat Calculator</Link>
            <Link to="/volunteer" className="text-gray-300 hover:text-accent-400">Volunteer</Link>
            <Link to="/contact" className="text-gray-300 hover:text-accent-400">Contact</Link>
            <Link to="/donate">
              <button className="bg-accent-500 text-white px-4 py-2 rounded-md hover:bg-accent-600 transition duration-300">
                Donate Now
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-accent-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-accent-400">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-accent-400">About</Link>
            <Link to="/donate" className="block px-3 py-2 text-gray-300 hover:text-accent-400">Donate</Link>
            <Link to="/zakat" className="block px-3 py-2 text-gray-300 hover:text-accent-400">Zakat Calculator</Link>
            <Link to="/volunteer" className="block px-3 py-2 text-gray-300 hover:text-accent-400">Volunteer</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-accent-400">Contact</Link>
            <Link to="/donate" className="block px-3 py-2">
              <button className="w-full bg-accent-500 text-white px-4 py-2 rounded-md hover:bg-accent-600 transition duration-300">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}