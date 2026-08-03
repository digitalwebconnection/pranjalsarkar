import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import youtubeVideo from '../../assets/video/youtube.mp4';
import { 
  Users, 
  BrainCircuit,
  Gavel,
  Mountain,
  Play
} from 'lucide-react';

const leadershipSteps = [
  { icon: BrainCircuit, label: 'THINK' },
  { icon: Gavel, label: 'DECIDE' },
  { icon: Users, label: 'AUGMENT' },
  { icon: Mountain, label: 'LEAD' },
];



const leadershipDetails = [
  {
    title: "Product Leadership Decision Principles",
    whatIsIt: "Think with 50+ Product Leadership Decision Principles drawn from real executive situations, covering strategy, business trade-offs, AI leadership, organizational decisions and executive influence.",
    howItWorks: "Decision principle is delivered as pre-work before each simulation weekend. You understand it before you face the situation, then experience why it matters when the consequences land.",
    transformation: "You stop making decisions based on instinct or incomplete thinking and start arriving at difficult situations already prepared."
  },
  {
    title: "Realistic Executive Simulation",
    whatIsIt: "Decide under pressure inside a persistent business environment where you lead an operating company through 10 business crises, make executive decisions, face the consequences and discover where your judgment needs to improve before the stakes become real.",
    howItWorks: "Every simulation puts you inside an unfolding business situation. You study the company communications, diagnose what is happening, identify where the real risk sits, choose your decision and execution strategy. Week after week, the company you are running carries the weight of every choice you made before.",
    transformation: "You develop the judgment to recognize what really matters in complex situations, make difficult trade-offs and anticipate how your decisions will affect the wider organization."
  },
  {
    title: "AI Automation Workshops",
    whatIsIt: "Augment your leadership work through Agentic AI by building tools that reduce the effort around research, analysis and preparation, giving you more time for judgment, direction and the decisions that need human leadership.",
    howItWorks: "After each week you identify the thinking gap you just experienced and build an AI tool that addresses it directly. By the end of the session, you have a working system connected to a real leadership problem.",
    transformation: "You become a product leader who knows how to redesign work around AI. You learn to identify where agents create real leverage, what must remain human-led and how to build AI into the way product decisions get made."
  },
  {
    title: "Real Leadership Exposure",
    whatIsIt: "Lead through a real company challenge during a 30-day assignment where a product company gives you a strategic business problem to investigate and solve independently, the way you would be expected to approach it in a leadership role.",
    howItWorks: "After Week 5 you are placed with a partner company. Each participant independently investigates the problem, builds a strategy and presents recommendations to the company's leadership while defending every decision in front of people with real stakes in the outcome.",
    transformation: "Everything you built inside the 5-weeks studio gets tested against a real organization with real complexity to find out how ready you actually are."
  }
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

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
          <h2 className="font-serif font-bold text-2xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white mb-8">
            AI Product  <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              Leadership Structure
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span> 
          </h2>
          <div className="text-gray-300 text-sm md:text-[13px] lg:text-[15px] leading-5 font-sans space-y-2">
           AIPLS develops Product Leadership through four connected layers:
          </div>
        </motion.div>

        {/* Leadership Steps Timeline */}
        <div className="relative max-w-6xl mx-auto mb-24 mt-16 px-4">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-4 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Horizontal Line for Desktop */}
            <div className="absolute top-[3rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block -z-10" />
            <motion.div 
              className="absolute top-[3rem] left-[10%] h-0.5 bg-gradient-to-r from-[#00a8ff] to-[#0044cc] hidden md:block -z-10 shadow-[0_0_15px_rgba(0,168,255,0.6)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            {leadershipSteps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="flex flex-col items-center group w-full md:w-1/4 relative"
                >
                  {/* Vertical Line for Mobile */}
                  {i < leadershipSteps.length - 1 && (
                    <div className="absolute top-[6rem] left-1/2 w-0.5 h-20 bg-gradient-to-b from-[#00a8ff]/50 to-transparent -translate-x-1/2 md:hidden -z-10" />
                  )}

                  {/* Icon Node Container */}
                  <div className="relative mb-6 cursor-default">
                    {/* Glowing background on hover */}
                    <div className="absolute inset-0 bg-[#00a8ff]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-125" />
                    
                    <div className="w-24 h-24 rounded-2xl bg-[#060a14] border border-white/10 group-hover:border-[#00a8ff]/50 flex items-center justify-center relative z-10 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(0,168,255,0.2)]">
                      <IconComponent 
                        size={36} 
                        strokeWidth={1.5}
                        className="text-white/60 group-hover:text-[#00a8ff] transition-colors duration-300 drop-shadow-md"
                      />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className="text-center px-4 cursor-default">
                    <h4 className="font-sans text-xl md:text-2xl font-black text-white tracking-[0.15em] uppercase mb-2 group-hover:text-[#00a8ff] transition-colors duration-300 drop-shadow-md">
                      {step.label}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Leadership Details Section */}
        <div className="max-w-7xl mx-auto px-4 mb-32 relative z-10 space-y-8">
          {leadershipDetails.map((detail, index) => (
            <motion.div 
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#060a14]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,102,255,0.05)] hover:shadow-[0_0_50px_rgba(0,168,255,0.12)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,255,0.08),transparent_70%)] pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
              
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#0044cc] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(0,102,255,0.5)] border-2 border-[#060a14]">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wide group-hover:text-[#00a8ff] transition-colors duration-300">
                    {detail.title}
                  </h3>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                  <h4 className="text-[#00a8ff] font-sans font-bold text-xs md:text-sm tracking-widest uppercase">What is it?</h4>
                  <p className="text-gray-300 text-[15px] leading-relaxed font-sans">{detail.whatIsIt}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                  <h4 className="text-[#00a8ff] font-sans font-bold text-xs md:text-sm tracking-widest uppercase">How does it work?</h4>
                  <p className="text-gray-300 text-[15px] leading-relaxed font-sans">{detail.howItWorks}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                  <h4 className="text-[#00a8ff] font-sans font-bold text-xs md:text-sm tracking-widest uppercase">What transformation does it bring?</h4>
                  <p className="text-gray-300 text-[15px] leading-relaxed font-sans">{detail.transformation}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Block */}
        <motion.div 
          className="max-w-7xl mx-auto mt-24 px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <div className="max-w-full mx-auto flex flex-col items-center mt-12 md:mt-20 h-[300px] md:h-[500px] lg:h-[700px]">
            {/* Video Placeholder */}
            <div 
                className="w-full aspect-video rounded-xl bg-[#0a0e17] border border-white/10 shadow-[0_0_40px_rgba(24,37,226,0.15)] relative overflow-hidden flex items-center justify-center group cursor-pointer mb-12"
                onClick={toggleVideo}
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,168,255,0.05)_0%,transparent_70%)] pointer-events-none z-10" />
                
                <video 
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                    src={youtubeVideo} 
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    controls={isVideoPlaying}
                />

                {!isVideoPlaying && (
                    <>
                        {/* Play Button Glow */}
                        <div className="absolute w-24 h-24 bg-[#0080C7]/30 blur-[30px] rounded-full group-hover:bg-[#0080C7]/50 transition-all duration-500 z-20 pointer-events-none" />
                        
                        {/* Play Button */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                           <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1.5 opacity-90 group-hover:opacity-100" fill="currentColor" />
                        </div>
                    </>
                )}
            </div>
          </div>
        </motion.div>      </div>
    </section>
  );
}
