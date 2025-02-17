import React, { useEffect, useRef } from 'react';
import { ResourceCard } from './ResourceCard';
import { resources } from './studentsData';

export function StudentsCorner() {
  const sectionRefs = {
    learningResources: useRef<HTMLDivElement>(null),
    academicSupport: useRef<HTMLDivElement>(null),
    studentActivities: useRef<HTMLDivElement>(null),
    studentServices: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="students-corner" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Students Corner</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your one-stop destination for all academic resources, activities, and support services
          </p>
        </div>

        {/* Learning Resources Section */}
        <div 
          id="learning-resources" 
          ref={sectionRefs.learningResources}
          className="mb-20 scroll-mt-24 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-4">Learning Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div id="digital-library" className="lg:col-span-1">
              <ResourceCard {...resources[0]} />
            </div>
            <div id="study-materials" className="lg:col-span-1">
              <ResourceCard {...resources[1]} />
            </div>
            <div id="online-courses" className="lg:col-span-1">
              <ResourceCard {...resources[2]} />
            </div>
          </div>
        </div>

        {/* Academic Support Section */}
        <div 
          id="academic-support"
          ref={sectionRefs.academicSupport}
          className="mb-20 scroll-mt-24 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-4">Academic Support</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div id="homework-help" className="lg:col-span-1">
              <ResourceCard {...resources[3]} />
            </div>
            <div id="subject-notes" className="lg:col-span-1">
              <ResourceCard {...resources[4]} />
            </div>
            <div id="past-papers" className="lg:col-span-1">
              <ResourceCard {...resources[5]} />
            </div>
          </div>
        </div>

        {/* Student Activities Section */}
        <div 
          id="student-activities"
          ref={sectionRefs.studentActivities}
          className="mb-20 scroll-mt-24 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-4">Student Activities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div id="clubs" className="lg:col-span-1">
              <ResourceCard {...resources[6]} />
            </div>
            <div id="sports" className="lg:col-span-1">
              <ResourceCard {...resources[7]} />
            </div>
            <div id="cultural-events" className="lg:col-span-1">
              <ResourceCard {...resources[8]} />
            </div>
          </div>
        </div>

        {/* Student Services Section */}
        <div 
          id="student-services"
          ref={sectionRefs.studentServices}
          className="scroll-mt-24 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-4">Student Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div id="counseling" className="lg:col-span-1">
              <ResourceCard {...resources[9]} />
            </div>
            <div id="health-services" className="lg:col-span-1">
              <ResourceCard {...resources[10]} />
            </div>
            <div id="transport" className="lg:col-span-1">
              <ResourceCard {...resources[11]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}