import event1 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-01.webp';
import event2 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-02.webp';
import event3 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-03.webp';
import event4 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-04.webp';
import event5 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-05.webp';
import event6 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-06.webp';
import event7 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-07.webp';
import event8 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-08.webp';
import event9 from '../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-09.webp';
import event10 from '../assets/Pranjal in Events/20251120_143802.webp';
import event11 from '../assets/Pranjal in Events/20251120_144429.webp';
import event12 from '../assets/Pranjal in Events/20251120_144745.webp';
import event13 from '../assets/Pranjal in Events/20251120_144814.webp';
import event14 from '../assets/Pranjal in Events/20251120_152313.webp';
import event15 from '../assets/Pranjal in Events/20251120_155544.webp';

export interface EventImage {
  src: string;
  title: string;
  location: string;
  date: string;
  tag: 'Keynote' | 'Workshop' | 'Panel' | 'Bootcamp';
}

export const EVENT_IMAGES: EventImage[] = [
  {
    src: event1,
    title: 'AI Product Management Keynote',
    location: 'San Francisco, CA',
    date: 'July 2025',
    tag: 'Keynote',
  },
  {
    src: event2,
    title: 'Strategic Leadership Mindset Lecture',
    location: 'New York City, NY',
    date: 'July 2025',
    tag: 'Keynote',
  },
  {
    src: event3,
    title: 'Scaling ARR & Product Growth Panel',
    location: 'Chicago, IL',
    date: 'July 2025',
    tag: 'Panel',
  },
  {
    src: event4,
    title: 'Interactive Product Leadership Studio',
    location: 'Austin, TX',
    date: 'July 2025',
    tag: 'Workshop',
  },
  {
    src: event5,
    title: 'Differentiating AI Capabilities Workshop',
    location: 'Seattle, WA',
    date: 'July 2025',
    tag: 'Workshop',
  },
  {
    src: event6,
    title: 'Fostering Innovation Fireside Chat',
    location: 'Boston, MA',
    date: 'July 2025',
    tag: 'Panel',
  },
  {
    src: event7,
    title: 'Enterprise Strategy Roundtable',
    location: 'London, UK',
    date: 'July 2025',
    tag: 'Panel',
  },
  {
    src: event8,
    title: 'Navigating Startup Metrics & Growth Talk',
    location: 'Toronto, ON',
    date: 'July 2025',
    tag: 'Keynote',
  },
  {
    src: event9,
    title: 'Building Critical PM Judgment Session',
    location: 'Singapore',
    date: 'July 2025',
    tag: 'Workshop',
  },
  {
    src: event10,
    title: 'Product Vision Alignment Intensive',
    location: 'Bengaluru, India',
    date: 'November 2025',
    tag: 'Bootcamp',
  },
  {
    src: event11,
    title: 'AI Product Architecture Masterclass',
    location: 'Mumbai, India',
    date: 'November 2025',
    tag: 'Workshop',
  },
  {
    src: event12,
    title: 'Product Leadership Circle Meetup',
    location: 'Hyderabad, India',
    date: 'November 2025',
    tag: 'Panel',
  },
  {
    src: event13,
    title: 'Startups Ecosystem Scaling Session',
    location: 'New Delhi, India',
    date: 'November 2025',
    tag: 'Panel',
  },
  {
    src: event14,
    title: 'Product Strategy & ARR Execution Workshop',
    location: 'Pune, India',
    date: 'November 2025',
    tag: 'Workshop',
  },
  {
    src: event15,
    title: 'AI Product Leadership Studio Guest Lecture',
    location: 'Chennai, India',
    date: 'November 2025',
    tag: 'Keynote',
  },
];
