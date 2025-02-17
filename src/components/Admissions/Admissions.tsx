import React from 'react';
import { ClipboardCheck, Clock, DollarSign, GraduationCap, BookOpen, Users, School, FileText } from 'lucide-react';
import { AdmissionCard } from './AdmissionCard';
import { CategoryCard } from './CategoryCard';
import { admissionCategories } from './admissionsData';

export function Admissions() {
  return (
    <section id="admissions" className="py-16 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Admissions Open for 2024-25</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Take the first step towards your child's future. Our admissions process is designed to be straightforward and supportive.
          </p>
        </div>

        {/* Admission Categories */}
        <div id="admission-categories" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 scroll-mt-24">
          {admissionCategories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>

        {/* Admission Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div id="admission-requirements" className="scroll-mt-24">
            <AdmissionCard icon={<ClipboardCheck className="w-6 h-6 text-blue-600" />} title="Requirements">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Birth Certificate
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Previous School Records
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Passport Size Photos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Address Proof
                </li>
              </ul>
            </AdmissionCard>
          </div>

          <div id="admission-dates" className="scroll-mt-24">
            <AdmissionCard icon={<Clock className="w-6 h-6 text-blue-600" />} title="Key Dates">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center justify-between">
                  <span>Form Available</span>
                  <span className="font-semibold">Dec 1, 2023</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Last Date</span>
                  <span className="font-semibold">Mar 31, 2024</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Interview Dates</span>
                  <span className="font-semibold">Apr 15-30, 2024</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Results</span>
                  <span className="font-semibold">May 15, 2024</span>
                </li>
              </ul>
            </AdmissionCard>
          </div>

          <div id="fee-structure" className="scroll-mt-24">
            <AdmissionCard icon={<DollarSign className="w-6 h-6 text-blue-600" />} title="Fee Structure">
              <div className="space-y-4 text-gray-600">
                <p>Transparent fee structure with various payment options available.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Quarterly Payment Option
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Sibling Discounts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Merit Scholarships
                  </li>
                </ul>
              </div>
            </AdmissionCard>
          </div>
        </div>

        {/* How to Apply */}
        <div id="how-to-apply-admission" className="bg-white/10 backdrop-blur-sm rounded-lg p-8 scroll-mt-24">
          <h3 className="text-2xl font-bold text-white mb-6">How to Apply</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-6 h-6" />,
                title: "1. Submit Form",
                description: "Download and fill the admission form"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "2. Document Submission",
                description: "Submit all required documents"
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "3. Assessment",
                description: "Attend the interview/entrance test"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition inline-flex items-center">
            Download Admission Form
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}