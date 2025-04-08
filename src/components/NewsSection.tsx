import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import first from "../12.jpg"
import second from "../2.jpg"
import third from "../17.jpg"

const news = [
  {
    id: 'ramzan-ration',
    title: 'Ramzan Ration Drives',
    date: 'March 10, 2024',
    description: 'Our flagship initiative has successfully provided monthly rations to over 1,000 families, ensuring that no',
    image: third
  },
  {
    id: 'build-future',
    title: 'Build Our Future',
    date: 'March 15, 2024',
    description: 'Partnering with reputable institutions, we’re currently empowering 20 underprivileged students with quality',
    image: first
  },
  {
    id: 'build-masjid',
    title: 'Build a Masjid',
    date: 'March 5, 2024',
    description: 'Building a masjid is more than constructing a place of worship—it is creating a space for community,',
    image: second
  },
];


export default function NewsSection() {
  const navigate = useNavigate();

  const handleReadMore = (sectionId: string) => {
    navigate('/blog'); // Navigate to the blog page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -100; // Adjust this value based on your header or padding
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 0); // Wait for navigation to complete
  };
  

  return (
    <div className="bg-dark-200 py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white-900 sm:text-4xl">
            Latest News & Updates
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-emerald-500">
            Stay informed about our latest initiatives and impact.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:scale-110 duration-100 hover:-translate-y-1">
              <img
                className="h-48 w-full object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="p-6">
                
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  {item.description}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => handleReadMore(item.id)}
                    className="text-emerald-600 hover:text-emerald-500 flex items-center"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


