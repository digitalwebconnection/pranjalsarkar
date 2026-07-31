import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import psHeadshot from '../../assets/pranjalsarkar/19.webp';
import youtubeVideo from '../../assets/video/youtube.mp4';
import { Users, Globe, RocketIcon, Play } from 'lucide-react';

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

  const observations = [
    { lead: "PMs would come to him", text: "asking what they needed to do for management to consider them for a leadership role. Nobody at their company could give them a straight answer." },
    { lead: "PMs would come frustrated", text: "with same work, same title and same feedback year after year." },
    { lead: "PMs would switch companies", text: "thinking a new environment would finally give them the leadership opportunity, but they would land in another Senior PM role." },
    { lead: "PMs would take on extra responsibilities", text: "lead community events, volunteer for visibility projects and do everything they thought leadership looked like. But the decision makers remained neutral." },
    { lead: "PMs would work harder", text: "than everyone around them and they would get recognized and rewarded with more work and the same title." },
  ];
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
        <motion.div className="flex flex-col text-center justify-center mb-12" variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)] self-center">
            ABOUT PRANJAL
          </span>
          <div className="relative inline-block self-center pb-4">
            <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white">
              Why This Studio{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
                Exists?
              </span>
            </h2>
            {/* Horizontal flare line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 md:w-96 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
          </div>
        </motion.div>

        {/* The Real Reason - Simple Clean Rows */}
        <motion.div className="max-w-7xl mx-auto mb-32 px-4" variants={itemVariants}>

          <div className="text-center mb-16">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-sans max-w-5xl mx-auto">
              After hundreds of conversations with experienced Product Managers, one pattern kept repeating. Different companies. Different industries. Different levels of experience. <strong className="text-white font-semibold block mt-2">But almost the same story every time.</strong>
            </p>
          </div>

          <div className="relative flex flex-col space-y-10 md:space-y-14 mb-20 max-w-7xl mx-auto pl-4 md:pl-0">
            {/* Ambient Background Glow - Increased intensity to make it visible */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.25)_0%,transparent_60%)] pointer-events-none blur-xl" />

            {observations.map((item, idx) => (
              <div key={idx} className="flex flex-col relative z-10 cursor-default pl-5 pb-4">

                {/* Left and Bottom glowing gradient lines (L-shape) - STATIC */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-linear-to-b from-transparent via-[#0080C7] to-[#0080C7] opacity-100 shadow-[0_0_12px_rgba(0,128,199,0.9)]" />
                <div className="absolute left-0 bottom-0 w-full md:w-2/3 h-[2px] bg-linear-to-r from-[#0080C7] via-[#0080C7]/50 to-transparent opacity-100 shadow-[0_0_12px_rgba(0,128,199,0.9)]" />

                <div className="text-[#0080C7] font-mono text-lg font-bold mb-1 drop-shadow-[0_0_25px_rgba(0,128,199,1)] translate-x-1">
                  0{idx + 1}.
                </div>
                <h4 className="text-[#00a8ff] font-bold text-[16px] md:text-lg mb-1 drop-shadow-[0_0_20px_rgba(0,128,199,0.9)]">
                  {item.lead}
                </h4>
                <p className="text-gray-200 text-[15px] md:text-[17px] leading-relaxed relative">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* The final realization */}
          {/* The final realization */}
          <div className="bg-[#0a0c10] border border-white/10 p-4 md:p-6 rounded-sm text-center shadow-[0_0_50px_rgba(0,128,199,0.3)] relative overflow-hidden group hover:shadow-[0_0_60px_rgba(0,128,199,0.5)] transition-shadow duration-500">
            {/* Inner background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,128,199,0.2)_0%,transparent_80%)] pointer-events-none" />

            {/* Glowing top line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-[#00a8ff] to-transparent shadow-[0_0_15px_rgba(0,168,255,0.9)] opacity-80" />

            <p className="text-[15px] md:text-lg lg:text-lg leading-relaxed font-serif text-gray-300 relative z-10 drop-shadow-sm">
              <span className="text-white font-bold">Eventually, one realization became impossible to ignore.</span> Most Product Managers are taught how to build products. Very few are taught how Product Directors think, make business decisions, lead organizations or influence executives. Companies expect those capabilities before promotion, but rarely teach them intentionally. <br /><br />
              <span className="text-[#0080C7] font-bold text-lg md:text-lg lg:text-xl tracking-tight drop-shadow-[0_0_10px_rgba(0,128,199,0.8)]">That gap is what this program exists to close.</span>
            </p>
          </div>
        </motion.div>

        {/* Two Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column (Desktop): Premium Image Card with Floating Animation */}
          <motion.div
            className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 relative"
            variants={itemVariants}
            {...floatAnimation}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 shadow-[0_0_40px_rgba(0,128,199,0.15)] hover:shadow-[0_0_50px_rgba(0,128,199,0.3)] group">
              <div className="relative aspect-4/5 w-full bg-[#0a0c10]">
                {/* Visual shadow mask overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

                <img
                  src={psHeadshot}
                  alt="Pranjal Sarkar"
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                />

                {/* Live Mentor Indicator Pill */}
                <div className="absolute top-5 left-5 z-20 px-3 py-1.5 bg-[#0a0c10]/80 backdrop-blur-md border border-[#0080C7]/50 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,128,199,0.3)] group-hover:shadow-[0_0_25px_rgba(0,128,199,0.5)] transition-shadow">
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">ACTIVE INSTRUCTOR</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Desktop): Metrics & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-4 lg:pl-6">

            {/* Biography Narratives */}
            <motion.div variants={itemVariants} className="mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_10px_rgba(0,128,199,0.1)]">
                WHO IS PRANJAL?
              </span>
              <p className="text-gray-300 text-sm md:text-[15px] lg:text-[16px] leading-8 mb-6 font-sans">
                Pranjal has spent 20 years inside product industry. Three startups were built from zero. Almost a decade with <strong className="text-white font-medium">Tatas</strong> where he led nationally scaled value-added products for Indian Education System. Built and launched dozens of products in Retail Supply Chain, Edtech and Security domains while owning full P&L of most. And currently leading product strategy and GTM for a <strong className="text-white font-medium">$800 million global security portfolio at IBM.</strong>
              </p>
              <p className="text-gray-300 text-sm md:text-[15px] lg:text-[16px] leading-8 font-sans">
                He has built products from zero and scaled them across geographies. He has worked closely with board members and had owned the results when things did not go as planned. Building from zero in startups, scaling nationally with Tata, and defending portfolio strategy at IBM global level gave him a perspective that no single environment could.
              </p>
            </motion.div>

            {/* Quick Metrics Row */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4" variants={itemVariants}>
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="bg-[#0a0c10] border border-white/5 rounded-lg p-5 flex flex-col items-start text-left relative overflow-hidden group shadow-[0_15px_30px_-10px_rgba(0,128,199,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,128,199,0.4)]">
                    {/* Left edge vertical gradient line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#00a8ff] via-[#0080C7] to-transparent" />

                    <div className="relative mb-4 text-[#0080C7] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={30} strokeWidth={1.5} />
                    </div>

                    <div className="relative text-xl md:text-2xl font-serif font-bold text-[#0080C7] mb-1.5">
                      {s.value}
                    </div>
                    <div className="relative text-[10px] text-white/50 uppercase tracking-[0.2em] font-semibold">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>

        {/* Teaching Proof Section - Premium Redesign */}
        <motion.div 
          className="max-w-7xl mx-auto mt-24 mb-20 px-6 md:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          {/* Main Container */}
          <div className="relative w-full rounded-xl bg-[#05070a] border border-[#0080C7]/20 overflow-hidden p-8 md:p-12 lg:p-8 shadow-[0_0_50px_rgba(0,128,199,0.15)] hover:shadow-[0_0_80px_rgba(0,128,199,0.3)] transition-shadow duration-700 group">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0080C7]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 transition-all duration-1000 group-hover:bg-[#0080C7]/20" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00a8ff]/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <svg className="w-8 h-8 text-[#0080C7]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <h3 className="text-md md:text-lg lg:text-xl font-serif text-white leading-snug mb-8">
                  The Studio reflects lessons learned across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0080C7] to-[#00a8ff] drop-shadow-[0_0_15px_rgba(0,128,199,0.4)]">two decades of building products</span>, leading teams and making product decisions in environments ranging from startups to global enterprises.
                </h3>
                
                <div className="pl-6 border-l-2 border-[#0080C7]/40 relative">
                  <p className="text-gray-400 text-base md:text-md leading-relaxed font-sans">
                    What he teaches in this program is not borrowed from books or other curricula. It comes directly from two decades of product decisions made with <strong className="text-white font-medium">real money, real teams, and real consequences</strong>.
                  </p>
                </div>
              </div>

              {/* Right Column: Teaching Proof Card */}
              <div className="lg:col-span-5 relative">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-[#0080C7]/20 blur-[40px] rounded-xl group-hover:bg-[#0080C7]/30 transition-all duration-700" />
                
                <div className="relative h-full bg-[#0a0e17]/80 backdrop-blur-xl border border-[#0080C7]/20 rounded-xl p-4 md:p-6 shadow-[0_0_40px_rgba(0,128,199,0.15)] hover:border-[#0080C7]/40 transition-colors duration-500 overflow-hidden">
                  
                  {/* Inner top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent opacity-50" />
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    Hundreds of product professionals mentored across <strong className="text-white">10 countries</strong>. Engineers, consultants, and experienced PMs now leading product at:
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {['Amazon', 'IBM', 'JP Morgan', 'Tata', 'PwC'].map(company => (
                      <span key={company} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm font-semibold text-white/90 hover:bg-[#0080C7]/20 hover:border-[#0080C7]/50 hover:text-[#00a8ff] transition-all cursor-default shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>

        {/* Origin Story Video Block - Independently animated */}
        {/* Origin Story Video Block - Independently animated */}
        <motion.div 
          className="max-w-7xl mx-auto mt-24 px-6 md:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <div className="text-center mb-10 relative">
            <h3 className="text-white font-serif font-bold text-2xl md:text-4xl mb-4">
              The Exact Moment I Decided <br className="hidden md:block" />
              <span className="text-[#0080C7] drop-shadow-[0_0_15px_rgba(0,128,199,0.5)]">This Program Needed to Exist</span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg mb-8">A message from the founder</p>
            {/* Highlight Line */}
            <div className="w-64 md:w-96 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_15px_rgba(0,128,199,0.8)]"></div>
          </div>

          <div className="max-w-full mx-auto flex flex-col items-center mt-12 md:mt-20 h-150 ">
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
        </motion.div>
    </section>
  );
}
