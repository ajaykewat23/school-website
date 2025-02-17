import React from 'react';
import { Calendar } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
}

export function ProgramCard({ title, description, duration }: ProgramCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
      <Calendar className="w-8 h-8 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-sm text-blue-600 font-medium">
        Duration: {duration}
      </div>
    </div>
  );
}