const Linkedin = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { useState, useRef, useEffect } from "react";
import krishnaImg from "../../assets/testimonal/krishna.jfif";
import neelimaImg from "../../assets/testimonal/neelima.jfif";
import jaganImg from "../../assets/testimonal/jagan.jfif";
import vikasImg from "../../assets/testimonal/vikas.jfif";
import ashutoshImg from "../../assets/testimonal/ashutosh.jfif";
import pritamImg from "../../assets/testimonal/virenshah.svg";
import christyImg from "../../assets/testimonal/christy.jfif";
import vineelaImg from "../../assets/testimonal/vineela.jfif";
import sumaImg from "../../assets/testimonal/virenshah.svg";
import kritikaImg from "../../assets/testimonal/virenshah.svg";
import virenImg from "../../assets/testimonal/virenshah.svg";
import johnImg from "../../assets/testimonal/johnjoseph.jfif";

const testimonials = [
  {
    name: "Krishna Kamal Katarla",
    role: "Product Manager",
    location: "Bengaluru, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/krishna-kamal-katarla-850b8849/",
    image: krishnaImg,
    stars: 5,
    quote:
      "I had the privilege of being part of the product management program and I must say it has been an immensely enriching experience. The structure was brilliantly designed to cater to diverse needs. From concepts to advanced topics, each module was meticulously crafted to provide a comprehensive understanding of the role and what it actually demands of you.",
  },
  {
    name: "Neelima Vandanapu",
    role: "Product Leader",
    location: "Exton, Pennsylvania, United State",
    linkedin: "https://www.linkedin.com/in/neelima-voleti/",
    image: neelimaImg,
    stars: 5,
    quote:
      "Pranjal's no-compromise approach ensures that you deeply understand the concepts, not just hear them. His commitment to guiding you to implement things correctly is what sets his teaching apart. His approach not only broadened my perspective but also equipped me with practical skills that I use in my work every day.",
  },
  {
    name: "Jagan Vijayakumar",
    role: "Product Professional",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/jagan-vijayakumar/",
    image: jaganImg,
    stars: 5,
    quote:
      "After months of searching I was fortunate enough to find the right mentor. I have had an incredible experience dedicating around 64 hours not just to understanding the concepts but actually applying them and building with them. His approach of learn by doing truly makes the learning process effective and enriching. His mentorship can genuinely make a difference in your career path.",
  },
  {
    name: "Vikas Yadav",
    role: "Product Manager",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/vikas-yadav-srccgbo/",
    image: vikasImg,
    stars: 5,
    quote:
      "He has taught us so much and really helped me grow. What is great about Pranjal is how he makes learning feel natural and is always there to answer our questions. When I look back I feel genuinely lucky. He has made us better at our jobs and helped us become more confident in ways I did not fully expect going in.",
  },
  {
    name: "Ashutosh Agrawal",
    role: "Product Manager",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/ashutosh-agrawal-706131121/",
    image: ashutoshImg,
    stars: 5,
    quote:
      "Pranjal keeps you very engaged from start to finish. He covered each and every aspect thoroughly and apart from that he continuously gives you regular case studies and regular assignments to genuinely strengthen your knowledge. The regular case studies and assignments after every session are what actually make it stick and stay with you.",
  },
  {
    name: "Pritam Bramhecha",
    role: "Product Leader",
    location: "Greater Gothenburg, Sweden",
    linkedin: "https://www.linkedin.com/in/pritam-bramhecha-98370b5/",
    image: pritamImg,
    stars: 5,

    quote:
      "I gained invaluable insights across so many areas and these key things have already transformed how I approach challenges and how I solve them. One of the key highlights was the hands-on experience working on real world scenarios and applying what I had been learning. Pranjal's guidance and feedback helped solidify the understanding at every step. I also got to work with community members from such diverse backgrounds and build something genuinely collaborative.",

  },
  {
    name: "Christy Tawii",
    role: "Product Professional",
    location: "Cape Town, Western Cape, South Africa",
    linkedin: "https://www.linkedin.com/in/christy-tawii-6256739/",
    image: christyImg,
    stars: 5,

    quote:
      "It has been challenging but it has been worth it. There are many theoretical courses out there but the best thing here is that it is very practical and because of the structure you are also forced to critically think about how you approach problems. Pranjal provides very constructive and actionable feedback which makes the whole experience more effective. And I have never had a mentor who actually reaches out and genuinely wants to help. That is very rare.",

  },
  {
    name: "Vineela Thonupunuri",
    role: "Tech Lead",
    location: "New York, New York, United States",
    linkedin: "https://www.linkedin.com/in/vthonupunuri/",
    image: vineelaImg,
    stars: 5,
    quote:
      "I am a tech lead and I have always understood the lifecycle of a product from a technical perspective but never really from the product perspective, which is exactly why I took this. The program is designed in such a way that there is theory but then you also get to work on it and apply it. Because of this I have actually been able to pick up certain things and implement them in my current role.",
  },
  {
    name: "Suma Pujari",
    role: "Product Professional",
    location: "Broomfield, Colorado, United States",
    linkedin: "https://www.linkedin.com/in/suma-pujari/",
    image: sumaImg,
    stars: 5,

    quote:
      "His curriculum takes you all the way from one level to higher and it is a wonderful blend of theory and practical that genuinely works. It was my pleasure to learn under him and I would greatly recommend it to all product professionals. And last but not the least he is a wonderful, wonderful human being and if given a chance I would love to be part of it again.",
  },
  {
    name: "Krittikaa Bhargava",
    role: "Product Manager",
    location: "Gurugram, Haryana, India",
    linkedin: "https://www.linkedin.com/in/kritika-bhargava-k99/",
    image: kritikaImg,
    stars: 5,
    quote:
      "It has been around five to six weeks, and he is really an amazing human being and a good mentor. He keeps you encouraged and motivated throughout the process. There are certain times when you feel this is very difficult and you wonder how you will accomplish your goals, and he helps you understand your individual goals and encourages you to work toward them. And not just during the sessions, whenever we were doing assignments and got stuck anywhere, we could get in touch with him anytime. He was always available.",
  },
  {
    name: "Viren Shah",
    role: "Product Professional",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/viren-shah-aa55b734/",
    image: virenImg,
    stars: 5,
    quote:
      "My expectations were very high going into this, and I can say that all of them were clearly met and it went beyond what I expected. Everything was covered in a very easy and understandable manner. Not a single question was ever left unanswered. And an added advantage was that the people attending were very experienced, it felt like a global MBA with people from US, Canada, Africa, India all in one room.",
  },
  {
    name: "John Joseph",
    role: "Entrepreneur",
    location: "Lower Saxony, Germany",
    linkedin: "https://www.linkedin.com/in/john-joseph-9699a7179/",
    image: johnImg,
    stars: 5,
    quote:
      "As an entrepreneur I was constantly juggling new ideas but my biggest challenge was identifying which one had real potential. The fear of not recognising a winning idea in time, only to see someone else succeed with it, was something I struggled with regularly. Even when I spotted an idea, understanding the frameworks and stages needed to bring it to life was an entirely different challenge. This cohort completely shifted the way I think. The depth of insight I gained is profound and I find myself focusing much more on how I approach problems, ideas and execution. It is all about thinking. That is what I kept hearing and it turned out to be true.",
  },
];

const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const checkTruncation = () => {
      if (textRef.current) {
        // A full line of text is ~21px. A buffer of 10px prevents false positives 
        // from subpixel rendering or line-height discrepancies on exactly 8-line texts.
        setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight + 10);
      }
    };

    checkTruncation();

    const resizeObserver = new ResizeObserver(() => checkTruncation());
    resizeObserver.observe(textRef.current);

    return () => resizeObserver.disconnect();
  }, [t.quote]);

  return (
    <div className="shrink-0 group px-4 pt-12 flex" style={{ width: '380px' }}>
      <div className="relative rounded-2xl bg-[#050b14] border-b border-x border-white/10 shadow-[0_5px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20 flex flex-col px-4 pb-0 pt-14 h-full min-h-62.5 w-full mt-4">

        {/* Gradient Top Border and Inner Glow with clipping */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-[#00a8ff] to-transparent shadow-[0_0_15px_rgba(0,168,255,0.5)]" />
          <div className="absolute top-0 left-0 right-0 h-37.5 bg-[radial-gradient(ellipse_at_top,rgba(0,168,255,0.2),transparent_70%)]" />
        </div>
        {/* Avatar sticking out of the top with neon blur ring */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full p-1 bg-[#050b14] z-20">

          {/* Neon blur ring layers */}
          <div className="absolute inset-0 rounded-full border-[3px] border-[#00a8ff] blur-[6px] z-10" />
          <div className="absolute inset-0 rounded-full border-2 border-[#00a8ff] blur-[2px] z-10" />

          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#00a8ff] relative z-30 bg-[#050b14]">
            <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
          </div>

        </div>

        {/* Content Header */}
        <div className="text-center mb-6">
          <h4 className="font-bold text-white uppercase tracking-widest text-[13px] mb-1.5 mt-2 flex items-center justify-center">
            <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00a8ff] transition-colors flex items-center gap-1.5 group/link" title={`View ${t.name} on LinkedIn`}>
              {t.name}
              <Linkedin size={14} className="text-[#0080C7] group-hover/link:text-[#00a8ff] transition-colors" />
            </a>
          </h4>
          <p className="text-[#0080C7] text-[9px] font-bold uppercase tracking-wider mb-4 drop-shadow-[0_0_5px_rgba(0,128,199,0.4)]">
            {t.role} • {t.location}
          </p>
          <div className="flex justify-center gap-1.5 text-[#0080C7] text-[20px]">
            {Array.from({ length: t.stars }).map((_, i) => (
              <span key={i} className="drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]">★</span>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative flex-1 flex flex-col justify-between">
          <div>
            <span className="block text-[#0080C7] font-serif text-5xl leading-none select-none mb-1 drop-shadow-[0_0_5px_rgba(0,128,199,0.4)]">❝</span>
            <p 
              ref={textRef}
              className={`text-gray-400 text-[13px] leading-relaxed px-2 ${!isExpanded ? 'line-clamp-8' : ''}`}
            >
              {t.quote}
            </p>
            {(isTruncated || isExpanded) && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#00a8ff] text-[11px] font-bold uppercase tracking-wider mt-2 px-2 hover:text-white transition-colors text-left"
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
          <div className="text-right mt-3">
            <span className="inline-block text-[#0080C7] font-serif text-5xl leading-none select-none drop-shadow-[0_0_5px_rgba(0,128,199,0.4)]">❞</span>
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

      {/* Ambient left side glow */}
      <div className="absolute top-1/4 -left-32 w-125 h-125 rounded-full z-0 bg-[#0044cc] blur-[130px] opacity-40 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
          TESTIMONIALS
        </span>
        <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6">
          The results speak <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
            louder than the pitch.
            {/* Horizontal flare line */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-64 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
          </span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mt-4">
          From Senior PM to Director. From stuck to leading.
        </p>
      </div>

      {/* Scrolling marquee */}
      <div
        className="relative w-full overflow-hidden py-4 z-10"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >

        {/* Track */}
        <div className="testimonials-track active:cursor-grabbing">
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
