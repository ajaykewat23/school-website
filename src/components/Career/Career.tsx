import React, { useState } from 'react';
import { Briefcase, GraduationCap, Users, FileText, Building2, Mail, Check, Copy } from 'lucide-react';
import { JobCard } from './JobCard';
import { currentOpenings, departments } from './careerData';

export function Career() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('careers@sunshineschool.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Career Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our team of dedicated educators and staff to make a difference in students' lives
          </p>
        </div>

        {/* Why Join Us */}
        <div id="why-join-us" className="bg-white rounded-lg shadow-lg p-8 mb-16 scroll-mt-24">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Why Join Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Modern Infrastructure",
                description: "State-of-the-art facilities and resources for teaching and learning"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Collaborative Environment",
                description: "Work with passionate educators and supportive colleagues"
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Professional Growth",
                description: "Regular training programs and career advancement opportunities"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div id="current-openings" className="mb-16 scroll-mt-24">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Current Openings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentOpenings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>

        {/* Departments */}
        <div id="departments-list" className="bg-white rounded-lg shadow-lg p-8 mb-16 scroll-mt-24">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Our Departments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{dept.name}</h4>
                <ul className="space-y-2">
                  {dept.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div id="how-to-apply" className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-lg p-8 text-white scroll-mt-24">
          <h3 className="text-2xl font-bold mb-8">How to Apply</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-6 h-6" />,
                title: "1. Submit Application",
                description: "Send your CV and cover letter to our email address"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "2. Interview Process",
                description: "Multiple rounds including demo classes for teaching positions"
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "3. Onboarding",
                description: "Comprehensive orientation and integration program"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors group relative"
            >
              <Mail className="w-5 h-5 mr-2" />
              {copied ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Email Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Email Address
                </>
              )}
            </button>
            <p className="mt-4 text-sm text-blue-100">
              Send your application to: careers@sunshineschool.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}