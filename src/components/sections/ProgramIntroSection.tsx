import { motion } from 'motion/react';
import { 
  Calendar, 
  Users, 
  Clock, 
  Globe, 
  Target, 
  TrendingUp, 
  Sparkles, 
  Compass, 
  Award, 
  CheckCircle, 
  Shield 
} from 'lucide-react';

const details = [
  { icon: Calendar, label: 'Format', value: 'Live Cohort • 6 Weeks' },
  { icon: Users, label: 'Cohort Size', value: 'Maximum 20 Leaders' },
  { icon: Clock, label: 'Commitment', value: '4–6 Hours / Week' },
  { icon: Globe, label: 'Mode', value: 'Online • India & Global' },
  { icon: Target, label: 'Designed For', value: 'Senior PMs • EMs • Growth Leads' },
  { icon: TrendingUp, label: 'Outcome', value: 'Director / Head of Product' },
];

const whatYouGet = [
  { 
    icon: Sparkles, 
    heading: 'Executive Learning', 
    desc: 'Master the thinking, frameworks, and decision models behind Product Leadership.' 
  },
  { 
    icon: Compass, 
    heading: 'Decision Simulations', 
    desc: 'Practice high-stakes product decisions in realistic executive scenarios.' 
  },
  { 
    icon: Users, 
    heading: 'Leadership Collaboration', 
    desc: 'Debate ideas, challenge assumptions, and learn with experienced Product Managers.' 
  },
  { 
    icon: Award, 
    heading: 'AI Executive Coaching', 
    desc: 'Strengthen your judgment through conversations with AI executive advisors.' 
  },
  { 
    icon: CheckCircle, 
    heading: 'AI Leadership Toolkit', 
    desc: 'Build practical AI workflows that improve strategic thinking and decision-making.' 
  },
  { 
    icon: Shield, 
    heading: 'Real Leadership Challenge', 
    desc: 'Solve a real business problem and present your recommendations to experienced leaders.' 
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
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
} as const;

export default function ProgramIntroSection() {
  return (
    <section id="program" className="relative py-12 md:py-20 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-[60%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,128,199,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[70%] h-[70%] z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,128,199,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-14 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-8">
            AI Product  <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              Leadership Studio
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span> 
          </h2>
          <p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 font-sans">
        An immersive leadership experience for experienced Product Managers ready to become Product Directors. Learn by making decisions—not by watching lectures.    </p>
        </motion.div>

        {/* Details Grid (Premium clean grid layout) */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {details.map((d, i) => {
            const IconComponent = d.icon;
            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="p-5 rounded-xl flex flex-col gap-4 transition-all duration-300 group relative bg-[#0a0c10] border border-white/20 hover:border-white/40 overflow-hidden"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0044cc]/10 border border-[#0044cc]/50 flex items-center justify-center text-[#0044cc] shadow-[0_0_15px_rgba(0,68,204,0.3)] group-hover:shadow-[0_0_25px_rgba(0,68,204,0.6)] transition-shadow">
                  <IconComponent size={18} className="drop-shadow-[0_0_8px_rgba(0,68,204,0.8)]" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5">{d.label}</span>
                  <span className="font-serif text-white text-sm md:text-base font-bold tracking-tight leading-tight group-hover:text-[#0044cc] transition-colors mb-4">{d.value}</span>
                  <div className="mt-auto w-12 h-0.5 bg-linear-to-r from-[#0044cc] to-transparent shadow-[0_0_8px_rgba(0,68,204,0.9)] opacity-80" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What You Get Grid */}
        <div className="">
          <motion.h3 
            className="relative inline-block font-serif text-3xl font-bold text-white mb-12 text-center w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What You'll Experience
            {/* Horizontal flare line under headline */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-48 md:w-64 h-0.5 bg-linear-to-r from-transparent via-[#0044cc] to-transparent shadow-[0_0_20px_rgba(0,68,204,0.9)] opacity-90" />
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whatYouGet.map((w, i) => {
              const IconComp = w.icon;
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="bg-[#0a0c10] border border-[#0044cc]/20 p-4 md:p-6 rounded-xl flex gap-5 transition-all duration-300 relative group overflow-hidden shadow-[0_0_15px_rgba(0,68,204,0.05)] hover:shadow-[0_0_30px_rgba(0,68,204,0.2)] hover:border-[#0044cc]/50"
                >
                  {/* Decorative glowing gradient border on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,68,204,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Vertical left glowing line */}
                  <div className="w-0.5 rounded-full shrink-0 bg-linear-to-b from-[#0044cc] to-[#0044cc]/20 shadow-[0_0_15px_rgba(0,68,204,0.8)]" />
                  
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#0044cc]/10 border border-[#0044cc]/30 flex items-center justify-center text-[#0044cc] shrink-0 shadow-[0_0_10px_rgba(0,68,204,0.2)] group-hover:shadow-[0_0_15px_rgba(0,68,204,0.5)]">
                        <IconComp size={14} className="drop-shadow-[0_0_5px_rgba(0,68,204,0.5)]" />
                      </div>
                      <h4 className="font-serif text-white font-bold text-lg md:text-xl tracking-tight drop-shadow-md">{w.heading}</h4>
                    </div>
                    <p className="text-gray-400 text-xs md:text-[14px] leading-relaxed font-sans">{w.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
