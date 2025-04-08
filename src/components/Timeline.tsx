import { Milestone } from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'The foundation was born with the goal of impacting one life each day.',
    },
    {
      year: '2022-2024',
      title: 'Growth & Impact',
      description: 'Expanded our reach through food drives, disaster relief, and educational initiatives.',
    },
    {
      year: '2025 and Beyond',
      title: 'Future Vision',
      description: 'Committed to deepening our impact with innovative projects and partnerships.',
    },
  ];

  return (
    <div className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Our Journey</h2>
        </div>

        <div className="relative">
          {/* Horizontal line */}
          {/* <div className="absolute top-1/2 left-0 right-0 h-1 bg-dark-100 rounded-full" /> */}

          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-full md:w-1/3 text-center"
              >
                {/* Timeline point */}
                <div className="w-16 h-16 rounded-full bg-dark-200 border-4 border-accent-500 flex items-center justify-center shadow-lg">
                  <Milestone className="w-8 h-8 text-accent-500" />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <span className="inline-block px-4 py-1 rounded-full bg-accent-500/10 text-accent-500 font-semibold text-base mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
