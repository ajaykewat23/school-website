import React, { useState, useEffect } from 'react';
import { Shirt, Users, Trophy, Star, Award, BookOpen, Rocket, Globe, Heart } from 'lucide-react';
import { heroImages } from './heroImages';

const circularLinks = [
  {
    icon: <Shirt className="w-6 h-6" />,
    label: "School Uniform",
    href: "#uniform",
    description: "View our school uniform guidelines and shop online"
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "Alumni Info",
    href: "#alumni",
    description: "Connect with our distinguished alumni network"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    label: "Achievements",
    href: "#achievements",
    description: "Discover our academic and extracurricular excellence"
  }
];

const highlights = [
  {
    icon: <Star className="w-4 h-4" />,
    title: "Top Ranked",
    description: "Among top 10 schools nationally"
  },
  {
    icon: <Award className="w-4 h-4" />,
    title: "Excellence",
    description: "100% graduation rate"
  },
  {
    icon: <BookOpen className="w-4 h-4" />,
    title: "Academics",
    description: "Advanced curriculum"
  },
  {
    icon: <Rocket className="w-4 h-4" />,
    title: "Innovation",
    description: "State-of-the-art facilities"
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "Global Focus",
    description: "International partnerships"
  },
  {
    icon: <Heart className="w-4 h-4" />,
    title: "Student Care",
    description: "Personalized attention"
  }
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Left Vertical Highlights Bar */}
      <div className="absolute left-12 top-[60%] -translate-y-1/2 hidden lg:block z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-white/10 border-b border-white/20">
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase">Highlights</h3>
          </div>
          
          {/* Content */}
          <div className="py-6 px-4">
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <div className="text-white">{highlight.icon}</div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-sm font-semibold leading-tight">{highlight.title}</h3>
                      <p className="text-xs text-white/80 leading-tight mt-1">{highlight.description}</p>
                    </div>
                  </div>
                  {index < highlights.length - 1 && (
                    <div className="absolute left-4 top-[calc(100%+0.75rem)] h-3 w-px bg-white/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Circular Links */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 z-10">
        {circularLinks.map(({ icon, label, href, description }) => (
          <div key={label} className="group relative flex flex-col items-center gap-3">
            <a
              href={href}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 
                            flex items-center justify-center transition-all duration-300
                            group-hover:bg-white/20 group-hover:scale-110 group-hover:border-white/50">
                <div className="text-white transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </div>
              </div>
              
              {/* Default Label */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
                <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                  {label}
                </span>
              </div>
              
              {/* Enhanced Hover Card */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2
                            bg-white/10 backdrop-blur-md border border-white/20
                            text-white rounded-lg overflow-hidden
                            opacity-0 -translate-x-4 transition-all duration-300
                            group-hover:opacity-100 group-hover:translate-x-0
                            w-64 shadow-xl">
                <div className="px-4 py-3 bg-white/10">
                  <div className="flex items-center gap-2">
                    {icon}
                    <h3 className="font-semibold">{label}</h3>
                  </div>
                </div>
                <div className="px-4 py-3 text-sm text-gray-100">
                  {description}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </header>
  );
}