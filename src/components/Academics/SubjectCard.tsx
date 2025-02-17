import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SubjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  subjects: string[];
}

export function SubjectCard({ icon: Icon, title, description, subjects }: SubjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {subjects.map((subject, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}