import { GalleryItem, Leader, UniversityEvent, NewsCard, Notice } from './types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'image-1',
    title: 'The Historic Great Hall',
    category: 'Campus Architecture',
    image: '/images/img_1.jpg'
  },
  {
    id: 'image-2',
    title: 'Student Collaborative Study',
    category: 'Academic Life',
    image: '/images/img_2.jpg'
  },
  {
    id: 'image-3',
    title: 'Science Innovation Lab',
    category: 'Academic Life',
    image: '/images/img_3.jpg'
  },
  {
    id: 'image-4',
    title: 'Annual Heritage Gala',
    category: 'Student Events',
    image: '/images/img_4.jpg'
  },
  {
    id: 'image-5',
    title: 'Varsity Grounds',
    category: 'Athletics',
    image: '/images/img_5.jpg'
  },
  {
    id: 'image-6',
    title: 'Modern Library Wing',
    category: 'Facilities',
    image: '/images/img_6.jpg'
  },
  {
    id: 'image-7',
    title: 'Spring Commencement',
    category: 'Student Events',
    image: '/images/img_7.jpg'
  }
];

export const LEADERS: Leader[] = [
  {
    id: 'leader-1',
    name: 'Dr. Alistair Vance',
    role: 'President & Vice-Chancellor',
    bio: 'A visionary leader with a PhD from Oxford, Dr. Vance has dedicated his career to expanding access to elite education for marginalized communities.',
    experience: '30 Years Experience in Higher Ed',
    image: '/images/img_8.jpg'
  },
  {
    id: 'leader-2',
    name: 'Dr. Elena Rodriguez',
    role: 'Provost & Chief Academic Officer',
    bio: 'Overseeing all academic programs, Dr. Rodriguez ensures that Heritage\'s curriculum remains at the forefront of global industry standards.',
    experience: 'Pioneer in Behavioral Sciences',
    image: '/images/img_9.jpg'
  },
  {
    id: 'leader-3',
    name: 'Marcus Thorne, MBA',
    role: 'Dean of Innovation',
    bio: 'Marcus bridges the gap between campus research and industry application, managing our $50M venture partnership fund.',
    experience: 'Former Director at Global Tech',
    image: '/images/img_10.jpg'
  },
  {
    id: 'leader-4',
    name: 'Sarah Jenkins',
    role: 'University Registrar',
    bio: 'Sarah manages the student journey from enrollment to graduation, ensuring that every scholar\'s legacy is recorded with precision.',
    experience: 'Expert in Educational Policy',
    image: '/images/img_11.jpg'
  }
];

export const EVENTS: UniversityEvent[] = [
  {
    id: 'event-1',
    day: '08',
    month: 'Nov',
    title: 'Graduate Open House',
    timeRange: '10:00 AM - 04:00 PM',
    location: 'Heritage Hall',
    type: 'academic'
  },
  {
    id: 'event-2',
    day: '15',
    month: 'Nov',
    title: 'Career Fair Autumn 2023',
    timeRange: '09:00 AM - 05:00 PM',
    location: 'Student Union',
    type: 'career'
  },
  {
    id: 'event-3',
    day: '22',
    month: 'Nov',
    title: 'Public Lecture: Future of AI',
    timeRange: '06:30 PM - 08:00 PM',
    location: 'Main Auditorium',
    type: 'academic'
  }
];

export const NEWS: NewsCard[] = [
  {
    id: 'news-1',
    category: 'Academic',
    title: 'New Interdisciplinary Research Hub Opens',
    excerpt: 'Heritage University officially inaugurates its $50M center dedicated to AI and sustainability ethics, fostering collaboration across departments.',
    date: 'Oct 24, 2023',
    image: '/images/img_12.jpg'
  },
  {
    id: 'news-2',
    category: 'Student Life',
    title: 'Annual Convocation: Celebrating Our Graduates',
    excerpt: 'A record-breaking class of 2023 joins the Heritage alumni family, featuring keynote speeches from global tech leaders and philanthropists.',
    date: 'Oct 12, 2023',
    image: '/images/img_13.jpg'
  },
  {
    id: 'news-3',
    category: 'Events',
    title: 'Sustainability Summit 2024 Announced',
    excerpt: 'Join us for a three-day summit exploring the future of renewable energy and corporate responsibility with world leaders.',
    date: 'Sept 28, 2023',
    image: '/images/img_14.jpg'
  }
];

export const NOTICES: Notice[] = [
  {
    id: 'notice-1',
    date: '24',
    month: 'MAY',
    category: 'Urgent',
    department: 'Office of the Controller of Exams',
    title: 'Final Spring 2024 Examination Schedule - Undergraduate Programs',
    excerpt: 'Detailed timetable for all terminal semesters of the Heritage School of Engineering and Business Administration. Please ensure you carry your valid student ID and admit cards.',
    urgent: true
  },
  {
    id: 'notice-2',
    date: '18',
    month: 'MAY',
    category: 'Holiday',
    department: 'University Registrar',
    title: 'Announcement: Campus Closure for Founder\'s Day Observance',
    excerpt: 'The university campus, including central libraries and administrative blocks, will remain closed on June 1st in honor of Heritage University\'s 150th Founders Day.'
  },
  {
    id: 'notice-3',
    date: '12',
    month: 'MAY',
    category: 'Notice',
    department: 'Admissions Office',
    title: 'Merit Scholarship Applications Open for Academic Year 2024-25',
    excerpt: 'Outstanding students from all disciplines are invited to apply for the prestigious Presidential Merit Scholarship. Eligibility criteria and application forms are available online.'
  },
  {
    id: 'notice-4',
    date: '05',
    month: 'MAY',
    category: 'Events',
    department: 'Faculty of Arts',
    title: 'Guest Lecture: The Future of Renaissance Art in the Digital Age',
    excerpt: 'Join Dr. Alistair Vance for a compelling exploration of art history meeting modern AI technologies in the Great Hall. Seating is limited to first-come basis.'
  }
];
