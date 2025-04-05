import { Milestone } from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'The foundation was born with the goal of impacting one life each day.'
    },
    {
      year: '2022-2024',
      title: 'Growth & Impact',
      description: 'Expanded our reach through food drives, disaster relief, and educational initiatives.'
    },
    {
      year: '2025 and Beyond',
      title: 'Future Vision',
      description: 'Committed to deepening our impact with innovative projects and partnerships.'
    }
  ];

  return (
    <div className="py-16 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Journey</h2>
        </div>

        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-dark-100" />

          <div className="relative flex justify-between items-start">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex flex-col items-center w-[25%] px-4">
                {/* Timeline point */}
                <div className="w-12 h-12 rounded-full bg-dark-200 border-4 border-accent-500 flex items-center justify-center mb-4">
                  <Milestone className="w-5 h-5 text-accent-500" />
                </div>

                {/* Content */}
                <div className="text-center mt-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 font-semibold text-sm mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}