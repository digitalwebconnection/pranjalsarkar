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
    <section id="program" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 ">
      {/* Background atmospheric glows */}
      <div className="absolute top-1/4 left-1/10 w-[380px] h-[380px] rounded-full bg-[#D4A853]/[0.015] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[420px] h-[420px] rounded-full bg-[#D4A853]/[0.015] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A853]/8 border border-[#D4A853]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#D4A853] mb-6 mx-auto">
            Program Introduction
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-5xl leading-[1.2] tracking-tight text-white mb-6">
            AI Product Leadership Studio
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-6xl mx-auto">
            A highly selective, live cohort for senior PMs, EMs, and growth leads transitioning to Director and Head of Product roles. This isn't a course. It's a crucible.
          </p>
        </motion.div>

        {/* Details Grid (Premium clean grid layout) */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6"
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
                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(212,168,83,0.3)' }}
                className="p-5 bg-white/10 border border-white/20 rounded-lg flex flex-col gap-3 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4A853]/90 flex items-center justify-center text-white">
                  <IconComponent size={16} />
                </div>
                <div>
                  <span className="block text-white/90 text-[9px] font-bold uppercase tracking-wider mb-1">{d.label}</span>
                  <span className="font-sans text-white text-xs md:text-sm font-semibold tracking-tight leading-tight">{d.value}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What You Get Grid */}
        <div className="">
          <motion.h3 
            className="font-serif text-2xl font-bold text-white mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What You Get Inside the Studio
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
                  whileHover={{ 
                    y: -6, 
                    backgroundColor: 'rgba(255,255,255,0.03)', 
                    borderColor: 'rgba(212,168,83,0.4)',
                    boxShadow: '0 10px 30px -10px rgba(212,168,83,0.1)'
                  }}
                  className="bg-white/[0.01] border border-white/[0.06] p-6 rounded-xl flex gap-4 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Decorative glowing gradient border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#D4A853]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Vertical left gold line */}
                  <div className="w-1 rounded-full shrink-0 bg-gradient-to-b from-[#D4A853] to-[#D4A853]/20" />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[#D4A853]"><IconComp size={16} /></span>
                      <h4 className="font-sans text-white font-extrabold text-[14px] md:text-base tracking-tight">{w.heading}</h4>
                    </div>
                    <p className="text-white/60 text-xs md:text-[13px] leading-relaxed font-sans">{w.desc}</p>
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
