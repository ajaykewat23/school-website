import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
}

export function TeamMember({ name, role, image, bio, email, linkedin }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2">
              <a
                href={`mailto:${email}`}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-1">{name}</h3>
        <p className="text-sm text-blue-600 mb-4">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
}