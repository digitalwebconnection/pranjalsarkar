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
    <section id="mirror" className="relative py-8 md:py-10 overflow-hidden border-b border-white/8 ">
      <div className="max-w-7xl mx-auto px-6 md:px-4">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6">
           
            The Mirror
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight mb-3 text-white">
            This is the part where<br />
            <span className="text-[#0080C7]">we get honest.</span>
          </h2>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mx-auto">
            If any of these feel uncomfortably familiar, you're exactly who this program was built for.
          </p>
        </div>

        {/* Pain Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((p, i) => (
            <div key={i} className="group relative bg-[#121212] border border-white/8 transition-all duration-300 ease-out hover:bg-[#141414] hover:border-[#0080C7]/40 hover:-translate-y-0.5 p-6 rounded-lg">
              {/* Glow gradient leaking from under the card */}
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-[#0080C7]/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              {/* Radial spotlight inside the card */}
              <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_0%,rgba(0,128,199,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-4 text-[#0080C7] group-hover:text-white transition-colors duration-300">
                    <p.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2.5 leading-snug transition-colors duration-300 group-hover:text-[#0080C7]">
                    {p.title}
                  </h3>
                  <p className="text-[#c3c6cc] text-[14px] leading-relaxed transition-colors duration-300 group-hover:text-white">
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

