import React from 'react';

export function Timeline() {
  const milestones = [
    {
      year: "1990",
      title: "Foundation",
      description: "Established with a vision to provide quality education"
    },
    {
      year: "1995",
      title: "CBSE Affiliation",
      description: "Received CBSE affiliation and expanded academic programs"
    },
    {
      year: "2000",
      title: "Campus Expansion",
      description: "New building with modern facilities and infrastructure"
    },
    {
      year: "2010",
      title: "Sports Complex",
      description: "State-of-the-art sports facilities and training programs"
    },
    {
      year: "2015",
      title: "Digital Initiative",
      description: "Integration of technology in teaching and learning"
    },
    {
      year: "2020",
      title: "Research Center",
      description: "Establishment of advanced research facilities"
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

      {/* Timeline Items */}
      <div className="relative">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`flex items-center justify-between mb-8 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="w-5/12"></div>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow"></div>
            </div>
            <div className="w-5/12">
              <div className={`bg-white p-6 rounded-lg shadow-lg ${
                index % 2 === 0 ? 'text-right' : ''
              }`}>
                <div className="text-sm text-blue-600 font-semibold mb-1">{milestone.year}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}