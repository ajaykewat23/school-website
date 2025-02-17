import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Get in touch with us for any inquiries. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <ContactInfo
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                info={["+91 123 456 7890"]}
              />
              <ContactInfo
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                info={["info@sunshineschool.com"]}
              />
              <ContactInfo
                icon={<Clock className="w-6 h-6" />}
                title="Office Hours"
                info={["Mon - Fri: 8:00 - 16:00"]}
              />
              <ContactInfo
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                info={[
                  "123 Education Avenue",
                  "City - 123456"
                ]}
              />
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#academics" className="text-blue-100 hover:text-white transition-colors">Academics</a></li>
                  <li><a href="#admissions" className="text-blue-100 hover:text-white transition-colors">Admissions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#digital-library" className="text-blue-100 hover:text-white transition-colors">Digital Library</a></li>
                  <li><a href="#study-materials" className="text-blue-100 hover:text-white transition-colors">Study Materials</a></li>
                  <li><a href="#online-courses" className="text-blue-100 hover:text-white transition-colors">Online Courses</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}