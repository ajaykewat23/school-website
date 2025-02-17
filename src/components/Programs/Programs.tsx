import React from 'react';
import { ProgramCard } from './ProgramCard';
import { programsData } from './programsData';

export function Programs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">Our Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}