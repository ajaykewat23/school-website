import { BookOpen, Library, Laptop, Users, HeartPulse, GraduationCap, Bus, Music } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Resource {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const resources: Resource[] = [
  // Learning Resources
  {
    icon: Library,
    title: "Digital Library",
    description: "Access our comprehensive digital learning resources",
    items: [
      "E-Books Collection",
      "Academic Journals",
      "Research Databases",
      "Educational Videos"
    ]
  },
  {
    icon: BookOpen,
    title: "Study Materials",
    description: "Access subject-wise study materials",
    items: [
      "Chapter Notes",
      "Practice Worksheets",
      "Reference Materials",
      "Subject Guides"
    ]
  },
  {
    icon: Laptop,
    title: "Online Courses",
    description: "Enhance your learning with online courses",
    items: [
      "Video Lectures",
      "Interactive Tutorials",
      "Self-paced Courses",
      "Live Sessions"
    ]
  },
  // Academic Support
  {
    icon: GraduationCap,
    title: "Homework Help",
    description: "Get assistance with your assignments",
    items: [
      "Doubt Clearing",
      "Assignment Support",
      "Study Groups",
      "Teacher Consultation"
    ]
  },
  {
    icon: BookOpen,
    title: "Subject Notes",
    description: "Access comprehensive subject notes",
    items: [
      "Class Notes",
      "Topic Summaries",
      "Important Formulas",
      "Quick References"
    ]
  },
  {
    icon: Library,
    title: "Past Papers",
    description: "Practice with previous exam papers",
    items: [
      "Previous Year Papers",
      "Model Papers",
      "Sample Solutions",
      "Marking Schemes"
    ]
  },
  // Student Activities
  {
    icon: Users,
    title: "Clubs & Societies",
    description: "Join and participate in school clubs",
    items: [
      "Science Club",
      "Literary Club",
      "Eco Club",
      "Tech Club"
    ]
  },
  {
    icon: Users,
    title: "Sports Teams",
    description: "Participate in sports activities",
    items: [
      "Cricket Team",
      "Football Team",
      "Basketball Team",
      "Athletics"
    ]
  },
  {
    icon: Music,
    title: "Cultural Events",
    description: "Engage in cultural activities",
    items: [
      "Annual Day",
      "Music Competitions",
      "Dance Performances",
      "Art Exhibitions"
    ]
  },
  // Student Services
  {
    icon: HeartPulse,
    title: "Counseling Support",
    description: "Access counseling services",
    items: [
      "Academic Counseling",
      "Career Guidance",
      "Personal Counseling",
      "Mental Health Support"
    ]
  },
  {
    icon: HeartPulse,
    title: "Health Services",
    description: "School health services information",
    items: [
      "Medical Room",
      "Health Check-ups",
      "First Aid",
      "Emergency Contacts"
    ]
  },
  {
    icon: Bus,
    title: "Transport Info",
    description: "School transport information",
    items: [
      "Bus Routes",
      "Time Schedule",
      "Transport Rules",
      "Contact Numbers"
    ]
  }
];