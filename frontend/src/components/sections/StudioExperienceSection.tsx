import { motion } from 'motion/react';
import { whatYouGet } from '../../constants/studioExperienceData';

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

export default function StudioExperienceSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-[60%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,128,199,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[70%] h-[70%] z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,128,199,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mt-10 md:mt-0">
          <motion.div 
            className="text-center mb-10 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="relative inline-block font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              The Studio Experience
              {/* Horizontal flare line under headline */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0066ff] to-transparent shadow-[0_0_20px_rgba(0,168,255,0.9)] opacity-90" />
            </h3>
            <p className="text-gray-100 text-sm md:text-[16px] leading-relaxed font-sans mt-8">
              Every week places you inside situations that Product Directors face every day that enable you to develop one leadership capability that immediately changes how you think, make decisions and operate at work. By the end of five weeks, those capabilities come together to help you operate like a Product Director overall.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-7xl mx-auto"
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
                  className="bg-[#060a14] h-full border border-white/5 border-t-[#0066ff]/80 p-6 md:p-8 rounded-xl flex gap-5 md:gap-6 transition-all duration-300 relative group overflow-hidden shadow-[0_0_90px_rgba(0,168,255,0.1)] hover:shadow-[0_0_90px_rgba(0,168,255,0.2)]"
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
                      <h4 className="font-serif text-white font-bold text-lg md:text-3xl tracking-tight drop-shadow-[0_0_8px_rgba(0,168,255,0.4)]">{w.heading}</h4>
                    </div>
                    <p className="text-gray-400 text-sm md:text-[20px] leading-relaxed font-sans">{w.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p 
            className="text-center text-[#00a8ff] font-serif font-bold text-lg md:text-xl drop-shadow-[0_0_15px_rgba(0,168,255,0.9)] max-w-5xl mx-auto mt-10 leading-relaxed"
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
