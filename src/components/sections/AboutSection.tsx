import { motion } from 'motion/react';
import psHeadshot from '../../assets/pranjalsarkar/5.webp';

const stats = [
  { value: '10+ Yrs', label: 'Leadership' },
  { value: '$50M+', label: 'ARR Scaled' },
  { value: '200+', label: 'PMs Mentored' },
  { value: 'Global', label: 'Speaker' },
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
    <section id="about" className="relative py-8 md:py-14 overflow-hidden border-b border-white/20">

      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >

        {/* Header Block */}
        <motion.div className="flex flex-col text-center justify-center mb-10" variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6 self-center">
            About Pranjal Sarkar
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white max-w-4xl mx-auto">
            I do not sell skills. <br />
            <span className="text-[#0080C7] font-serif">I build the mindset.</span>
          </h2>
        </motion.div>

        {/* Two Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Right Column: Premium Image Card with Floating Animation */}
          <motion.div
            className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:sticky lg:top-14"
            variants={itemVariants}
            {...floatAnimation}
          >
            <div className="relative group  overflow-hidden   transition-all duration-500 hover:border-[#0080C7]/40 shadow-2xl">
              {/* Inner accent frames */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-10 m-1" />

              <div className="relative aspect-5/5 w-full rounded-xl overflow-hidden bg-neutral-900">
                {/* Visual shadow mask overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent z-10" />

                <img
                  src={psHeadshot}
                  alt="Pranjal Sarkar"
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                />

                {/* Live Mentor Indicator Pill */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#0080C7]/30 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white font-mono">ACTIVE MENTOR</span>
                </div>

                {/* Corner light rays */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-[#0080C7]/15 to-transparent blur-xl pointer-events-none" />
              </div>

              {/* Glowing back-shadow shadow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-b from-transparent to-[#0080C7]/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none -z-10" />
            </div>
          </motion.div>
          {/* Left Column: Metrics & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-start">



            {/* Biography Narratives */}
            <motion.p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mb-6 font-sans" variants={itemVariants}>
              I have founded three startups and worked across organisations of different scales, including Tata & IBM, with mission-critical responsibilities across all of them. <strong className="text-[#0080C7] font-semibold font-sans">This has given me exposure to both sides: building from nothing and scaling within complexity.</strong>
            </motion.p>

            <motion.p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mb-8" variants={itemVariants}>
              The people who have spent time working with me have not just improved at their job. <strong className="text-white font-semibold">They have moved forward in ways that actually changed their trajectory</strong>, whether that meant stepping into bigger roles, finding clarity in their direction, or solving problems they had been stuck with for years. The shift usually shows up in how they think and the decisions they start making.
            </motion.p>

            {/* Quick Metrics Row */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8" variants={itemVariants}>
              {stats.map((s, idx) => (
                <div key={idx} className="border-l-2 border-[#0080C7] pl-4 py-1.5 bg-white/1 rounded-r-md">
                  <div className="text-xl md:text-2xl font-serif font-extrabold text-[#0080C7] tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-semibold">
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
