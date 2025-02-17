import { GraduationCap, BookOpen, Users, School } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AdmissionCategory {
  icon: LucideIcon;
  title: string;
  ageGroup: string;
  grades: string;
  features: string[];
}

export const admissionCategories: AdmissionCategory[] = [
  {
    icon: School,
    title: "Pre-Primary",
    ageGroup: "2.5 - 5 years",
    grades: "Nursery - KG",
    features: [
      "Play-based learning",
      "Phonics program",
      "Motor skill development",
      "Social interaction"
    ]
  },
  {
    icon: BookOpen,
    title: "Primary",
    ageGroup: "6 - 10 years",
    grades: "Grade 1 - 5",
    features: [
      "Core subjects",
      "Activity-based learning",
      "Sports & arts",
      "Language development"
    ]
  },
  {
    icon: Users,
    title: "Secondary",
    ageGroup: "11 - 15 years",
    grades: "Grade 6 - 10",
    features: [
      "CBSE curriculum",
      "Specialized subjects",
      "Career guidance",
      "Life skills"
    ]
  },
  {
    icon: GraduationCap,
    title: "Senior Secondary",
    ageGroup: "16 - 17 years",
    grades: "Grade 11 - 12",
    features: [
      "Science & Commerce",
      "College preparation",
      "Career counseling",
      "Competitive exam prep"
    ]
  }
];