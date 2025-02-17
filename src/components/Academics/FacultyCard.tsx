import React from 'react';

interface FacultyCardProps {
  name: string;
  role: string;
  image: string;
  qualifications: string;
  experience: string;
}

export function FacultyCard({ name, role, image, qualifications, experience }: FacultyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-sm space-y-1">
              <p><strong>Qualifications:</strong> {qualifications}</p>
              <p><strong>Experience:</strong> {experience}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-900">{name}</h3>
        <p className="text-sm text-blue-600">{role}</p>
      </div>
    </div>
  );
}