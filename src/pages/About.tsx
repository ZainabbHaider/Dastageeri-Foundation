import { Users, Award, Target } from "lucide-react";
import Timeline from '../components/Timeline';
import first from "../3.jpg"
export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About Dastigeeri Foundation
          </h1>
          {/* <p className="mt-4 text-xl text-gray-400">
            Building a better world through compassion and sustainable change
          </p> */}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="mt-4 text-gray-300">
                At Dastigeeri Foundation, we believe that even the smallest acts
                of kindness can create ripples of hope and transformation. Born
                out of compassion and a deep desire to uplift lives, our journey
                began in 2021 with a simple yet profound mission:{" "}
                <span className="text-emerald-500 font-bold">
                  to change one life each day.
                </span>
              </p>

              <p className="mt-4 text-gray-300">
                It started humbly during Ramzan, as we delivered ration packs to
                100 deserving families. What began as a heartfelt initiative has
                grown into a movement of empathy and action, impacting over
                <span className="text-emerald-500 font-bold">
                  {" "}
                  10,000 individuals
                </span>{" "}
                across Pakistan. From providing meals to the hungry, to offering
                education to the underserved, to standing strong with
                communities in times of disaster—our work is driven by one
                unwavering belief:{" "}
                <span className="text-emerald-500 font-bold">
                  together, we can create a better tomorrow.
                </span>
              </p>

              <p className="mt-4 text-gray-300">
                But this is just the beginning. Our most ambitious initiative
                yet, the{" "}
                <span className="text-emerald-500 font-bold">
                  "Build Our Future" Project
                </span>
                , is shaping brighter futures for underprivileged children by
                giving them access to quality education. It’s a promise of hope,
                dignity, and opportunity, built with the support of people like
                you.
              </p>

              <p className="mt-4 text-gray-300">
                Every meal served, every life touched, and every child educated
                is a testament to what’s possible when humanity comes together.
                Join us as we continue to write stories of hope and resilience.
              </p>
              <p className="mt-4 text-emerald-500 font-bold">
                Together, let’s make a difference. One life, one day at a time.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={first}
                alt="Team working together"
                className="rounded-lg w-full h-auto max-w-xxl"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center bg-dark-200 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-900/20 rounded-full">
                <Users className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                10K+ Lives Impacted
              </h3>
              <p className="mt-2 text-gray-400">
                Through various programs and initiatives
              </p>
            </div>
            <div className="text-center bg-dark-200 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-900/20 rounded-full">
                <Target className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                3+ Projects
              </h3>
              <p className="mt-2 text-gray-400">
                Successfully completed across regions
              </p>
            </div>
            <div className="text-center bg-dark-200 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-900/20 rounded-full">
                <Award className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">4+ Years</h3>
              <p className="mt-2 text-gray-400">
                Of dedicated community service
              </p>
            </div>
          </div>
        </div>
            <Timeline />
        {/* <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="bg-dark-200 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    1500648767791 + member
                  }-00dce5e783cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                  alt="Team member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white">
                    Team Member {member}
                  </h3>
                  <p className="text-emerald-400">Position</p>
                  <p className="mt-2 text-gray-400">
                    Dedicated to making a positive impact in our communities.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
