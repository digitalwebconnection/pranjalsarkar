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
    body: "My manager told me I am performing well. But when I asked what it will take to move into a leadership band, the conversation went quiet.",
  },
  {
    icon: Clock3,
    title: "Always 'next cycle.'",
    body: "Last appraisal cycle my manager said \"you are on the right track, let's revisit in six months.\" Six months passed. The conversation never came back.",
  },
  {
    icon: Lightbulb,
    title: "Think strategically... how?",
    body: "My skip-level told me I need to think more strategically. I asked him what that looks like in my day-to-day. He said \"you'll figure it out as you grow.\" I am still figuring it out.",
  },
  {
    icon: Presentation,
    title: "Leadership feels undefined.",
    body: "HR sent my transition feedback. It said I need to develop executive presence and leadership communication. No one in that process could tell me what either of those means in a product review meeting.",
  },
  {
    icon: ArrowUpCircle,
    title: "Others move ahead faster.",
    body: "A colleague who joined six months after me was moved into a Group PM role. My manager said the timing was right for him. I never understood what timing had to do with it.",
  },
  {
    icon: CheckCircle2,
    title: "Execution isn't enough.",
    body: "I ran discovery, defined the roadmap, aligned engineering and design, shipped on time, and hit the metric. My performance review said \"strong execution.\" My role title did not change.",
  },
  {
    icon: MessageSquareWarning,
    title: "Pressure changes everything.",
    body: "In a leadership review, a VP asked me why I prioritised that feature over three others. I knew the answer. But under pressure, in that room, I could not structure my thinking fast enough. I left that meeting thinking about it for days.",
  },
  {
    icon: BookOpen,
    title: "Frameworks don't save you.",
    body: "I have read Inspired, Continuous Discovery Habits, and Shreyas Doshi's entire thread library. I can explain every framework. I still freeze when a senior stakeholder challenges my product decision in real time.",
  },
  {
    icon: FileText,
    title: "Ideas go unheard.",
    body: "I put together a detailed strategic proposal for my product area. My director said \"good thinking\" and moved on. It was never discussed again in any planning meeting.",
  },
  {
    icon: Users,
    title: "The promotion gap.",
    body: "My promotion case was built over eighteen months. In the final calibration, I was told the committee felt I did not yet have enough cross-functional influence. Nobody had mentioned cross-functional influence in any of my previous one-on-ones.",
  },
  {
    icon: Briefcase,
    title: "Execution vs. vision.",
    body: "I applied for a Director of Product role at a Series B company. Made it to the final round. The feedback was \"we felt you were stronger at execution than strategic vision.\" I did not know how to respond to that.",
  },
  {
    icon: Target,
    title: "Waiting to feel ready.",
    body: "I have been waiting to feel ready before applying for Head of Product roles. Every time I read a job description, I find one gap and talk myself out of it. That has been going on for almost two years.",
  },
  {
    icon: Bot,
    title: "AI changed leadership.",
    body: "My company is building AI features into the core product. In every product strategy meeting, leadership talks about agentic workflows and model selection and AI-driven personalisation. I am in those meetings. I do not have a mental model for making product decisions in this context.",
  },
  {
    icon: BrainCircuit,
    title: "Will AI replace me?",
    body: "I read that AI will not replace product managers but will replace average product managers. I saved that article. I have not stopped thinking about which side of that line I am on.",
  },
  {
    icon: GraduationCap,
    title: "Courses. Little change.",
    body: "I completed a Reforge program last year. The frameworks were solid. But when I got back to work on Monday, nothing about how I made decisions had actually changed.",
  },
  {
    icon: Compass,
    title: "Vision feels difficult.",
    body: "I can ship. I can manage stakeholders. I can write a good PRD. But when someone asks me to articulate my product vision for the next two years, I notice I am describing features, not thinking like a leader.",
  },
  {
    icon: Search,
    title: "What do they know?",
    body: "A peer with less product experience than me just moved into a leadership role at another company. When I looked at his LinkedIn, I could not point to what he had done differently. That gap I cannot explain is the thing that keeps me up at night.",
  },
  {
    icon: ShieldCheck,
    title: "I don't need more theory.",
    body: "I am not looking for another course with more frameworks. I want to understand how a product leader actually observes a situation, builds a point of view, and defends it when the room pushes back. I have not found anything that teaches that yet.",
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
    <section id="mirror" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 ">
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
          <h2 className="font-serif font-bold text-2xl md:text-4xl leading-tight tracking-tight mb-4 text-white">
            Read these. These are real situations shared by<br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              experienced Product Managers trying to become Product Leaders.
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-48 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span>
          </h2>
        </div>

        {/* Pain Point Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {painPoints.map((p, i) => (
            <div 
              key={i} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start group relative rounded-2xl p-px bg-linear-to-br from-[#00a8ff]/90 via-white/10 to-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(0,128,199,0.15)] hover:via-white/20 hover:to-white/20 flex flex-col"
            >
              <div className="relative h-full bg-[#060a14] group-hover:bg-[#0a0f1c] rounded-[15px] p-7 md:p-8 flex flex-col overflow-hidden transition-colors duration-300">
                {/* Radial spotlight inside the card */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(0,128,199,0.08),transparent_70%)] pointer-events-none" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 w-12 h-12 rounded-full bg-[#0080C7]/5 border border-[#0080C7]/40 shadow-[0_0_15px_rgba(0,128,199,0.1)] flex items-center justify-center text-[#00a8ff] group-hover:bg-[#0080C7]/10 group-hover:border-[#0080C7]/70 group-hover:shadow-[0_0_20px_rgba(0,128,199,0.3)] transition-all duration-300 shrink-0">
                    <p.icon size={22} strokeWidth={2} />
                  </div>
                  <p className="text-gray-300 text-[12px] md:text-[14px] leading-relaxed transition-colors duration-300 group-hover:text-white font-medium">
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Copy */}
        <div className="max-w-7xl mx-auto mt-8 md:mt-12 relative">
          <div className="p-4 md:p-6 border border-white/10 bg-[#0a0e17]/80 backdrop-blur-md rounded-2xl shadow-[0_0_40px_rgba(24,37,226,0.15)] relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,168,255,0.05)_0%,transparent_70%)]" />
            <p className="text-gray-200 text-[15px] md:text-[14px] leading-relaxed text-center relative z-10">
              If you recognised yourself in even three of these, something important just happened. You did not land on this page by accident. You have been carrying these questions alone for months, maybe years, telling yourself it is just timing, just politics, just one more cycle. But, it is not. There is a specific gap between how a Product Managers thinks and how a Product Leader thinks. It is real, it is learnable, and nobody in your organisation is going to teach it to you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}