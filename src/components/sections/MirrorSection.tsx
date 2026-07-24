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
      <div className="absolute top-0 left-0 w-full h-[150%] z-0 bg-[radial-gradient(ellipse_at_left_center,rgba(0,128,199,0.25)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-4">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
            THE MIRROR
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight mb-4 text-white">
            This is the part where<br />
            <span className="relative inline-block text-[#0080C7] drop-shadow-[0_0_15px_rgba(0,128,199,0.6)]">
              we get honest.
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-48 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span>
          </h2>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mx-auto">
            If any of these feel uncomfortably familiar, you're exactly who this program was built for.
          </p>
        </div>

        {/* Pain Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((p, i) => (
            <div key={i} className="group relative bg-[#0a0c10] border border-[#0080C7]/20 shadow-[0_0_20px_rgba(0,128,199,0.08)] transition-all duration-300 ease-out hover:bg-[#0f141a] hover:border-[#0080C7]/50 hover:shadow-[0_0_30px_rgba(0,128,199,0.2)] p-7 rounded-2xl">
              {/* Glow gradient leaking from under the card */}
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-[#0080C7]/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              {/* Radial spotlight inside the card */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,128,199,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6 w-14 h-14 rounded-full bg-[#0080C7]/10 border border-[#0080C7]/30 shadow-[0_0_15px_rgba(0,128,199,0.15)] flex items-center justify-center text-[#0080C7] group-hover:bg-[#0080C7]/20 group-hover:border-[#0080C7]/60 group-hover:shadow-[0_0_25px_rgba(0,128,199,0.3)] transition-all duration-300">
                    <p.icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-3 leading-snug transition-colors duration-300 group-hover:text-[#0080C7]">
                    {p.title}
                  </h3>
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

