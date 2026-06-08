export type ActiveTab = 'home' | 'admissions' | 'gallery' | 'notices' | 'about' | 'contact';

export interface Notice {
  id: string;
  date: string;
  month: string;
  category: 'Urgent' | 'Holiday' | 'Notice' | 'Events' | 'Departmental';
  department: string;
  title: string;
  excerpt: string;
  urgent?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus Architecture' | 'Student Events' | 'Academic Life' | 'Athletics' | 'Facilities';
  image: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
}

export interface UniversityEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  timeRange: string;
  location: string;
  type: 'general' | 'career' | 'academic';
}

export interface NewsCard {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
