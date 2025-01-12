import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-dark-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-dark-200 sm:pb-16 md:pb-20 lg:pb-2 xl:pb-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-38 xl:mt-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              {/* Left Section - Text */}
              <div className="sm:text-center lg:text-left lg:w-1/2 lg:mr-20">
                <h1 className="text-4xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transforming Lives</span>
                  <span className="block text-emerald-600">One Day at a Time</span>
                </h1>
                <p className="mt-3 text-base text-white-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  At Dastigeeri Foundation, we believe small acts of kindness can spark big change. With compassion and a vision to uplift, we’re on a mission to make a difference—one life, every day. Together, we’re creating ripples of hope and transformation across communities.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#donate"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                    >
                      <Link to="/donate">
                        Donate Now
                      </Link>
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#volunteer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"
                    >
                      <Link to="/volunteer">
                        Volunteer 
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
              {/* Right Section - Image */}
              <div className="lg:w-1/2 lg:h-full ">
                <img
                  className="w-full h-full object-cover"
                  src="src/logo.png"
                  alt="Volunteers helping in community"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
