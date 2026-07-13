import featImg from '../assets/mirror_features.png';
import execImg from '../assets/mirror_execution.png';
import aiImg from '../assets/mirror_ai.png';
import dirImg from '../assets/mirror_director.png';

const painPoints = [
  {
    icon: '🪞',
    title: 'You ship features, not decisions.',
    body: "You're the go-to PM everyone respects — but your name isn't in the room when the real business calls get made.",
    image: featImg,
  },
  {
    icon: '🔁',
    title: "You're stuck in execution mode.",
    body: 'Every quarter you deliver. But "strategic" is a word your leadership uses about others, not you.',
    image: execImg,
  },
  {
    icon: '🤖',
    title: 'AI makes it worse, not better.',
    body: "Tools have never been faster. But judgment is more scarce than ever. And no one's teaching that.",
    image: aiImg,
  },
  {
    icon: '🚪',
    title: 'The Director door stays closed.',
    body: "You've been \"almost ready\" for a year. There's always one more thing to prove. You wonder if that promotion will ever come.",
    image: dirImg,
  },
];

export default function MirrorSection() {
  return (
    <section id="mirror" className="relative py-8 md:py-10 overflow-hidden border-b border-white/8 ">
      <div className="max-w-7xl mx-auto px-6 md:px-4">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <span className="text-sm font-bold text-center justify-center  uppercase tracking-wider text-[#D4A853] mb-2 flex items-center gap-2">
            <div className="w-3 h-px bg-[#D4A853]" />
            The Mirror
          </span>
          <h2 className="text-3xl font-serif sm:text-4xl md:text-5xl font-bold font-heading tracking-tight mb-3 text-white">
            This is the part where<br />
            <span className="text-[#D4A853]">we get honest.</span>
          </h2>

          <p className=" text-white text-lg">
            If any of these feel uncomfortably familiar, you're exactly who this program was built for.
          </p>
        </div>

        {/* Pain Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((p, i) => (
            <div key={i} className="group relative overflow-hidden bg-[#121212] border border-white/50 transition-all duration-300 ease-out hover:bg-[#161616] hover:border-[#D4A853]/40 hover:-translate-y-0.5 p-6 rounded-lg">
              {/* Background Image on Hover */}
              <img 
                src={p.image} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out pointer-events-none z-0" 
              />
              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="text-3xl text-white mb-4">{p.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2.5 leading-snug transition-colors duration-300 group-hover:text-[#D4A853]">
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

