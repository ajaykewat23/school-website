import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export function ResourceCard({ icon: Icon, title, description, items }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg h-full">
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}