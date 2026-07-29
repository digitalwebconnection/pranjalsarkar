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
      "An incredibly enriching experience. Every module was thoughtfully designed and helped me understand what product leadership actually demands.",
  },
  {
    name: "Neelima Vandanapu",
    role: "Product Leader",
    location: "Pennsylvania, USA",
    linkedin: "https://www.linkedin.com/in/neelima-voleti/",
    image: neelimaImg,
    stars: 5,
    quote:
      "Pranjal's no-compromise approach helped me truly understand the concepts and apply them in my day-to-day work. That's what makes his mentorship different.",
  },
  {
    name: "Jagan Vijayakumar",
    role: "Product Professional",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/jagan-vijayakumar/",
    image: jaganImg,
    stars: 5,
    quote:
      "The learn-by-doing approach completely changed how I think. Every assignment helped me apply concepts instead of just understanding them.",
  },
  {
    name: "Vikas Yadav",
    role: "Product Manager",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/vikas-yadav-srccgbo/",
    image: vikasImg,
    stars: 5,
    quote:
      "Pranjal helped me become more confident in my decisions. His guidance made learning feel natural and genuinely improved my work.",
  },
  {
    name: "Ashutosh Agrawal",
    role: "Product Manager",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/ashutosh-agrawal-706131121/",
    image: ashutoshImg,
    stars: 5,
    quote:
      "The case studies and assignments after every session made the learning practical. Everything was detailed and highly engaging.",
  },
  {
    name: "Pritam Bramhecha",
    role: "Product Leader",
    location: "Greater Gothenburg, Sweden",
    linkedin: "https://www.linkedin.com/in/pritam-bramhecha-98370b5/",
    image: pritamImg,
    stars: 5,
    quote:
      "Working on real-world product challenges with professionals from different backgrounds transformed how I approach complex problems.",
  },
  {
    name: "Christy Tawii",
    role: "Product Professional",
    location: "Cape Town, South Africa",
    linkedin: "https://www.linkedin.com/in/christy-tawii-6256739/",
    image: christyImg,
    stars: 5,
    quote:
      "A practical program that forces you to think critically. The personal feedback and mentorship made a huge difference in my growth.",
  },
  {
    name: "Vineela Thonupunuri",
    role: "Tech Lead",
    location: "New York, USA",
    linkedin: "https://www.linkedin.com/in/vthonupunuri/",
    image: vineelaImg,
    stars: 5,
    quote:
      "The balance between theory and application helped me bring product thinking into my current role immediately.",
  },
  {
    name: "Suma Pujari",
    role: "Product Professional",
    location: "Broomfield, Colorado, USA",
    linkedin: "https://www.linkedin.com/in/suma-pujari/",
    image: sumaImg,
    stars: 5,
    quote:
      "A perfect blend of practical learning and strategy. I would happily recommend this program to every product professional.",
  },
  {
    name: "Krittikaa Bhargava",
    role: "Product Manager",
    location: "Gurugram, Haryana, India",
    linkedin: "https://www.linkedin.com/in/kritika-bhargava-k99/",
    image: kritikaImg,
    stars: 5,
    quote:
      "The mentorship never stopped after class. Pranjal was always available to guide, motivate, and help us overcome challenges.",
  },
  {
    name: "Viren Shah",
    role: "Product Professional",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/viren-shah-aa55b734/",
    image: virenImg,
    stars: 5,
    quote:
      "The experience exceeded every expectation. The global cohort and quality of discussions felt like a world-class executive program.",
  },
  {
    name: "John Joseph",
    role: "Entrepreneur",
    location: "Lower Saxony, Germany",
    linkedin: "https://www.linkedin.com/in/john-joseph-9699a7179/",
    image: johnImg,
    stars: 5,
    quote:
      "This cohort completely changed how I evaluate ideas and make decisions. It isn't about frameworks—it's about learning how to think.",
  },
];

const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="shrink-0 group px-4 pt-12 flex" style={{ width: '380px' }}>
      <div className="relative rounded-2xl bg-[#050b14] border-b border-x border-white/10 shadow-[0_5px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20 flex flex-col px-6 pb-6 pt-14 h-full min-h-62.5 w-full mt-4">

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
          <h4 className="font-bold text-white uppercase tracking-widest text-[13px] mb-1.5 mt-2">
            {t.name}
          </h4>
          <p className="text-[#0080C7] text-[10px] font-bold uppercase tracking-wider mb-4 drop-shadow-[0_0_5px_rgba(0,128,199,0.4)]">
            {t.role}
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
            <p className="text-gray-400 text-[13px] leading-relaxed px-2" style={{ display: '-webkit-box', WebkitLineClamp: 7, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {t.quote}
            </p>
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
