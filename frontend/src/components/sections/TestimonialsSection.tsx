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
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    location: "Bengaluru, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/krishna-kamal-katarla-850b8849/",
    image: krishnaImg,
    quote:
      "I had the privilege of being part of the product management program and I must say it has been an immensely enriching experience. The structure was brilliantly designed to cater to diverse needs. From concepts to advanced topics, each module was meticulously crafted to provide a comprehensive understanding of the role and what it actually demands of you.",
  },
  {
    name: "Neelima Vandanapu",
    location: "Exton, Pennsylvania, United State",
    linkedin: "https://www.linkedin.com/in/neelima-voleti/",
    image: neelimaImg,
    quote:
      "Pranjal's no-compromise approach ensures that you deeply understand the concepts, not just hear them. His commitment to guiding you to implement things correctly is what sets his teaching apart. His approach not only broadened my perspective but also equipped me with practical skills that I use in my work every day.",
  },
  {
    name: "Jagan Vijayakumar",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/jagan-vijayakumar/",
    image: jaganImg,
    quote:
      "After months of searching I was fortunate enough to find the right mentor. I have had an incredible experience dedicating around 64 hours not just to understanding the concepts but actually applying them and building with them. His approach of learn by doing truly makes the learning process effective and enriching. His mentorship can genuinely make a difference in your career path.",
  },
  {
    name: "Vikas Yadav",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/vikas-yadav-srccgbo/",
    image: vikasImg,
    quote:
      "He has taught us so much and really helped me grow. What is great about Pranjal is how he makes learning feel natural and is always there to answer our questions. When I look back I feel genuinely lucky. He has made us better at our jobs and helped us become more confident in ways I did not fully expect going in.",
  },
  {
    name: "Ashutosh Agrawal",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/ashutosh-agrawal-706131121/",
    image: ashutoshImg,
    quote:
      "Pranjal keeps you very engaged from start to finish. He covered each and every aspect thoroughly and apart from that he continuously gives you regular case studies and regular assignments to genuinely strengthen your knowledge. The regular case studies and assignments after every session are what actually make it stick and stay with you.",
  },
  {
    name: "Pritam Bramhecha",
    location: "Greater Gothenburg, Sweden",
    linkedin: "https://www.linkedin.com/in/pritam-bramhecha-98370b5/",
    image: pritamImg,
   quote:
      "I gained invaluable insights across so many areas and these key things have already transformed how I approach challenges and how I solve them. One of the key highlights was the hands-on experience working on real world scenarios and applying what I had been learning. Pranjal's guidance and feedback helped solidify the understanding at every step. I also got to work with community members from such diverse backgrounds and build something genuinely collaborative.",

  },
  {
    name: "Christy Tawii",
    location: "Cape Town, Western Cape, South Africa",
    linkedin: "https://www.linkedin.com/in/christy-tawii-6256739/",
    image: christyImg,
    quote:
      "It has been challenging but it has been worth it. There are many theoretical courses out there but the best thing here is that it is very practical and because of the structure you are also forced to critically think about how you approach problems. Pranjal provides very constructive and actionable feedback which makes the whole experience more effective. And I have never had a mentor who actually reaches out and genuinely wants to help. That is very rare.",

  },
  {
    name: "Vineela Thonupunuri",
    location: "New York, New York, United States",
    linkedin: "https://www.linkedin.com/in/vthonupunuri/",
    image: vineelaImg,
    quote:
      "I am a tech lead and I have always understood the lifecycle of a product from a technical perspective but never really from the product perspective, which is exactly why I took this. The program is designed in such a way that there is theory but then you also get to work on it and apply it. Because of this I have actually been able to pick up certain things and implement them in my current role.",
  },
  {
    name: "Suma Pujari",
    location: "Broomfield, Colorado, United States",
    linkedin: "https://www.linkedin.com/in/suma-pujari/",
    image: sumaImg,
    quote:
      "His curriculum takes you all the way from one level to higher and it is a wonderful blend of theory and practical that genuinely works. It was my pleasure to learn under him and I would greatly recommend it to all product professionals. And last but not the least he is a wonderful, wonderful human being and if given a chance I would love to be part of it again.",
  },
  {
    name: "Krittikaa Bhargava",
    location: "Gurugram, Haryana, India",
    linkedin: "https://www.linkedin.com/in/kritika-bhargava-k99/",
    image: kritikaImg,
    quote:
      "It has been around five to six weeks, and he is really an amazing human being and a good mentor. He keeps you encouraged and motivated throughout the process. There are certain times when you feel this is very difficult and you wonder how you will accomplish your goals, and he helps you understand your individual goals and encourages you to work toward them. And not just during the sessions, whenever we were doing assignments and got stuck anywhere, we could get in touch with him anytime. He was always available.",
  },
  {
    name: "Viren Shah",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/viren-shah-aa55b734/",
    image: virenImg,
    quote:
      "My expectations were very high going into this, and I can say that all of them were clearly met and it went beyond what I expected. Everything was covered in a very easy and understandable manner. Not a single question was ever left unanswered. And an added advantage was that the people attending were very experienced, it felt like a global MBA with people from US, Canada, Africa, India all in one room.",
  },
  {
    name: "John Joseph",
    location: "Lower Saxony, Germany",
    linkedin: "https://www.linkedin.com/in/john-joseph-9699a7179/",
    image: johnImg,
    quote:
      "As an entrepreneur I was constantly juggling new ideas but my biggest challenge was identifying which one had real potential. The fear of not recognising a winning idea in time, only to see someone else succeed with it, was something I struggled with regularly. Even when I spotted an idea, understanding the frameworks and stages needed to bring it to life was an entirely different challenge. This cohort completely shifted the way I think. The depth of insight I gained is profound and I find myself focusing much more on how I approach problems, ideas and execution. It is all about thinking. That is what I kept hearing and it turned out to be true.",
  },
];


function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const checkTruncation = () => {
      if (textRef.current) {
        setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight + 10);
      }
    };

    checkTruncation();

    const resizeObserver = new ResizeObserver(() => checkTruncation());
    resizeObserver.observe(textRef.current);

    return () => resizeObserver.disconnect();
  }, [t.quote]);

  return (
    <div className="shrink-0 group px-3 py-4 flex" style={{ width: '320px' }}>
      <div className="relative rounded-2xl p-px bg-linear-to-br from-[#00a8ff]/60 via-transparent to-transparent shadow-[-15px_-15px_30px_rgba(0,168,255,0.15)] transition-all duration-300  flex flex-col h-full w-full group">
        <div className="relative rounded-2xl bg-[#050b14] flex flex-col h-full overflow-hidden w-full">
          
          {/* Upper Half: Image */}
          <div className="relative w-full shrink-0 h-68">
            <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-fill object-center" loading="lazy" />
          </div>

          {/* Bottom Half: Content */}
          <div className="flex flex-col flex-1 px-5 pb-5 pt-4 relative justify-between z-10">
            <div>
              {/* Header */}
              <div className="mb-4 text-center">
                <h4 className="font-bold text-white text-lg tracking-wide mb-1">
                  {t.name}
                </h4>
                <p className="text-gray-200 text-[10px] uppercase tracking-wide">
                  {t.location}
                </p>
              </div>

              {/* Quote */}
              <div className="relative mb-5">
                <span className="absolute -top-3 -left-2 text-[#0080C7]/30 font-serif text-4xl leading-none select-none">❝</span>
                <p 
                  ref={textRef}
                  className={`text-gray-300 text-[13px] leading-relaxed relative z-10 ${!isExpanded ? 'line-clamp-6' : ''}`}
                >
                  {t.quote}
                </p>
                {(isTruncated || isExpanded) && (
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#00a8ff] text-[11px] font-bold uppercase tracking-wider mt-3 hover:text-white transition-colors text-left"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            </div>
            
            {/* LinkedIn CTA */}
            <div className="pt-4 border-t border-white/10 mt-auto">
              <a 
                href={t.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-[#00a8ff]/10 hover:bg-[#00a8ff]/20 border border-[#00a8ff]/30 rounded-lg text-[13px] font-medium text-[#00a8ff] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,168,255,0.1)] hover:shadow-[0_0_20px_rgba(0,168,255,0.3)]"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="relative pt-8 md:pt-14 overflow-hidden border-b border-white/8 bg-[#000001]">

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
      </div>

      {/* Manual Scrolling Track with side arrows */}
      <div className="relative w-full z-10 max-w-7xl mx-auto px-2 sm:px-8  group">
        
        {/* Left Navigation Arrow */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 sm:left-4 top-[45%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-[#050b14]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a8ff]/20 hover:border-[#00a8ff]/50 hover:text-[#00a8ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,168,255,0.1)] hover:shadow-[0_0_25px_rgba(0,168,255,0.3)] opacity-0 group-hover:opacity-100 disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-5 px-6 md:px-12 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .overflow-x-auto::-webkit-scrollbar { display: none; }
            `}</style>
            
            {testimonials.map((t, idx) => (
              <div className="snap-start shrink-0" key={idx}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button 
          onClick={scrollRight} 
          className="absolute right-0 sm:right-4 top-[45%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-[#050b14]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a8ff]/20 hover:border-[#00a8ff]/50 hover:text-[#00a8ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,168,255,0.1)] hover:shadow-[0_0_25px_rgba(0,168,255,0.3)] opacity-0 group-hover:opacity-100 disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      {/* Final CTA */}
      <div className="mt-6 text-center pb-4 z-10 relative">
        <a 
          href="https://topmate.io/pranjal_sarkar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-2 bg-linear-to-r from-[#1749eb] to-[#012368] text-white font-bold text-lg rounded-full shadow-[0_0_25px_rgba(0,168,255,0.4)] hover:shadow-[0_0_40px_rgba(0,168,255,0.6)] hover:-translate-y-1 transition-all duration-300"
        >
          Take a call with Pranjal
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

    </section>
  );
}
