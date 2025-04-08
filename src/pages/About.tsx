import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Users, Award, Target } from "lucide-react";
import Timeline from "../components/Timeline";

// Static imports of images
import img1 from "../18.jpg";
import img2 from "../31.jpg";
import img3 from "../3.jpg";
import img4 from "../29.jpg";
import img5 from "../30.jpg";
import img6 from "../17.jpg";

export default function About() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500); // Change slide every 4 seconds
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About Dastigeeri Foundation
          </h1>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Story Text */}
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
                <span className="text-emerald-500 font-bold"> 10,000 individuals</span>{" "}
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

            {/* Image Carousel */}
            <div className="relative">
              <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="keen-slider__slide flex justify-center items-center"
                  >
                    <img
                      src={img}
                      alt={`Slide ${i + 1}`}
                      className="rounded-xl w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={() => instanceRef.current?.prev()}
                  className="bg-white-200 hover:bg-gray-400 text-white p-2 rounded-full shadow-lg"
                >
                  ‹
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={() => instanceRef.current?.next()}
                  className="bg-white-200 hover:bg-gray-400 text-white p-2 rounded-full shadow-lg"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: "10K+ Lives Impacted",
                subtitle: "Through various programs and initiatives",
              },
              {
                icon: Target,
                title: "3+ Projects",
                subtitle: "Successfully completed across regions",
              },
              {
                icon: Award,
                title: "4+ Years",
                subtitle: "Of dedicated community service",
              },
            ].map(({ icon: Icon, title, subtitle }, index) => (
              <div
                key={index}
                className="text-center bg-dark-200 p-8 rounded-2xl shadow-lg"
              >
                <div className="inline-flex items-center justify-center p-6 bg-emerald-900/20 rounded-full">
                  <Icon className="h-12 w-12 text-emerald-500" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-gray-400 text-base">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <Timeline />
      </div>
    </div>
  );
}
