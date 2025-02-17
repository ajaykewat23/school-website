import React from 'react';
import { GraduationCap, BookOpen, Users, Target, Award, Globe } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">Our Expertise Area</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<GraduationCap className="w-12 h-12 text-blue-600" />}
            title="Expert Faculty"
            description="Learn from industry experts and experienced educators dedicated to your success."
          />
          <FeatureCard
            icon={<Award className="w-12 h-12 text-blue-600" />}
            title="Academic Excellence"
            description="Consistently high academic performance with outstanding board results."
          />
          <FeatureCard
            icon={<Target className="w-12 h-12 text-blue-600" />}
            title="Holistic Development"
            description="Focus on academic, physical, and emotional growth of every student."
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-blue-600" />}
            title="Modern Curriculum"
            description="Comprehensive CBSE programs designed to meet today's educational standards."
          />
          <FeatureCard
            icon={<Globe className="w-12 h-12 text-blue-600" />}
            title="Global Perspective"
            description="International exposure through exchange programs and global partnerships."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-blue-600" />}
            title="Individual Attention"
            description="Small class sizes ensuring personalized attention for every student."
          />
        </div>
      </div>
    </section>
  );
}