import React, { useState } from 'react';
import { Bell, Calendar, Trophy, Megaphone, X } from 'lucide-react';

const announcements = [
  {
    type: 'event',
    icon: <Calendar className="w-4 h-4" />,
    title: "Parent-Teacher Meeting",
    date: "March 15th, 2024",
    description: "Annual parent-teacher conference to discuss student progress"
  },
  {
    type: 'achievement',
    icon: <Trophy className="w-4 h-4" />,
    title: "National Science Fair Winners",
    date: "February 28th, 2024",
    description: "Our students won first place in the National Science Fair"
  },
  {
    type: 'announcement',
    icon: <Megaphone className="w-4 h-4" />,
    title: "Admissions Open 2024-25",
    date: "Ongoing",
    description: "Applications now being accepted for the new academic year"
  },
  {
    type: 'event',
    icon: <Calendar className="w-4 h-4" />,
    title: "Annual Sports Day",
    date: "April 5th, 2024",
    description: "Join us for our annual sports day celebration"
  },
  {
    type: 'announcement',
    icon: <Megaphone className="w-4 h-4" />,
    title: "New STEM Lab",
    date: "March 20th, 2024",
    description: "Inauguration of our state-of-the-art STEM laboratory"
  }
];

export function Announcements() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredAnnouncements = selectedType
    ? announcements.filter(a => a.type === selectedType)
    : announcements;

  return (
    <>
      {/* Marquee Banner */}
      <div className="bg-blue-50 border-y border-blue-100 py-3 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center overflow-hidden">
            <button
              onClick={() => setIsExpanded(true)}
              className="flex-shrink-0 px-4 flex items-center gap-2 hover:text-blue-700 transition-colors"
            >
              <Bell className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Latest Updates</span>
            </button>
            <div className="relative overflow-hidden flex-1">
              <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
                {[...announcements, ...announcements].map((announcement, index) => (
                  <span key={index} className="text-sm text-blue-800 flex items-center gap-2">
                    {announcement.icon}
                    <span>{announcement.title}</span>
                    <span className="mx-4 text-blue-300">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Announcements Panel */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 relative">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-blue-900">School Announcements</h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setSelectedType(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${!selectedType 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedType('event')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedType === 'event'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Events
                </button>
                <button
                  onClick={() => setSelectedType('achievement')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedType === 'achievement'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Achievements
                </button>
                <button
                  onClick={() => setSelectedType('announcement')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedType === 'announcement'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Announcements
                </button>
              </div>
            </div>

            {/* Announcements List */}
            <div className="max-h-[60vh] overflow-y-auto p-6">
              <div className="space-y-4">
                {filteredAnnouncements.map((announcement, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {announcement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {announcement.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {announcement.description}
                        </p>
                        <div className="text-xs text-gray-500">
                          {announcement.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}