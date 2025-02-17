export interface GalleryImage {
  url: string;
  title: string;
  description: string;
  category: 'campus' | 'events' | 'student-life' | 'achievements';
}