import img1 from '../../assets/pranjalsarkar/1.webp';
import img2 from '../../assets/pranjalsarkar/2.webp';
import img3 from '../../assets/pranjalsarkar/3.webp';
import img4 from '../../assets/pranjalsarkar/4.webp';
import img5 from '../../assets/pranjalsarkar/5.webp';
import img6 from '../../assets/pranjalsarkar/6.webp';

const testimonials = [
  {
    name: 'ADITYA R.',
    role: 'Director of Product, Series B Fintech',
    quote: "Pranjal doesn't teach you what to think. He teaches you how to think when the stakes are real. I got promoted 6 months after the cohort ended. The most ROI I've ever gotten from any learning investment.",
    stars: 5,
    image: img1,
  },
  {
    name: 'SNEHA K.',
    role: 'Head of Product, D2C Startup',
    quote: "I'd been stuck at Senior PM for 3 years. Two months into this program I had language for what I was missing. By month 4 I had the title. This is the program I wish existed years ago.",
    stars: 5,
    image: img2,
  },
  {
    name: 'RAHUL M.',
    role: 'Group PM, Tech Unicorn',
    quote: "Coming from engineering, I always felt like I was faking the strategy part. This cohort gave me actual tools for judgment — not just vocabulary. The peer calibration sessions alone were worth the investment.",
    stars: 5,
    image: img4,
  },
  {
    name: 'PRIYA T.',
    role: 'Director, Fintech Startup',
    quote: "The AI-era angle is real. Pranjal prepares you for what comes after everyone has access to ChatGPT — the judgment gap. That's where the real opportunity is, and this program maps it out.",
    stars: 5,
    image: img6,
  },
  {
    name: 'VIKRAM S.',
    role: 'Head of Growth, Series D',
    quote: "I've done Reforge. I've done Lenny's. This is the only program that made me uncomfortable in the right ways — and I grew the most because of it.",
    stars: 5,
    image: img3,
  },
  {
    name: 'MEERA L.',
    role: 'Director of Product, B2B SaaS',
    quote: "Pranjal has a rare ability: he can cut through your defensive framing and show you exactly what senior leaders are actually evaluating. It changed how I present myself in every room.",
    stars: 5,
    image: img5,
  },
];

const BUBBLE_COLOR = '#0080C7';

const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const bubbleColor = BUBBLE_COLOR;

  return (
    <div className="shrink-0  group" style={{ width: '340px' }}>
      {/* ── Outer card (light background with watermark) ── */}
      <div className="relative rounded-xl overflow-hidden shadow-lg flex flex-col px-5 py-10"
      >

        {/* FEEDBACK watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-extrabold uppercase pointer-events-none select-none overflow-hidden"
          style={{
            fontSize: '5.5rem',
            letterSpacing: '0.06em',
            color: 'rgba(0,0,0,0.05)',
            whiteSpace: 'nowrap',
          }}
        >
          FEEDBACK
        </div>


        {/* Avatar — centered, overlapping the bubble below */}
        <div className="relative z-20 flex justify-center" style={{ marginBottom: '-38px' }}>
          <div
            className="rounded-full overflow-hidden bg-white"
            style={{
              width: '82px',
              height: '82px',
              border: `4px solid ${bubbleColor}`,
              boxShadow: `0 0 0 4px rgba(255,255,255,0.9), 0 4px 16px rgba(0,0,0,0.2)`,
            }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Speech bubble */}
        <div className="relative z-10 h-76  rounded-xl overflow-visible" style={{ backgroundColor: bubbleColor }}>
          {/* Upward-pointing tail (triangle) at top-center */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '-14px',
              width: 0,
              height: 0,
              borderLeft: '16px solid transparent',
              borderRight: '16px solid transparent',
              borderBottom: `16px solid ${bubbleColor}`,
            }}
          />
          {/* ── Name + Stars (below bubble, inside card) ── */}
          <div className="relative z-10 text-center pt-13 pb-1 mt-auto">
            <h4
              className="font-bold text-white uppercase tracking-widest"
              style={{ fontSize: '12px', letterSpacing: '0.15em' }}
            >
              {t.name}
            </h4>
            <p className="text-white/90 text-[10px] uppercase tracking-wider mt-0.5 line-clamp-1">
              {t.role}
            </p>
            <div className="flex justify-center gap-0.5 mt-2">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} style={{ color: '#ffffff', fontSize: '14px' }}>★</span>
              ))}
            </div>
          </div>
          {/* Bubble content */}
          <div className="px-5  pb-5">
            {/* Opening quote */}
            <span className="text-white/50 font-serif text-2xl leading-none select-none">❝</span>

            {/* Quote text */}
            <p className="text-white text-[12.5px] leading-relaxed mt-1 mb-3"
              style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {t.quote}
            </p>

            {/* Closing quote aligned right */}
            <div className="text-right">
              <span className="text-white/50 font-serif text-2xl leading-none select-none">❞</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-6 md:py-12 overflow-hidden border-b border-white/8 bg-[#000001]">

      {/* Keyframe styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes testimonials-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .testimonials-track {
          display: flex;
          align-items: flex-start;
          width: max-content;
          animation: testimonials-scroll 15s linear infinite;
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      ` }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0080C7]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10  text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6">
          Testimonials
        </span>
        <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-4">
          The results speak <br />
          <span className="text-[#0080C7]">louder than the pitch.</span>
        </h2>
        <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mx-auto">
          From Senior PM to Director. From stuck to leading.
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative w-full overflow-hidden py-4 z-10">

        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-linear-to-r from-[#000001] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-linear-to-l from-[#000001] to-transparent z-20 pointer-events-none" />

        {/* Track */}
        <div className="testimonials-track cursor-grab active:cursor-grabbing">
          {loopedTestimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              t={t}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
