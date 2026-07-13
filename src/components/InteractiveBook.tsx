import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCcw, X } from 'lucide-react';
import './InteractiveBook.css';

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export interface BookPage {
  title?: string;
  content: React.ReactNode;
  backContent?: React.ReactNode;
  pageNumber: number;
}

export interface InteractiveBookProps {
  coverImage: string;
  bookTitle?: string;
  bookAuthor?: string;
  pages: BookPage[];
  className?: string;
  width?: number | string;
  height?: number | string;
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function InteractiveBook({
  coverImage,
  bookTitle = "Book Title",
  bookAuthor = "Author Name",
  pages,
  className,
  width = 300,
  height = 420,
  autoplay = true,
  autoplayDelay = 4500,
}: InteractiveBookProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const widthNum = typeof width === 'number' ? width : 300;
  const BOOK_OPEN_DURATION = 1.2;
  const EASING: [number, number, number, number] = [0.25, 0, 0, 1];

  const handleOpenBook = () => setIsOpen(true);

  const handleCloseBook = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen(false);
    setCurrentPageIndex(-1);
  };

  const nextPage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const prevPage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPageIndex >= 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const restartBook = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentPageIndex(-1);
  };

  // Auto-open book after mounting
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);
    return () => clearTimeout(openTimer);
  }, []);

  // Autoplay page-turning loop
  useEffect(() => {
    if (!autoplay || !isOpen || isPaused) return;

    const interval = setInterval(() => {
      setCurrentPageIndex((prev) => {
        if (prev >= pages.length - 1) {
          return -1; // Return to cover
        }
        return prev + 1;
      });
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, isOpen, isPaused, pages.length, autoplayDelay]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') handleCloseBook();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPageIndex]);

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{
        width: '100%',
        height: typeof height === 'number' ? height + 40 : 'auto',
        perspective: '2000px',
      }}
      onMouseEnter={() => {
        setIsHovering(true);
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsPaused(false);
      }}
    >
      <motion.div
        className="relative preserve-3d"
        style={{ width, height }}
        initial={{ x: 0 }}
        animate={{ x: isOpen ? widthNum / 2 : 0 }}
        transition={{ duration: BOOK_OPEN_DURATION, ease: EASING }}
      >
        {/* Front Cover */}
        <motion.div
          className="absolute inset-0 w-full h-full origin-left"
          initial={{ rotateY: 0, zIndex: 100 }}
          animate={{
            rotateY: isOpen ? -180 : (isHovering ? -15 : 0),
            zIndex: isOpen ? 0 : 100
          }}
          transition={{
            rotateY: { duration: BOOK_OPEN_DURATION, ease: EASING },
            zIndex: { delay: isOpen ? BOOK_OPEN_DURATION * 0.6 : BOOK_OPEN_DURATION * 0.4 }
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={!isOpen ? handleOpenBook : undefined}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden rounded-r-md rounded-l-sm shadow-2xl cursor-pointer overflow-hidden group bg-[#161616] border border-white/10"
            style={{ transform: 'translateZ(0.5px)' }}
          >
            {/* Cover Image Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${coverImage})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-5 right-5 text-white text-left z-10">
              <h1 className="text-lg font-serif font-extrabold tracking-wide mb-2 leading-tight drop-shadow-md">
                {bookTitle}
              </h1>
              <p className="text-[9px] font-sans tracking-widest opacity-80 uppercase border-t border-white/20 pt-2 inline-block font-semibold">
                {bookAuthor}
              </p>
            </div>

            {/* Spine Highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-white/10 to-transparent opacity-30" />
            <div className="absolute left-[8px] top-0 bottom-0 w-px bg-black/40" />
          </div>

          {/* Back Face (Inner Cover) */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden rounded-l-md rounded-r-sm bg-[#121212] border border-white/10 border-r-0 rotate-y-180 flex flex-col p-8 shadow-xl cursor-pointer"
            style={{ transform: 'rotateY(180deg) translateZ(0.5px)' }}
            onClick={(e) => {
              e.stopPropagation();
              prevPage();
            }}
          >
            <div className="flex-1 flex flex-col justify-center items-center text-center opacity-95">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4A853] uppercase mb-4">PHILOSOPHY</span>
              <h2 className="text-xl font-serif font-bold text-white mb-2 tracking-tight">{bookTitle}</h2>
              <div className="w-8 h-[1.5px] bg-[#D4A853]/40 mb-4" />
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Interactive Edition</p>
            </div>
          </div>
        </motion.div>

        {/* Pages Stack */}
        <div className="absolute inset-0 w-full h-full z-0" style={{ transformStyle: 'preserve-3d' }}>
          {pages.map((page, index) => {
            const isFlipped = index <= currentPageIndex;

            return (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full origin-left bg-[#fdfbf7] rounded-r-md rounded-l-sm shadow-md border border-neutral-200/50"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateY: 0, zIndex: pages.length - index }}
                animate={{
                  rotateY: isFlipped ? -180 : 0,
                  zIndex: isFlipped ? index + 1 : pages.length - index
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.8, 0.25, 1]
                }}
              >
                {/* Front Face (Right Side Page) */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden p-6 flex flex-col bg-[#fdfbf7] cursor-pointer hover:bg-[#fbf9f4] transition-colors"
                  style={{ transform: 'translateZ(0.5px)' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPage();
                  }}
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="text-[10px] text-neutral-400 text-right font-sans font-semibold tracking-wider">
                      {page.pageNumber * 2 - 1}
                    </div>
                    <div className="flex-1 flex flex-col justify-center max-w-none text-neutral-800 select-none">
                      {page.title && (
                        <div className="text-[10px] font-bold text-[#D4A853] tracking-widest uppercase mb-1 text-center font-mono">
                          {page.title}
                        </div>
                      )}
                      {page.content}
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-linear-to-r from-black/4 to-transparent pointer-events-none mix-blend-multiply" />
                </div>

                {/* Back Face (Left Side Page) */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#fdfbf7] border-r border-neutral-200 overflow-hidden p-6 flex flex-col cursor-pointer hover:bg-[#fbf9f4] transition-colors"
                  style={{ transform: 'rotateY(180deg) translateZ(0.5px)' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPage();
                  }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-linear-to-l from-black/4 to-transparent pointer-events-none mix-blend-multiply" />

                  <div className="flex-1 flex flex-col justify-between overflow-hidden">
                    <div className="text-[10px] text-neutral-400 text-left font-sans font-semibold tracking-wider">
                      {page.pageNumber * 2}
                    </div>
                    <div className="flex-1 flex flex-col justify-center text-neutral-800 select-none h-full">
                      {page.backContent ? (
                        <div className="flex-1 flex flex-col justify-center">
                          {page.backContent}
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-[0.03]">
                          <span className="font-serif text-8xl italic font-bold text-black">
                            {page.pageNumber * 2}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Back Cover (Static) */}
          <div
            className="absolute inset-0 w-full h-full bg-[#161616] rounded-r-md rounded-l-sm shadow-xl border border-white/10 pointer-events-none"
            style={{ 
              transform: currentPageIndex >= pages.length - 1 ? 'translateZ(0px)' : 'translateZ(-1px)', 
              zIndex: currentPageIndex >= pages.length - 1 ? pages.length + 10 : -1 
            }}
          >
            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
              <span className="w-8 h-8 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center mb-4 text-[#D4A853] text-xs">
                ✓
              </span>
              <p className="font-serif text-white italic text-sm">Fin.</p>
              <button
                onClick={restartBook}
                className="mt-6 flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4A853] hover:bg-[#c39744] transition-all text-xs font-bold text-neutral-900 cursor-pointer shadow-lg pointer-events-auto"
              >
                <RefreshCcw size={12} /> Read Again
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Close Button overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleCloseBook}
            className="absolute top-0 right-4 p-2 rounded-full bg-[#121212] border border-white/10 hover:border-[#D4A853]/30 text-white/60 hover:text-white z-1000 transition-all hover:scale-105 shadow-md"
          >
            <X size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Instruction Tip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 text-[10px] font-mono tracking-widest text-[#D4A853] uppercase cursor-pointer z-50 hover:text-white transition-colors"
          onClick={handleOpenBook}
        >
          Click to Open Book
        </motion.div>
      )}
    </div>
  );
}
