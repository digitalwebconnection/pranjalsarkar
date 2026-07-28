import { useEffect, useRef } from "react";
import {
  TrendingUp,
  Clock3,
  Lightbulb,
  Presentation,
  ArrowUpCircle,
  CheckCircle2,
  MessageSquareWarning,
  BookOpen,
  FileText,
  Users,
  Briefcase,
  Target,
  Bot,
  BrainCircuit,
  GraduationCap,
  Compass,
  Search,
  ShieldCheck,
} from "lucide-react";

export const painPoints = [
  {
    icon: TrendingUp,
    title: "Great feedback. No promotion.",
    body: "Your performance is praised, but the path to leadership is never clearly explained.",
  },
  {
    icon: Clock3,
    title: "Always 'next cycle.'",
    body: "Every appraisal ends with 'you're on the right track,' yet the opportunity never arrives.",
  },
  {
    icon: Lightbulb,
    title: "Think strategically... how?",
    body: "Leadership asks for strategic thinking but never shows what it actually looks like.",
  },
  {
    icon: Presentation,
    title: "Leadership feels undefined.",
    body: "You're told to improve executive presence, but no one teaches what it means in real meetings.",
  },
  {
    icon: ArrowUpCircle,
    title: "Others move ahead faster.",
    body: "Someone with less experience gets promoted while you're left wondering what you're missing.",
  },
  {
    icon: CheckCircle2,
    title: "Execution isn't enough.",
    body: "You deliver results consistently, yet your title and responsibilities never change.",
  },
  {
    icon: MessageSquareWarning,
    title: "Pressure changes everything.",
    body: "You know the answer until a senior leader challenges your decision in the room.",
  },
  {
    icon: BookOpen,
    title: "Frameworks don't save you.",
    body: "You know the theories, but real-time leadership conversations still feel difficult.",
  },
  {
    icon: FileText,
    title: "Ideas go unheard.",
    body: "Your strategic proposals get appreciated—but rarely influence business decisions.",
  },
  {
    icon: Users,
    title: "The promotion gap.",
    body: "Leadership mentions missing influence only after your promotion has already been declined.",
  },
  {
    icon: Briefcase,
    title: "Execution vs. vision.",
    body: "You're recognized for delivery but overlooked for strategic leadership roles.",
  },
  {
    icon: Target,
    title: "Waiting to feel ready.",
    body: "Every opportunity looks exciting until self-doubt convinces you to wait again.",
  },
  {
    icon: Bot,
    title: "AI changed leadership.",
    body: "Product decisions now require AI thinking, but no one explains how to develop it.",
  },
  {
    icon: BrainCircuit,
    title: "Will AI replace me?",
    body: "You're working hard but still wondering if you're building the skills that matter next.",
  },
  {
    icon: GraduationCap,
    title: "Courses. Little change.",
    body: "You completed programs, learned frameworks, but your day-to-day decisions stayed the same.",
  },
  {
    icon: Compass,
    title: "Vision feels difficult.",
    body: "You can build products, but communicating long-term product strategy feels uncomfortable.",
  },
  {
    icon: Search,
    title: "What do they know?",
    body: "Peers become leaders faster, and you can't identify what they're doing differently.",
  },
  {
    icon: ShieldCheck,
    title: "I don't need more theory.",
    body: "You want to think, decide, and defend ideas like a Product Leader—not collect more frameworks.",
  },
];

export default function MirrorSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const card = scrollContainerRef.current.children[0] as HTMLElement;
        const scrollAmount = card.offsetWidth + 24; // 24px is gap-6

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
           scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="mirror" className="relative py-12 md:py-20 overflow-hidden border-b border-white/8 ">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-0 w-full h-[150%] z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[80%] md:w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.5)_0%,rgba(30,64,175,0.3)_30%,transparent_70%)] blur-[80px]" />
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.2)_0%,transparent_50%)] blur-[60px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-4">

        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[12px] font-bold tracking-widest uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
            THE MIRROR
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight mb-4 text-white">
            This might be exactly where you're stuck.<br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              And that's okay.
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-48 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span>
          </h2>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mx-auto">
            If even one of these sounds familiar, you're closer to product leadership than you think.
          </p>
        </div>

        {/* Pain Point Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {painPoints.map((p, i) => (
            <div 
              key={i} 
              className="w-[100%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start group relative rounded-2xl p-px bg-linear-to-br from-[#00a8ff]/90 via-white/10 to-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(0,128,199,0.15)] hover:via-white/20 hover:to-white/20 flex flex-col"
            >
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