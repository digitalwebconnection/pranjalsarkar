import InteractiveBook, { type BookPage } from '../ui/InteractiveBook';
import coverImg from '../../assets/pranjalsarkar/3.webp';
import img1 from '../../assets/pranjalsarkar/image1.webp';
import img2 from '../../assets/pranjalsarkar/2.webp';
import img3 from '../../assets/pranjalsarkar/3.webp';
import img4 from '../../assets/pranjalsarkar/4.webp';
import img5 from '../../assets/pranjalsarkar/5.webp';
import img6 from '../../assets/pranjalsarkar/6.webp';
import img7 from '../../assets/pranjalsarkar/07.webp';
import img8 from '../../assets/pranjalsarkar/08.webp';

const LeftPageImage = ({ imgSrc }: { imgSrc: string }) => (
  <div className="relative w-full h-full bg-neutral-900 overflow-hidden flex flex-col justify-end">
    <img
      src={imgSrc}
      alt="Pranjal Sarkar"
      className="absolute inset-0 w-full h-full object-cover opacity-90"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
    <div className="relative z-10 p-5 text-left">
      <div className="text-[9px] font-bold text-[#0080C7] tracking-widest uppercase mb-0.5 font-mono">THE MANIFESTO</div>
      <div className="text-xs font-serif font-extrabold text-white leading-tight">Pranjal Sarkar</div>
      <p className="text-[8px] text-white/50 uppercase tracking-widest font-mono mt-0.5">Interactive Edition</p>
    </div>
  </div>
);

const bookPages: BookPage[] = [
  {
    pageNumber: 1,
    backContent: <LeftPageImage imgSrc={img1} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">01</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">
          Conviction Under Pressure
        </h4>

        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
         Today you have opinions in meetings but struggle to back them up when someone challenges you. After this program you will know the difference between an opinion and a conviction. And you will know exactly how to defend the conviction.
        </p>
      </div>
    ),
  },

  {
    pageNumber: 2,
    backContent: <LeftPageImage imgSrc={img2} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">02</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">
          Thinking Before The Room Does
        </h4>

        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
          Today you prepare for a leadership review hoping nobody asks a hard question. After this program you will have already stress-tested your own thinking before you walk into the room.
        </p>
      </div>
    ),
  },

  {
    pageNumber: 3,
    backContent: <LeftPageImage imgSrc={img3} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">03</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">
          Reading The Full Picture
        </h4>

        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
        Today you make product decisions based on what customers are saying right now. After this program you will read three things at the same time. What the customer needs. What the market is doing. What your organization can actually act on. And you will make the call at the intersection of all three.
        </p>
      </div>
    ),
  },

  {
    pageNumber: 4,
    backContent: <LeftPageImage imgSrc={img4} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">04</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">
          Deciding Above AI
        </h4>

        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
          Today you use AI and mostly trust what it gives you. After this program you will know exactly where AI output is wrong, what it missed, and what decision only you can make above it.
        </p>
      </div>
    ),
  },

  {
    pageNumber: 5,
    backContent: <LeftPageImage imgSrc={img5} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">05</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">
          Fluent In The Boardroom
        </h4>

        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
          Today when a business leader questions your product decision in financial terms you struggle to answer. After this program you will connect every product decision to revenue, margin, and business outcome in language that gets your recommendations approved.
        </p>
      </div>
    ),
  },

  {
    pageNumber: 6,
    backContent: <LeftPageImage imgSrc={img6} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">06</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">
          Owning The Full Leadership Table
        </h4>

        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
          Today you are seen as a strong executor in your product area. After this program you will be seen as someone who thinks and operates across the full product leadership surface.
        </p>
      </div>
    ),
  },

  {
    pageNumber: 7,
    backContent: <LeftPageImage imgSrc={img7} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">07</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">
         Your Honest Leadership Mirror
        </h4>

        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
        Today you do not know specifically where your judgment is strong and where it is weak. After this program you will have a detailed assessment that tells you exactly where you stand and exactly what to work on next.
        </p>
      </div>
    ),
  },

  {
    pageNumber: 8,
    backContent: <LeftPageImage imgSrc={img8} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <h4 className="font-serif text-lg font-bold text-neutral-800 mb-3">
          Your Next Step
        </h4>

        <p className="text-neutral-600 text-[11px] leading-relaxed mb-5">
          Join the Studio and build the product judgment required to lead in an AI-first world.
        </p>

        <a
          href="#program"
          className="px-5 py-2 bg-[#0080C7] rounded-full text-xs font-bold text-white hover:bg-[#009CEE] transition-all"
        >
          Explore The Studio
        </a>
      </div>
    ),
  },
];
export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Intense Background Radial Glows */}
      <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[80%] z-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.45)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,128,199,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Typography, Manifesto & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[12px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)] self-start">
              TRANSFORMATION PROMISE
            </span>

            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white mb-6">
              What changes after this {" "}
              <span className="relative text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
                 studio program?
                {/* Horizontal flare line */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-72 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
              </span>
            </h2>

            {/* Manifesto Quote Block */}
            <div className="relative border-l-2 border-[#0080C7] pl-6 my-6 shadow-[-4px_0_15px_-4px_rgba(0,128,199,0.6)]">
              <p className="text-lg md:text-xl font-serif  text-white/95 leading-relaxed drop-shadow-sm">
                "The Studio is designed to help you build judgment and not just knowledge."
              </p>
            </div>

            <p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-xl mb-10 font-sans">
              None of these capabilities are developed by watching lectures or memorizing frameworks. They emerge through repeated executive decisions, boardroom discussions, AI leadership simulations, feedback, reflection, and real business challenges.
            </p>

            {/* See How It Works CTA Button */}
            <a
              href="#program"
              className="group inline-flex justify-center items-center gap-2.5 px-10 py-4 bg-linear-to-r from-[#0080C7] to-[rgba(24,37,226,0.9)] rounded-full text-white font-bold text-sm transition-all duration-300 hover:from-[#00a8ff] hover:to-[rgba(24,37,226,1)] shadow-[0_0_20px_rgba(24,37,226,0.4)] hover:shadow-[0_0_30px_rgba(24,37,226,0.6)] hover:-translate-y-0.5 cursor-pointer self-start"
            >
              See How It Works
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Column: Recreated Interactive Book */}
          <div className="lg:col-span-6 w-full flex justify-center items-center relative mt-10 lg:mt-0">
            {/* Massive ambient backlight behind the book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-112.5 bg-[#0080C7] blur-[100px] opacity-30 pointer-events-none -z-10 transition-opacity duration-1000" />
            
            <div className="relative group">
              {/* Extra hover glow */}
              <div className="absolute inset-0 bg-[#0080C7] blur-[60px] opacity-0 group-hover:opacity-40 pointer-events-none -z-10 transition-opacity duration-700" />
              
              <InteractiveBook
                coverImage={coverImg}
                authorImage={img5}
                bookTitle="Product Judgment Under AI"
                bookAuthor="Pranjal Sarkar"
                pages={bookPages}
                width={310}
                height={400}
                autoplay={true}
                autoplayDelay={2500}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
