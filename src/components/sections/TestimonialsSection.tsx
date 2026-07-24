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

const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="shrink-0 group px-4 pt-12 flex" style={{ width: '380px' }}>
      <div className="relative rounded-2xl bg-[#0a0c10] border border-[#0080C7]/20 shadow-[0_0_20px_rgba(0,128,199,0.08)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,128,199,0.15)] hover:border-[#0080C7]/40 flex flex-col p-8 pt-14 h-full min-h-[300px] w-full">
        
        {/* Avatar sticking out of the top */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full p-1 bg-[#0a0c10] z-20">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-[#0080C7]/50 relative z-30 bg-[#0a0c10] shadow-[0_0_25px_rgba(0,128,199,0.6)]">
            <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
          </div>
          {/* Intense backlight glow for the avatar */}
          <div className="absolute inset-0 rounded-full bg-[#0080C7] blur-[15px] opacity-40 -z-10" />
        </div>

        {/* Content Header */}
        <div className="text-center mb-6">
          <h4 className="font-bold text-white uppercase tracking-widest text-[13px] mb-1.5">
            {t.name}
          </h4>
          <p className="text-[#0080C7] text-[10px] font-bold uppercase tracking-wider mb-4 drop-shadow-[0_0_5px_rgba(0,128,199,0.4)]">
            {t.role}
          </p>
          <div className="flex justify-center gap-1.5 text-[#0080C7] text-[14px]">
            {Array.from({ length: t.stars }).map((_, i) => (
              <span key={i} className="drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]">★</span>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative flex-1 flex flex-col justify-between">
          <div>
            <span className="block text-[#0080C7] font-serif text-3xl leading-none select-none mb-1 drop-shadow-[0_0_5px_rgba(0,128,199,0.4)]">❝</span>
            <p className="text-gray-400 text-[13px] leading-relaxed px-2" style={{ display: '-webkit-box', WebkitLineClamp: 7, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {t.quote}
            </p>
          </div>
          <div className="text-right mt-3">
            <span className="inline-block text-[#0080C7] font-serif text-3xl leading-none select-none drop-shadow-[0_0_5px_rgba(0,128,199,0.4)]">❞</span>
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
          align-items: stretch;
          width: max-content;
          animation: testimonials-scroll 15s linear infinite;
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      ` }} />

      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.12)_0%,transparent_60%)] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
          TESTIMONIALS
        </span>
        <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6">
          The results speak <br />
          <span className="relative inline-block text-[#0080C7] drop-shadow-[0_0_15px_rgba(0,128,199,0.6)]">
            louder than the pitch.
            {/* Horizontal flare line */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-64 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
          </span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mt-4">
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
