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
  { icon: Calendar, label: 'Format', value: 'Live cohort — 12 weeks' },
  { icon: Users, label: 'Cohort Size', value: 'Max 20 participants' },
  { icon: Clock, label: 'Time Commitment', value: '4–6 hrs/week' },
  { icon: Globe, label: 'Mode', value: 'Online, India & SEA' },
  { icon: Target, label: 'Ideal For', value: 'Senior PM, EM, Growth Lead' },
  { icon: TrendingUp, label: 'Outcome', value: 'Director/Head of Product' },
];

const whatYouGet = [
  { 
    icon: Sparkles, 
    heading: 'Live Weekly Sessions', 
    desc: '90-minute sessions with Pranjal — not pre-recorded content. Real dialogue. Real pressure.' 
  },
  { 
    icon: Compass, 
    heading: 'Director Sim Scenarios', 
    desc: 'Weekly "Director in the Room" simulations that put you in ambiguous, high-stakes product decisions.' 
  },
  { 
    icon: Users, 
    heading: 'Peer Calibration Circles', 
    desc: 'Small-group sessions with 4–5 peers for feedback, challenge, and cross-company perspective.' 
  },
  { 
    icon: Award, 
    heading: '1:1 Coaching Call', 
    desc: 'A dedicated 45-minute session to map your specific promotion narrative and blockers.' 
  },
  { 
    icon: CheckCircle, 
    heading: 'AI Judgment Toolkit', 
    desc: 'Frameworks and mental models for deciding with AI as a collaborator — not a crutch.' 
  },
  { 
    icon: Shield, 
    heading: 'Lifetime Alumni Network', 
    desc: "Access to a growing network of product leaders across India's top tech companies." 
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
            <span className="relative inline-block text-[#0080C7] drop-shadow-[0_0_15px_rgba(0,128,199,0.6)]">
              Leadership Studio
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span> 
          </h2>
          <p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 font-sans">
            A highly selective, live cohort for senior PMs, EMs, and growth leads transitioning to Director and Head of Product roles. This isn't a course. It's a <span className="text-[#0080C7] font-bold drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]">crucible</span>.
          </p>
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
                className="p-5 bg-[#0a0c10] border border-[#0080C7]/40 rounded-xl flex flex-col gap-4 transition-all duration-300 shadow-[0_0_20px_rgba(0,128,199,0.15)] hover:shadow-[0_0_40px_rgba(0,128,199,0.4)] hover:border-[#0080C7]/70 group relative overflow-hidden"
              >
                {/* Subtle inner top flare */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7]/70 to-transparent shadow-[0_0_10px_rgba(0,128,199,0.8)] opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,128,199,0.2),transparent_70%)] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

                <div className="w-10 h-10 rounded-lg bg-[#0080C7]/10 border border-[#0080C7]/50 flex items-center justify-center text-[#0080C7] shadow-[0_0_15px_rgba(0,128,199,0.3)] group-hover:shadow-[0_0_25px_rgba(0,128,199,0.6)] transition-shadow">
                  <IconComponent size={18} className="drop-shadow-[0_0_8px_rgba(0,128,199,0.8)]" />
                </div>
                <div>
                  <span className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5">{d.label}</span>
                  <span className="font-serif text-white text-sm md:text-base font-bold tracking-tight leading-tight group-hover:text-[#0080C7] transition-colors">{d.value}</span>
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
            What You Get Inside the Studio
            {/* Horizontal flare line under headline */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-48 md:w-64 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
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
                  className="bg-[#0a0c10] border border-[#0080C7]/20 p-6 md:p-8 rounded-xl flex gap-5 transition-all duration-300 relative group overflow-hidden shadow-[0_0_15px_rgba(0,128,199,0.05)] hover:shadow-[0_0_30px_rgba(0,128,199,0.2)] hover:border-[#0080C7]/50"
                >
                  {/* Decorative glowing gradient border on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Vertical left glowing line */}
                  <div className="w-1.5 rounded-full shrink-0 bg-gradient-to-b from-[#0080C7] to-[#0080C7]/20 shadow-[0_0_15px_rgba(0,128,199,0.8)]" />
                  
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#0080C7]/10 border border-[#0080C7]/30 flex items-center justify-center text-[#0080C7] shrink-0 shadow-[0_0_10px_rgba(0,128,199,0.2)] group-hover:shadow-[0_0_15px_rgba(0,128,199,0.5)]">
                        <IconComp size={14} className="drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]" />
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
