import React from 'react';
import { Award, Users, Target, Clock, BookOpen, Globe } from 'lucide-react';
import { Timeline } from './Timeline';
import { StatCard } from './StatCard';
import { TeamMember } from './TeamMember';
import { teamData } from './teamData';

export function About() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "5000+", label: "Students" },
    { icon: <BookOpen className="w-6 h-6" />, value: "250+", label: "Faculty Members" },
    { icon: <Globe className="w-6 h-6" />, value: "30+", label: "Years of Excellence" },
    { icon: <Award className="w-6 h-6" />, value: "100%", label: "Success Rate" }
  ];

  return (
    <section className="pt-20 bg-white" id="about">
      {/* Vision & Mission Section */}
      <div id="vision-mission" className="relative bg-blue-900 text-white py-20 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?auto=format&fit=crop&q=80"
            alt="School building"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/95 to-blue-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-blue-100 leading-relaxed">
                To be a leading institution that nurtures young minds, fostering academic excellence,
                character development, and innovative thinking. We aim to create responsible global
                citizens who contribute positively to society.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Target className="w-12 h-12 text-yellow-400" />
                <p className="text-sm text-blue-100">
                  Empowering students to become future leaders and change-makers
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <ul className="space-y-4">
                {[
                  "Provide quality education through innovative teaching methods",
                  "Foster critical thinking and problem-solving skills",
                  "Promote cultural diversity and global awareness",
                  "Develop character, values, and leadership qualities",
                  "Create a supportive and inclusive learning environment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div id="statistics" className="relative py-16 scroll-mt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80"
            alt="School laboratory"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">School Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div id="journey" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">Our Journey</h2>
          <Timeline />
        </div>
      </div>

      {/* Leadership Section */}
      <div id="leadership" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Our Leadership</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Meet our dedicated team of educators and administrators who guide our institution
            towards excellence.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      {/* Recognition Section */}
      <div id="recognition" className="relative py-20 text-white scroll-mt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="School campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/95 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Recognition & Accreditation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "CBSE Excellence Award",
                year: "2023",
                description: "Recognized for outstanding academic performance and institutional practices"
              },
              {
                title: "Green School Certification",
                year: "2022",
                description: "Awarded for environmental consciousness and sustainable practices"
              },
              {
                title: "Sports Excellence Award",
                year: "2023",
                description: "National recognition for outstanding sports infrastructure and achievements"
              }
            ].map((award, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-sm text-blue-200 mb-4">{award.year}</p>
                <p className="text-blue-100">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}