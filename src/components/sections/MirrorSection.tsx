import { Layers, RefreshCw, Bot, Lock } from 'lucide-react';
 
const painPoints = [
  {
    icon: Layers,
    title: 'You ship features, not decisions.',
    body: "You're the go-to PM everyone respects — but your name isn't in the room when the real business calls get made.",
  },
  {
    icon: RefreshCw,
    title: "You're stuck in execution mode.",
    body: 'Every quarter you deliver. But "strategic" is a word your leadership uses about others, not you.',
  },
  {
    icon: Bot,
    title: 'AI makes it worse, not better.',
    body: "Tools have never been faster. But judgment is more scarce than ever. And no one's teaching that.",
  },
  {
    icon: Lock,
    title: 'The Director door stays closed.',
    body: "You've been \"almost ready\" for a year. There's always one more thing to prove. You wonder if that promotion will ever come.",
  },
];
 
export default function MirrorSection() {
  return (
    <section id="mirror" className="relative py-12 md:py-20 overflow-hidden border-b border-white/8 ">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-0 w-full h-[150%] z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[80%] md:w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.5)_0%,rgba(30,64,175,0.3)_30%,transparent_70%)] blur-[80px]" />
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.2)_0%,transparent_50%)] blur-[60px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-4">
 
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[12px] font-bold tracking-widest uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
            THE MIRROR
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight mb-4 text-white">
            This is the part where<br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              we get honest.
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-48 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span>
          </h2>
 
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mx-auto">
            If any of these feel uncomfortably familiar, you're exactly who this program was built for.
          </p>
        </div>
 
        {/* Pain Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((p, i) => (
            <div key={i} className="group relative rounded-2xl p-px bg-linear-to-br from-[#00a8ff]/90 via-white/10 to-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(0,128,199,0.15)] hover:via-white/20 hover:to-white/20 flex flex-col">
              <div className="relative h-full bg-[#060a14] group-hover:bg-[#0a0f1c] rounded-[15px] p-7 md:p-8 flex flex-col overflow-hidden transition-colors duration-300">
                {/* Radial spotlight inside the card */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(0,128,199,0.08),transparent_70%)] pointer-events-none" />
 
                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 w-12 h-12 rounded-full bg-[#0080C7]/5 border border-[#0080C7]/40 shadow-[0_0_15px_rgba(0,128,199,0.1)] flex items-center justify-center text-[#00a8ff] group-hover:bg-[#0080C7]/10 group-hover:border-[#0080C7]/70 group-hover:shadow-[0_0_20px_rgba(0,128,199,0.3)] transition-all duration-300">
                    <p.icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="font-serif text-[22px] font-bold text-white mb-4 leading-snug tracking-tight">
                    {p.title}
                  </h3>
                  {/* Short blue line separator */}
                  <div className="w-8 h-0.5 bg-[#0080C7] mb-5 opacity-90 transition-all duration-300 group-hover:w-12 group-hover:bg-[#00a8ff]" />
                  <p className="text-gray-400 text-[14px] leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}