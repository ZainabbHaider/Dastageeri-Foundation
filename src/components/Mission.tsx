import { Target, Heart, Users } from 'lucide-react';

export default function Mission() {
  return (
    <div className="py-16 bg-dark-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white-900 sm:text-4xl">
            Our Mission & Values
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-emerald-500">
            Building a better world through compassion, dedication, and sustainable change.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                      <Target className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Mission</h3>
                  <p className="mt-5 text-base text-gray-500">
                  To drive transformative impact by addressing urgent challenges while fostering long-term, sustainable growth for underprivileged communities across Pakistan.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Vision</h3>
                  <p className="mt-5 text-base text-gray-500">
                  Guided by the conviction to leave the world better than we found it, our vision is a future shaped by compassion and action, ensuring dignity, hope, and boundless opportunities for every individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}