import React from 'react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string[];
}

export function ContactInfo({ icon, title, info }: ContactInfoProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-white/10 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          {info.map((line, index) => (
            <p key={index} className="text-blue-100 text-sm">{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}