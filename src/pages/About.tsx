import { Users, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About Dastageeri Foundation
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Building a better world through compassion and sustainable change
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Our Story</h2>
              <p className="mt-4 text-gray-300">
                Founded in 2010, Dastageeri Foundation has been at the forefront of humanitarian
                work, focusing on sustainable development and emergency relief. Our journey
                began with a simple mission: to empower marginalized communities and provide
                them with the tools they need to build a better future.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Team working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center bg-dark-200 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-900/20 rounded-full">
                <Users className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">100K+ Lives Impacted</h3>
              <p className="mt-2 text-gray-400">Through various programs and initiatives</p>
            </div>
            <div className="text-center bg-dark-200 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-900/20 rounded-full">
                <Target className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">50+ Projects</h3>
              <p className="mt-2 text-gray-400">Successfully completed across regions</p>
            </div>
            <div className="text-center bg-dark-200 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-900/20 rounded-full">
                <Award className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">15+ Years</h3>
              <p className="mt-2 text-gray-400">Of dedicated community service</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-dark-200 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1500648767791 + member}-00dce5e783cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                  alt="Team member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white">Team Member {member}</h3>
                  <p className="text-emerald-400">Position</p>
                  <p className="mt-2 text-gray-400">
                    Dedicated to making a positive impact in our communities.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}