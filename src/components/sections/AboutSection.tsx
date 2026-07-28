import { motion } from 'motion/react';
import psHeadshot from '../../assets/pranjalsarkar/19.webp';
import { Users, Globe, RocketIcon } from 'lucide-react';

const MountainFlagIcon = ({ size = 24, strokeWidth = 1.5, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Mountain */}
    <path d="m7 7 4 8 5-5 5 11H3L7 7z" />
    <path d="M5 11.5l2 1.5 2-1.5" />
    {/* Flag */}
    <path d="M7 7V2h5v4H7" />
  </svg>
);


const stats = [
  {
    value: '20+ Yrs',
    label: 'Product Leadership',
    icon: MountainFlagIcon,
  },
  {
    value: '3',
    label: 'Startups Founded',
    icon: RocketIcon,
  },
  {
    value: '200+',
    label: 'PMs Mentored',
    icon: Users,
  },
  {
    value: '10+',
    label: 'Countries',
    icon: Globe,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 18,
    },
  },
} as const;

const floatAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 md:py-20 overflow-hidden border-b border-white/8 bg-[#000001]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.12)_0%,transparent_60%)] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >

        {/* Header Block */}
        <motion.div className="flex flex-col text-center justify-center mb-16" variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)] self-center">
            About Pranjal Sarkar
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white max-w-4xl mx-auto">
           I don't teach Product Management. <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              I build Product Leaders.
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-64 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span>
          </h2>
        </motion.div>

        {/* Two Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Right Column: Premium Image Card with Floating Animation */}
          <motion.div
            className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:sticky lg:top-14 relative"
            variants={itemVariants}
            {...floatAnimation}
          >
            <div className="relative rounded-2xl overflow-hidden border border-red/80 transition-all duration-500 hover:border-white/80 group">
              <div className="relative aspect-4/5 w-full bg-[#0a0c10]">
                {/* Visual shadow mask overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

                <img
                  src={psHeadshot}
                  alt="Pranjal Sarkar"
                  className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                />

                {/* Live Mentor Indicator Pill */}
                <div className="absolute top-5 left-5 z-20 px-3 py-1.5 bg-[#0a0c10]/80 backdrop-blur-md border border-[#0080C7]/50 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,128,199,0.3)] group-hover:shadow-[0_0_25px_rgba(0,128,199,0.5)] transition-shadow">
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">ACTIVE MENTOR</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Left Column: Metrics & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-4 lg:pl-6">

            {/* Biography Narratives */}
           <motion.p
  className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-3xl mb-8 font-sans"
  variants={itemVariants}
>
  Over the last <strong className="text-white font-semibold">20+ years</strong>, I've built startups from scratch, scaled products at <strong className="text-white font-semibold">Tata</strong>, and now lead product strategy at <strong className="text-white font-semibold">IBM</strong>. <strong className="text-[#0080C7] font-semibold font-sans drop-shadow-[0_0_8px_rgba(0,128,199,0.4)]">That journey taught me how product leaders think, decide, and create business impact.</strong>
</motion.p>

<motion.p
  className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-3xl mb-12"
  variants={itemVariants}
>
  AI Product Leadership Studio was created to bridge the gap between <strong className="text-white font-semibold">executing products</strong> and <strong className="text-white font-semibold">leading product organizations.</strong> Everything you learn here comes from real products, real teams, and real executive decisions—not just theory.
</motion.p>

            {/* Quick Metrics Row */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4" variants={itemVariants}>
              {stats.map((s, idx) => (
                <div key={idx} className="bg-[#0a0c10] border border-white/5 rounded-lg p-5 flex flex-col items-start text-left relative overflow-hidden group shadow-[0_15px_30px_-10px_rgba(0,128,199,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,128,199,0.4)]">
                  {/* Left edge vertical gradient line */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#00a8ff] via-[#0080C7] to-transparent" />
                  
                  <div className="relative mb-4 text-[#0080C7] transition-transform duration-300 group-hover:scale-110">
                    <s.icon size={30} strokeWidth={1.5} />
                  </div>
                  
                  <div className="relative text-xl md:text-2xl font-serif font-bold text-[#0080C7] mb-1.5">
                    {s.value}
                  </div>
                  <div className="relative text-[10px] text-white/50 uppercase tracking-[0.2em] font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>


        </div>

      </motion.div>
    </section>
  );
}
