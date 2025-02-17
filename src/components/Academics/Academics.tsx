import React from 'react';
import { BookOpen, Award, Users, Globe, Microscope, Code, Palette, Calculator } from 'lucide-react';
import { SubjectCard } from './SubjectCard';
import { departments } from './academicsData';

export function Academics() {
  return (
    <section id="academics" className="pt-20">
      {/* Curriculum Overview */}
      <div id="curriculum" className="relative bg-blue-900 text-white py-20 scroll-mt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
            alt="Library study area"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Academic Excellence</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-blue-100 mb-6">
                Our curriculum is designed to foster critical thinking, creativity, and academic excellence. 
                We follow the CBSE curriculum enhanced with international best practices and innovative 
                teaching methodologies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <BookOpen className="w-6 h-6" />, text: "CBSE Curriculum" },
                  { icon: <Award className="w-6 h-6" />, text: "Academic Excellence" },
                  { icon: <Users className="w-6 h-6" />, text: "Personalized Learning" },
                  { icon: <Globe className="w-6 h-6" />, text: "Global Perspective" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-4">
                {[
                  "Comprehensive CBSE curriculum from Grade 1 to 12",
                  "Small class sizes for personalized attention",
                  "Regular assessments and feedback",
                  "Integration of technology in learning",
                  "Focus on practical and experiential learning",
                  "Special emphasis on language and communication skills"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-blue-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Departments */}
      <div id="departments" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Academic Departments</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Our specialized departments ensure comprehensive education across all major disciplines
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <SubjectCard key={index} {...dept} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}