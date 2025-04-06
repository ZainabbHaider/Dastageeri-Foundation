import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero from "../AID EASE HARBOUR2.png";

export default function Hero() {
  return (
    <div className="relative bg-dark-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-dark-200 sm:pb-16 md:pb-20 lg:pb-2 xl:pb-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                  <span className="block">Transforming Lives</span>
                  <span className="block text-emerald-600">One Day at a Time</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300">
                  At Dastigeeri Foundation, we believe small acts of kindness can spark big change. With compassion and a vision to uplift, we’re on a mission to make a difference—one life, every day.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
                  <Link
                    to="/donate"
                    className="px-6 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 text-center"
                  >
                    Donate Now
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-md bg-emerald-100 text-emerald-700 font-medium hover:bg-emerald-200 text-center"
                  >
                    Volunteer
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <img
                  src={hero}
                  alt="Volunteers helping in community"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
