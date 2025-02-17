import { BookOpen, Microscope, Calculator, Globe, Palette, Code } from 'lucide-react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type Department = {
  icon: LucideIcon;
  title: string;
  description: string;
  subjects: string[];
};

export const departments: Department[] = [
  {
    icon: Microscope,
    title: "Sciences",
    description: "Comprehensive science education with hands-on laboratory experience",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Environmental Science"
    ]
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description: "Strong foundation in mathematical concepts and problem-solving",
    subjects: [
      "Algebra",
      "Geometry",
      "Calculus",
      "Statistics"
    ]
  },
  {
    icon: Globe,
    title: "Social Studies",
    description: "Understanding society, history, and global perspectives",
    subjects: [
      "History",
      "Geography",
      "Civics",
      "Economics"
    ]
  },
  {
    icon: BookOpen,
    title: "Languages",
    description: "Developing strong communication and literary skills",
    subjects: [
      "English",
      "Hindi",
      "Sanskrit",
      "French"
    ]
  },
  {
    icon: Code,
    title: "Computer Science",
    description: "Modern technology education and programming skills",
    subjects: [
      "Programming",
      "Web Development",
      "Data Structures",
      "Computer Systems"
    ]
  },
  {
    icon: Palette,
    title: "Arts & Creativity",
    description: "Fostering creativity and artistic expression",
    subjects: [
      "Visual Arts",
      "Music",
      "Dance",
      "Drama"
    ]
  }
];