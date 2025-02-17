import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  ageGroup: string;
  grades: string;
  features: string[];
}

export function CategoryCard({ icon: Icon, title, ageGroup, grades, features }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
        <div className="text-sm text-gray-600 space-y-2 mb-4">
          <p><strong>Age Group:</strong> {ageGroup}</p>
          <p><strong>Grades:</strong> {grades}</p>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}