import React, { useState } from 'react';
import { Menu, X, GraduationCap, ChevronDown, MapPin } from 'lucide-react';

const menuItems = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about',
    submenu: [
      { name: 'Vision & Mission', href: '#vision-mission' },
      { name: 'Statistics', href: '#statistics' },
      { name: 'Our Journey', href: '#journey' },
      { name: 'Leadership', href: '#leadership' },
      { name: 'Recognition', href: '#recognition' }
    ]
  },
  {
    name: 'Academics',
    href: '#academics',
    submenu: [
      { name: 'Curriculum', href: '#curriculum' },
      { name: 'Departments', href: '#departments' },
      { 
        name: 'Our Programs',
        href: '#programs',
        items: [
          { name: 'Computer Science', href: '#computer-science' },
          { name: 'Business Administration', href: '#business-admin' },
          { name: 'Engineering', href: '#engineering' },
          { name: 'Arts & Design', href: '#arts-design' },
          { name: 'Health Sciences', href: '#health-sciences' },
          { name: 'Environmental Studies', href: '#environmental-studies' }
        ]
      }
    ]
  },
  {
    name: 'Admissions',
    href: '#admissions',
    submenu: [
      { name: 'Our Expertise Area', href: '#why-choose-us' },
      { name: 'Admission Categories', href: '#admission-categories' },
      { name: 'Requirements', href: '#admission-requirements' },
      { name: 'Key Dates', href: '#admission-dates' },
      { name: 'Fee Structure', href: '#fee-structure' },
      { name: 'How to Apply', href: '#how-to-apply-admission' }
    ]
  },
  {
    name: 'Our Gallery',
    href: '#gallery'
  },
  {
    name: 'Students Corner',
    href: '#students-corner',
    submenu: [
      { 
        name: 'Learning Resources',
        href: '#learning-resources',
        items: [
          { name: 'Digital Library', href: '#digital-library' },
          { name: 'Study Materials', href: '#study-materials' },
          { name: 'Online Courses', href: '#online-courses' }
        ]
      },
      { 
        name: 'Academic Support',
        href: '#academic-support',
        items: [
          { name: 'Homework Help', href: '#homework-help' },
          { name: 'Subject Notes', href: '#subject-notes' },
          { name: 'Past Papers', href: '#past-papers' }
        ]
      },
      { 
        name: 'Student Activities',
        href: '#student-activities',
        items: [
          { name: 'Clubs & Societies', href: '#clubs' },
          { name: 'Sports Teams', href: '#sports' },
          { name: 'Cultural Events', href: '#cultural-events' }
        ]
      },
      { 
        name: 'Student Services',
        href: '#student-services',
        items: [
          { name: 'Counseling Support', href: '#counseling' },
          { name: 'Health Services', href: '#health-services' },
          { name: 'Transport Info', href: '#transport' }
        ]
      }
    ]
  },
  {
    name: 'Career',
    href: '#career',
    submenu: [
      { name: 'Why Join Us', href: '#why-join-us' },
      { name: 'Current Openings', href: '#current-openings' },
      { name: 'Our Departments', href: '#departments-list' },
      { name: 'How to Apply', href: '#how-to-apply' }
    ]
  },
  {
    name: 'Contact',
    href: '#contact'
  }
];

const campusLocations = [
  {
    name: "Main Campus",
    address: "Viman Nagar, Pune",
    details: "Grades 1-12 | CBSE Board",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Junior Campus",
    address: "Kalyani Nagar, Pune",
    details: "Pre-Primary & Primary",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400"
  }
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showCampuses, setShowCampuses] = useState(false);

  const handleNavigation = (href: string) => {
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
    setActiveNestedMenu(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-8 h-8 text-yellow-500" />
            <div className="flex flex-col">
              <a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('#home');
                }}
                className="text-xl md:text-2xl font-bold text-blue-900"
              >
                Sunshine Wisdom Public School
              </a>
              <span className="text-xs text-gray-600 font-medium">
                Affiliated to CBSE : 1234567890
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className={`font-medium transition-colors duration-200 whitespace-nowrap inline-flex items-center ${
                    item.name === 'Contact'
                      ? 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
                      : `text-gray-600 hover:text-blue-600 ${activeSection === item.href.substring(1) ? 'text-blue-600' : ''}`
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                
                {/* Desktop Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-2 bg-white rounded-lg shadow-xl border border-gray-100">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name} className="relative group/nested">
                          <a
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between ${
                              activeSection === subItem.href.substring(1) ? 'text-blue-600 bg-blue-50' : ''
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(subItem.href);
                            }}
                          >
                            {subItem.name}
                            {'items' in subItem && (
                              <ChevronDown className="w-4 h-4 transform -rotate-90" />
                            )}
                          </a>
                          
                          {/* Nested Submenu */}
                          {'items' in subItem && (
                            <div className="absolute left-full top-0 ml-2 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                              <div className="py-2 bg-white rounded-lg shadow-xl border border-gray-100 w-48">
                                {subItem.items?.map((nestedItem) => (
                                  <a
                                    key={nestedItem.name}
                                    href={nestedItem.href}
                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                                      activeSection === nestedItem.href.substring(1) ? 'text-blue-600 bg-blue-50' : ''
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleNavigation(nestedItem.href);
                                    }}
                                  >
                                    {nestedItem.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Location Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setShowCampuses(!showCampuses)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <MapPin className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">Viman Nagar, Pune</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${showCampuses ? 'rotate-180' : ''}`} />
              </button>

              {/* Campuses Dropdown */}
              <div className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                showCampuses ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
              }`}>
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Our Campuses</h3>
                </div>
                {campusLocations.map((campus, index) => (
                  <div 
                    key={index}
                    className="p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 last:border-0"
                  >
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={campus.image} 
                          alt={campus.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{campus.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{campus.address}</p>
                        <p className="text-xs text-gray-500 mt-1">{campus.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Location Button for Mobile */}
            <button
              onClick={() => setShowCampuses(!showCampuses)}
              className="flex items-center text-gray-600"
            >
              <MapPin className="w-6 h-6 mr-1" />
              <span className="text-sm">Viman Nagar, Pune</span>
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${showCampuses ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setActiveSubmenu(activeSubmenu === item.name ? null : item.name);
                        setActiveNestedMenu(null);
                      } else {
                        handleNavigation(item.href);
                      }
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                      item.name === 'Contact'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : `text-gray-600 hover:text-blue-600 hover:bg-blue-50 ${
                            activeSection === item.href.substring(1) ? 'text-blue-600 bg-blue-50' : ''
                          }`
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          {'items' in subItem ? (
                            <>
                              <button
                                onClick={() => setActiveNestedMenu(activeNestedMenu === subItem.name ? null : subItem.name)}
                                className={`w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg flex items-center justify-between ${
                                  activeSection === subItem.href.substring(1) ? 'text-blue-600 bg-blue-50' : ''
                                }`}
                              >
                                {subItem.name}
                                <ChevronDown 
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    activeNestedMenu === subItem.name ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              {activeNestedMenu === subItem.name && (
                                <div className="pl-4 mt-1 space-y-1">
                                  {subItem.items?.map((nestedItem) => (
                                    <a
                                      key={nestedItem.name}
                                      href={nestedItem.href}
                                      className={`block px-4 py-2 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-lg ${
                                        activeSection === nestedItem.href.substring(1) ? 'text-blue-600 bg-blue-50' : ''
                                      }`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(nestedItem.href);
                                      }}
                                    >
                                      {nestedItem.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <a
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg ${
                                activeSection === subItem.href.substring(1) ? 'text-blue-600 bg-blue-50' : ''
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(subItem.href);
                              }}
                            >
                              {subItem.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Campuses Dropdown */}
        {showCampuses && (
          <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setShowCampuses(false)}>
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Our Campuses</h3>
                <button onClick={() => setShowCampuses(false)}>
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              {campusLocations.map((campus, index) => (
                <div 
                  key={index}
                  className="p-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={campus.image} 
                        alt={campus.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">{campus.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{campus.address}</p>
                      <p className="text-xs text-gray-500 mt-1">{campus.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}