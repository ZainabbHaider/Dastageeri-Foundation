import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Build Our Future',
    date: 'March 15, 2024',
    description: 'Responding to recent natural disasters with immediate aid and support.',
    image: 'src/4.jpg'
  },
  {
    title: 'Build a Masjid',
    date: 'March 5, 2024',
    description: 'Over 1000 families benefited from our recent health camp.',
    image: 'src/2.jpg'
  },
  {
    title: 'Ramzan Ration Drives',
    date: 'March 10, 2024',
    description: 'Expanding our reach with a new facility to support underprivileged students.',
    image: 'src/1.jpg'
  }
];

export default function NewsSection() {
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
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="h-48 w-full object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  {item.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-emerald-600 hover:text-emerald-500 flex items-center"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}