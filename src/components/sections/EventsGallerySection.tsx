import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

import event1 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-01.jpg';
import event2 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-02.jpg';
import event3 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-03.jpg';
import event4 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-04.jpg';
import event5 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-05.jpg';
import event6 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-06.jpg';
import event7 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-07.jpg';
import event8 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-08.jpg';
import event9 from '../../assets/Pranjal in Events/Pranjal-Sarkar-Delivering-Session-09.jpg';
import event10 from '../../assets/Pranjal in Events/20251120_143802.jpg.jpeg';
import event11 from '../../assets/Pranjal in Events/20251120_144429.jpg.jpeg';
import event12 from '../../assets/Pranjal in Events/20251120_144745.jpg.jpeg';
import event13 from '../../assets/Pranjal in Events/20251120_144814.jpg.jpeg';
import event14 from '../../assets/Pranjal in Events/20251120_152313.jpg.jpeg';
import event15 from '../../assets/Pranjal in Events/20251120_155544.jpg.jpeg';

interface EventImage {
  src: string;
  title: string;
  location: string;
  date: string;
  tag: 'Keynote' | 'Workshop' | 'Panel' | 'Bootcamp';
}

const EVENT_IMAGES: EventImage[] = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
} as const;

export default function EventsGallerySection() {
  const [selectedTag] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef<boolean>(false);


  const filteredImages = selectedTag === 'All'
    ? EVENT_IMAGES
    : EVENT_IMAGES.filter((img) => img.tag === selectedTag);

  // Autoplay functionality shifting right to left
  useEffect(() => {
    const interval = setInterval(() => {
      if (isHoveringRef.current) return;
      if (sliderRef.current) {
        const container = sliderRef.current;
        const card = container.firstElementChild as HTMLElement;
        if (!card) return;

        const cardWidth = card.offsetWidth;
        const gap = 16;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 15) {
          // Wrap back to beginning
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Reset scroll when changing filters
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedTag]);

  // Lightbox Navigation
  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="events" className="relative py-20 md:py-32 overflow-hidden border-b border-white/8 bg-[#010308]">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-100px] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.15)_0%,transparent_60%)] blur-[50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header Block & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-center text-center items-center gap-6 mb-16">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0080C7]/30 bg-[#0080C7]/5 mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)] text-[10px] font-bold tracking-widest uppercase text-[#33a8ff]">
              Pranjal In Events
            </span>
            
            <div className="relative mb-6">
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-2 max-w-2xl">
                Speaking & Mentoring <br /> 
                <span className="text-[#0080C7] drop-shadow-[0_0_15px_rgba(0,128,199,0.4)]">In Action</span>
              </h2>
              {/* Horizontal flare line (centered) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_15px_rgba(0,128,199,0.9)] opacity-80" />
            </div>

            <p className="text-[#a1a1aa] text-sm md:text-base lg:text-lg max-w-2xl font-light leading-relaxed">
              Interactive workshops, executive strategy masterclasses, and keynote panels in action.
            </p>
          </div>
        </div>


        {/* Sliding Carousel Wrapper */}
        <div className="relative w-full overflow-visible">
          {/* Side Fades for Premium Aesthetics */}
          <div className="absolute top-0 bottom-0 -left-6 w-8 bg-linear-to-r from-[#000001]/90 to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute top-0 bottom-0 -right-6 w-8 bg-linear-to-l from-[#000001]/90 to-transparent z-10 pointer-events-none hidden md:block" />

          <motion.div
            ref={sliderRef}
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            onMouseEnter={() => { isHoveringRef.current = true; }}
            onMouseLeave={() => { isHoveringRef.current = false; }}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.src}
                  layout
                  variants={itemVariants}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => {
                    const fullIndex = filteredImages.findIndex((fi) => fi.src === img.src);
                    setLightboxIndex(fullIndex);
                  }}
                  className="group snap-start shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-white/8 hover:border-[#0080C7]/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,128,199,0.25)] cursor-pointer transition-all duration-500 ease-out"
                >
                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Clean hover overlay with just magnifying glass icon */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="w-10 h-10 rounded-full bg-[#0080C7] flex items-center justify-center text-black shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 flex flex-col justify-between bg-black/95 backdrop-blur-md text-white"
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxIndex(null);
            }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-linear-to-b from-black/80 to-transparent z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0080C7] bg-[#0080C7]/10 border border-[#0080C7]/20 px-3 py-1.5 rounded">
                  {lightboxIndex + 1} / {filteredImages.length}
                </span>
                <span className="hidden sm:inline bg-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-white/5">
                  {filteredImages[lightboxIndex].tag}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 text-white"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>
            </div>

            {/* Main Image Slider Area */}
            <div className="relative flex-1 flex items-center justify-center px-4 sm:px-12 md:px-24">

              {/* Left Arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 sm:left-8 z-10 w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#0080C7] hover:border-[#0080C7]/40 hover:bg-black/80 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Centered Image Container */}
              <motion.div
                key={filteredImages[lightboxIndex].src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-full max-h-[72vh] flex items-center justify-center p-1 bg-neutral-900/60 border border-white/10 rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].title}
                  className="max-w-[90vw] max-h-[68vh] object-contain rounded-lg"
                />
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 sm:right-8 z-10 w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#0080C7] hover:border-[#0080C7]/40 hover:bg-black/80 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Bottom Caption & Mini-Carousel Strip */}
            <div className="bg-linear-to-t from-black/90 via-black/80 to-transparent pt-6 pb-8 px-6 z-10">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold leading-tight tracking-wide text-white">
                    {filteredImages[lightboxIndex].title}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-xs text-white/60 font-light">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0080C7]" />
                      {filteredImages[lightboxIndex].location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0080C7]" />
                      {filteredImages[lightboxIndex].date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Miniature Thumbnail Strips */}
              <div className="max-w-4xl mx-auto flex justify-center gap-2.5 overflow-x-auto py-1 scrollbar-none snap-x">
                {filteredImages.map((thumb, idx) => (
                  <button
                    key={thumb.src}
                    onClick={() => setLightboxIndex(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 border transition-all duration-300 cursor-pointer snap-center ${lightboxIndex === idx
                        ? 'border-[#0080C7] scale-110 shadow-[0_0_15px_rgba(0,128,199,0.5)] brightness-110 z-10'
                        : 'border-white/20 opacity-40 hover:opacity-85 hover:scale-105'
                      }`}
                  >
                    <img src={thumb.src} alt={thumb.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
