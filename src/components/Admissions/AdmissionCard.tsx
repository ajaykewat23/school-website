import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AdmissionCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export function AdmissionCard({ icon, title, children }: AdmissionCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">{title}</h3>
      {children}
    </div>
  );
}