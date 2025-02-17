import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export function JobCard({ title, department, location, type, experience, description }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h4 className="text-xl font-semibold text-blue-900 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-4 mb-4 text-sm">
        <div className="flex items-center text-gray-600">
          <Briefcase className="w-4 h-4 mr-1" />
          {department}
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          {type}
        </div>
      </div>
      <div className="mb-4">
        <span className="text-sm font-medium text-blue-600">
          Experience: {experience}
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}