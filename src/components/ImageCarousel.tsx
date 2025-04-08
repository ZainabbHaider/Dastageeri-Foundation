import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img15 from '../15.jpg';
import img3 from '../3.jpg';
import img35 from '../35.jpg';
import img16 from '../16.jpg';
import img1 from '../1.jpg';
import img5 from '../5.jpg';
import img19 from '../19.jpg';
import img36 from '../36.jpg';
import img14 from '../14.jpg';
import img21 from '../21.jpg';
import img22 from '../22.jpg';
import img24 from '../24.jpg';
import img25 from '../25.jpg';
import img26 from '../26.jpg';
import img27 from '../27.jpg';

const images = [
  {
    url: img15,
    caption: 'Food and Ration Services'
  },
  {
    url: img3,
    caption: 'Iftaar & Food Drives'
  },
  {
    url: img27,
    caption: 'Food and Ration Services'
  },
  {
    url: img26,
    caption: 'Supporting Education Initiatives'
  },
  {
    url: img22,
    caption: 'Iftaar & Food Drives'
  },
  {
    url: img5,
    caption: 'Providing Undernourished'
  },
  {
    url: img24,
    caption: 'Supporting Education Initiatives'
  },
  {
    url: img14,
    caption: 'Iftaar & Food Drives'
  },
  {
    url: img16,
    caption: 'Food and Ration Services'
  },
  {
    url: img21,
    caption: 'Iftaar & Food Drives'
  },
  {
    url: img1,
    caption: 'Food and Ration Services'
  },
  
  {
    url: img19,
    caption: 'Iftaar & Food Drives'
  },
  {
    url: img25,
    caption: 'Supporting Education Initiatives'
  }
];

  // {
  //   url: 'src/8.jpg',
  //   caption: 'Food and Ration Services'
  // },
  // {
  //   url: 'src/9.jpg',
  //   caption: 'Building a Masjid'
  // }
// ];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={index} className="relative min-w-full">
              <img
                src={image.url}
                alt={image.caption}
                loading='lazy'
                className="h-full w-full object-cover object-center"
                // className="h-full w-full object-contain bg-dark-100"

              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                <p className="text-lg font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white rounded-full hover:bg-opacity-75"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}