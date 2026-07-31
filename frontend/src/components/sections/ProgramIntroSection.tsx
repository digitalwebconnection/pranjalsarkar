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
    desc: 'Build the mental models, frameworks and operating principles behind Product Leadership.' 
  },
  { 
    icon: Compass, 
    heading: 'Executive Decision Simulations', 
    desc: "Step into realistic business situations where you'll evaluate incomplete information, balance competing priorities and make executive-level product decisions." 
  },
  { 
    icon: Users, 
    heading: 'Executive Team Collaboration', 
    desc: 'Work alongside experienced Product Managers, debate strategic options, challenge assumptions and defend your recommendations under pressure.' 
  },
  { 
    icon: Award, 
    heading: 'AI Executive Conversations', 
    desc: 'Practice difficult leadership conversations with AI executives who challenge your reasoning, expose weak assumptions and help strengthen your judgment.' 
  },
  { 
    icon: CheckCircle, 
    heading: 'AI Leadership Agent', 
    desc: 'Design one practical AI leadership tool every week that improves how you analyse problems, prepare recommendations and make decisions in your day-to-day work.' 
  },
  { 
    icon: Shield, 
    heading: 'Product Leadership Exposure', 
    desc: "Apply everything you've learned by solving a real product leadership challenge with a real company alongside business leaders." 
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
    <section id="program" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-[60%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,128,199,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[70%] h-[70%] z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,128,199,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-6 max-w-6xl mx-auto"
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
          <div className="text-gray-300 text-sm md:text-[13px] lg:text-[15px] leading-5 font-sans space-y-2">
            <p>
              AI Product Leadership Studio is an immersive executive learning experience designed for experienced Product Managers who want to transition into Product Leadership roles.
            </p>
            <p>
              It is built around a belief that: Product Leadership cannot be learned by watching lectures. It is developed by making difficult decisions, defending them, understanding business trade-offs, leading AI initiatives, influencing executives and solving problems that resemble the job itself.
            </p>
            <p>
              That is why this Studio goes beyond lectures, frameworks and traditional cohorts. Every week places you inside realistic leadership situations that closely resemble the role you are preparing for.
            </p>
          </div>
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
                className={`relative p-px rounded-xl transition-all duration-300 group overflow-hidden ${
                  i === 0 
                    ? "bg-linear-to-br from-[#0066ff] via-[#0044cc]/30 to-transparent shadow-[-35px_0_80px_-10px_rgba(0,102,255,0.9)]" 
                    : "bg-linear-to-br from-white/10 to-transparent hover:from-[#0044cc]/70 hover:shadow-[0_0_30px_rgba(0,168,255,0.2)]"
                }`}
              >
                <div className="h-full w-full bg-[#03060a] rounded-[11px] p-5 flex flex-col gap-4 relative z-10 overflow-hidden">
                  {/* Inner one-sided glow for the first card */}
                  {i === 0 && (
                    <div className="absolute top-0 left-0 w-48 h-full bg-[radial-gradient(ellipse_at_left,rgba(0,102,255,0.2),transparent_70%)] pointer-events-none -z-10" />
                  )}
                  
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-shadow relative z-10 ${
                    i === 0 
                      ? "bg-[#00a8ff]/20 border border-[#00a8ff]/60 text-[#00a8ff] shadow-[0_0_25px_rgba(0,168,255,0.5)] group-hover:shadow-[0_0_40px_rgba(0,168,255,0.8)]"
                      : "bg-[#0044cc]/15 border border-[#0044cc]/50 text-[#00a8ff] shadow-[0_0_15px_rgba(0,168,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,168,255,0.5)]"
                  }`}>
                    <IconComponent size={18} className="drop-shadow-[0_0_8px_rgba(0,168,255,0.9)]" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1.5">{d.label}</span>
                    <span className="font-serif text-white text-sm md:text-base font-bold tracking-tight leading-tight group-hover:text-[#00a8ff] transition-colors mb-4">{d.value}</span>
                    <div className={`mt-auto w-12 h-0.5 opacity-80 ${
                      i === 0 
                        ? "bg-linear-to-r from-[#00a8ff] to-transparent shadow-[0_0_8px_rgba(0,168,255,0.9)]" 
                        : "bg-linear-to-r from-[#0044cc] to-transparent shadow-[0_0_8px_rgba(0,68,204,0.9)]"
                    }`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-20">
          <motion.div 
            className="text-center mb-6 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="relative inline-block font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              The Studio Experience
              {/* Horizontal flare line under headline */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0066ff] to-transparent shadow-[0_0_20px_rgba(0,168,255,0.9)] opacity-90" />
            </h3>
            <p className="text-gray-100 text-sm md:text-[16px] leading-relaxed font-sans mt-4">
              Every week places you inside situations that Product Directors face every day that enable you to develop one leadership capability that immediately changes how you think, make decisions and operate at work. By the end of five weeks, those capabilities come together to help you operate like a Product Director overall.
            </p>
          </motion.div>

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
                  className="bg-[#060a14] border border-white/5 border-t-[#0066ff]/80 p-4 md:p-6 rounded-xl flex gap-5 transition-all duration-300 relative group overflow-hidden shadow-[0_0_90px_rgba(0,168,255,0.1)] "
                >
                  {/* Decorative glowing gradient border */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,255,0.15),transparent_70%)] opacity-100 pointer-events-none" />
                  
                  {/* Intense Vertical left glowing line */}
                  <div className="w-1 rounded-full shrink-0 bg-linear-to-b from-[#0066ff] via-[#002ec7]/80 to-[#0044cc]/10 shadow-[0_0_30px_rgba(0,168,255,1)]" />
                  
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#00a8ff]/30 border border-[#00a8ff]/50 flex items-center justify-center text-[#00a8ff] shrink-0 shadow-[0_0_30px_rgba(0,168,255,0.8)] transition-all">
                        <IconComp size={14} className="drop-shadow-[0_0_10px_rgba(0,168,255,1)]" />
                      </div>
                      <h4 className="font-serif text-white font-bold text-lg md:text-xl tracking-tight drop-shadow-[0_0_8px_rgba(0,168,255,0.4)]">{w.heading}</h4>
                    </div>
                    <p className="text-gray-200 text-sm md:text-[15px] leading-relaxed font-sans">{w.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p 
            className="text-center text-[#00a8ff] font-serif font-bold text-lg md:text-xl drop-shadow-[0_0_15px_rgba(0,168,255,0.9)] max-w-5xl mx-auto mt-7 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Every week combines these experiences so that learning becomes judgment, and knowledge becomes leadership capability.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
