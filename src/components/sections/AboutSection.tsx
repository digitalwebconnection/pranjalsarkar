import { motion } from 'motion/react';
import psHeadshot from '../../assets/pranjalsarkar/5.webp';
import { Mountain, TrendingUp, Users, Globe } from 'lucide-react';

const stats = [
  { value: '10+ Yrs', label: 'Leadership', icon: Mountain },
  { value: '$50M+', label: 'ARR Scaled', icon: TrendingUp },
  { value: '200+', label: 'PMs Mentored', icon: Users },
  { value: 'Global', label: 'Speaker', icon: Globe },
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
            I do not sell skills. <br />
            <span className="relative inline-block text-[#0080C7] drop-shadow-[0_0_15px_rgba(0,128,199,0.6)]">
              I build the mindset.
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-64 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
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
            {/* Massive ambient backlight behind the card */}
            <div className="absolute inset-0 bg-[#0080C7] blur-[80px] opacity-20 pointer-events-none -z-10 transition-opacity duration-500 group-hover:opacity-40" />
            
            <div className="relative rounded-2xl overflow-hidden border border-[#0080C7]/40 shadow-[0_0_40px_rgba(0,128,199,0.3)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,128,199,0.5)] hover:border-[#0080C7]/70 group">
              <div className="relative aspect-[4/5] w-full bg-[#0a0c10]">
                {/* Visual shadow mask overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

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
            <motion.p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-3xl mb-8 font-sans" variants={itemVariants}>
              I have founded three startups and worked across organisations of different scales, including Tata & IBM, with mission-critical responsibilities across all of them. <strong className="text-[#0080C7] font-semibold font-sans drop-shadow-[0_0_8px_rgba(0,128,199,0.4)]">This has given me exposure to both sides: building from nothing and scaling within complexity.</strong>
            </motion.p>

            <motion.p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-3xl mb-12" variants={itemVariants}>
              The people who have spent time working with me have not just improved at their job. <strong className="text-white font-semibold">They have moved forward in ways that actually changed their trajectory</strong>, whether that meant stepping into bigger roles, finding clarity in their direction, or solving problems they had been stuck with for years. The shift usually shows up in how they think and the decisions they start making.
            </motion.p>

            {/* Quick Metrics Row */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4" variants={itemVariants}>
              {stats.map((s, idx) => (
                <div key={idx} className="bg-[#0a0c10] border border-[#0080C7]/40 rounded-xl p-5 flex flex-col items-center text-center relative overflow-hidden group shadow-[0_0_25px_rgba(0,128,199,0.2)] hover:shadow-[0_0_40px_rgba(0,128,199,0.4)] hover:border-[#0080C7]/60 transition-all duration-300">
                  {/* Top inner glow & intense radial background */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,128,199,0.2),transparent_70%)] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7]/50 to-transparent shadow-[0_0_15px_rgba(0,128,199,1)]" />
                  
                  <div className="relative mb-4 text-[#0080C7] opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_12px_rgba(0,128,199,0.8)]">
                    <s.icon size={26} strokeWidth={1.5} />
                  </div>
                  
                  <div className="relative text-lg md:text-xl font-serif font-bold text-[#0080C7] drop-shadow-[0_0_12px_rgba(0,128,199,0.9)] mb-1.5">
                    {s.value}
                  </div>
                  <div className="relative text-[10px] text-white/60 uppercase tracking-widest font-semibold drop-shadow-md">
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
