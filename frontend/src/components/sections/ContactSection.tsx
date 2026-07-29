import { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, User, Mail, Briefcase, Building2, Pencil, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 680);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Intense bottom-left electric blue radial burst (exact match to wireframe)
      const glowGrad = ctx.createRadialGradient(
        0, height, 10,
        width * 0.15, height * 0.85, width * 0.55
      );
      glowGrad.addColorStop(0, 'rgba(0, 140, 255, 0.75)');
      glowGrad.addColorStop(0.2, 'rgba(0, 100, 240, 0.45)');
      glowGrad.addColorStop(0.55, 'rgba(0, 50, 170, 0.15)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. 3D Dotted Wave Grid matching wireframe curve
      const rows = 45; // Z-depth rows
      const cols = 90; // X-axis columns
      const xSeparation = (width * 1.3) / cols;

      step += 0.007; // gentle smooth animation

      for (let r = 0; r < rows; r++) {
        const depth = r / rows; // 0 = front (bottom), 1 = back (top)
        const pScale = Math.pow(1 - depth * 0.65, 1.7); // Perspective scaling
        const rowY = height * 0.96 - depth * (height * 0.5); // Grid baseline height

        for (let c = 0; c < cols; c++) {
          const normX = c / cols; // 0 (left) to 1 (right)
          const xPos = (c - cols / 2) * xSeparation * pScale + width * 0.46;

          // Double wave elevation profile matching the wireframe wave
          const waveLeftRise = Math.sin((normX - 0.05) * Math.PI * 1.8 - step + depth * 2.5) * 50;
          const waveRightSwell = Math.cos((normX - 0.4) * Math.PI * 1.6 + step * 0.5) * 30;
          const elevation = (waveLeftRise + waveRightSwell) * pScale;

          const yPos = rowY + elevation;

          if (xPos < -30 || xPos > width + 30 || yPos < 0 || yPos > height + 30) continue;

          // Alpha fade: brighter near bottom-left glow source and foreground
          const alphaDepth = Math.pow(1 - depth * 0.75, 1.6);
          const leftFactor = Math.max(0, 1 - normX * 1.8);
          const alpha = Math.min(1, Math.max(0.04, alphaDepth * (0.3 + leftFactor * 0.65)));

          const radius = Math.max(0.6, (1.8 * pScale) * (1 + leftFactor * 0.5));

          ctx.beginPath();
          ctx.arc(xPos, yPos, radius, 0, Math.PI * 2);

          if (leftFactor > 0.4) {
            ctx.fillStyle = `rgba(0, 225, 255, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(0, 136, 255, ${alpha})`;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      setSubmitError('Mobile number must be a 10-digit number.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          role: form.role,
          company: form.company,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', role: '', company: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError('Unable to connect to the server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-20 overflow-hidden bg-[#000000] text-white border-b border-white/5">
      {/* Background 3D Dotted Wave Canvas (100% wireframe match) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full h-full opacity-70 mix-blend-screen" />

        {/* Fine background dot matrix grid overlay */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(0, 140, 255, 0.35) 1.5px, transparent 0)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Soft top-right dark glow vignette */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-[radial-gradient(circle_at_top_right,rgba(0,70,180,0.12)_0%,transparent_60%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="max-w-xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#0070f3]/40 bg-[#0070f3]/10 mb-8 shadow-[0_0_15px_rgba(0,112,243,0.18)]">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#38bdf8]">
                CONTACT & APPLY
              </span>
            </div>

            {/* Header with Horizontal Laser Flare Line (100% copy of flare image) */}
            <div className="relative mb-8">
              <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-white mb-2">
                Ready to make<br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">your move?</span>
              </h2>

              {/* Razor-thin 2px Horizontal Laser Flare Line with Exact Glow */}
              <div className="relative mt-5 mb-3 w-50 sm:w-70 h-[3px] pointer-events-none">
                <div className="absolute -bottom-3 left-0 w-48 md:w-80 h-[2px] bg-gradient-to-r from-transparent via-[rgba(24,37,226,1)] to-transparent shadow-[0_0_15px_rgba(24,37,226,0.9)] opacity-80" />
              </div>
            </div>

            <p className="text-white text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              Fill out the application form. It takes 1–3 minutes. We review every application personally and respond within <span className="text-white font-bold">5 business days</span>.
            </p>

            {/* Contact info cards */}
            <div className="flex flex-col gap-4 max-w-xs">
              {/* Phone Card */}
              <div className="flex items-center gap-5 p-4 rounded-xl border border-[#0070f3]/25 bg-[#060d1a]/25 backdrop-blur-md shadow-[0_0_25px_rgba(0,100,255,0.06)] hover:border-[#0070f3]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-[#0070f3]/50 bg-[#00142c] text-[#38bdf8] flex items-center justify-center shadow-[inset_0_0_12px_rgba(0,136,255,0.35)] shrink-0">
                  <Phone className="w-5 h-5 text-[#38bdf8]" />
                </div>
                <div>
                  <div className="text-[#8a93a0] text-[12px] font-bold tracking-widest uppercase mb-1">PHONE NUMBER</div>
                  <div className="text-white text-base font-bold tracking-wide">+91 12345 67890</div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="flex items-center gap-5 p-4 rounded-xl border border-[#0070f3]/25 bg-[#060d1a]/25 backdrop-blur-md shadow-[0_0_25px_rgba(0,100,255,0.06)] hover:border-[#0070f3]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-[#0070f3]/50 bg-[#00142c] text-[#38bdf8] flex items-center justify-center shadow-[inset_0_0_12px_rgba(0,136,255,0.35)] shrink-0">
                  <Calendar className="w-5 h-5 text-[#38bdf8]" />
                </div>
                <div>
                  <div className="text-[#8a93a0] text-[12px] font-bold tracking-widest uppercase mb-1">RESPONSE TIME</div>
                  <div className="text-white text-base font-bold tracking-wide">Within 5 business days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Glowing Form Box (100% copy of wireframe) */}
          <div className="relative w-full rounded-3xl bg-[#040914]/90 border-2 border-[#0070f3]/70 shadow-[0_0_60px_rgba(0,112,243,0.4),inset_0_0_35px_rgba(0,112,243,0.15)] p-6 sm:p-8 md:p-10 z-10 backdrop-blur-xl">
            {/* Top and right inner gradient border light line glows */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-90" />
            <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#0070f3] to-transparent opacity-60" />

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
              <div className="mb-2">
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Apply for <span className="text-[#0075ff]">Cohort 2</span>
                </h3>
                <p className="text-[#ffffff] text-sm sm:text-base mt-2">
                  All fields are required. Admissions are selective.
                </p>
              </div>

              {submitted && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-sm font-semibold mb-2">
                  <span>🎉</span>
                  <span>Application received! We'll respond within 5 business days.</span>
                </div>
              )}

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-[#b2c0d3] text-[11px] font-bold tracking-widest uppercase mb-2">
                      FULL NAME
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#172740] bg-[#070e1b] transition-all focus-within:border-[#0070f3] focus-within:shadow-[0_0_15px_rgba(0,112,243,0.25)]">
                      <User className="w-5 h-5 text-[#0070f3] shrink-0" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your Name"
                        className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-[#99a1ac]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[#b2c0d3] text-[11px] font-bold tracking-widest uppercase mb-2">
                      WORK EMAIL
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#172740] bg-[#070e1b] transition-all focus-within:border-[#0070f3] focus-within:shadow-[0_0_15px_rgba(0,112,243,0.25)]">
                      <Mail className="w-5 h-5 text-[#0070f3] shrink-0" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="you@company.com"
                        className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-[#99a1ac]"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone + Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className="text-[#b2c0d3] text-[11px] font-bold tracking-widest uppercase mb-2">
                      PHONE NUMBER
                    </label>
                    <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border ${form.phone.length > 0 && form.phone.length < 10 ? 'border-red-500/50 focus-within:border-red-500/50 focus-within:shadow-[0_0_15px_rgba(239,68,68,0.25)]' : 'border-[#172740] focus-within:border-[#0070f3] focus-within:shadow-[0_0_15px_rgba(0,112,243,0.25)]'} bg-[#070e1b] transition-all`}>
                      <Phone className="w-5 h-5 text-[#0070f3] shrink-0" />
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 10) {
                            setForm(f => ({ ...f, phone: value }));
                          }
                        }}
                        placeholder="9979429183"
                        className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-[#99a1ac]"
                      />
                    </div>
                    {form.phone.length > 0 && form.phone.length < 10 && (
                      <span className="text-red-400 text-xs mt-1.5 ml-1 font-medium">Must be exactly 10 digits</span>
                    )}
                  </div>

                  {/* Role */}
                  <div className="flex flex-col">
                    <label className="text-[#b2c0d3] text-[11px] font-bold tracking-widest uppercase mb-2">
                      CURRENT ROLE
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#172740] bg-[#070e1b] transition-all focus-within:border-[#0070f3] focus-within:shadow-[0_0_15px_rgba(0,112,243,0.25)]">
                      <Briefcase className="w-5 h-5 text-[#0070f3] shrink-0" />
                      <input
                        type="text"
                        required
                        value={form.role}
                        onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                        placeholder="Senior PM, EM, etc."
                        className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-[#99a1ac]"
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col">
                  <label className="text-[#b2c0d3] text-[11px] font-bold tracking-widest uppercase mb-2">
                    COMPANY
                  </label>
                  <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#172740] bg-[#070e1b] transition-all focus-within:border-[#0070f3] focus-within:shadow-[0_0_15px_rgba(0,112,243,0.25)]">
                    <Building2 className="w-5 h-5 text-[#0070f3] shrink-0" />
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      placeholder="Where you work"
                      className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-[#99a1ac]"
                    />
                  </div>
                </div>

                {/* Why applying */}
                <div className="flex flex-col">
                  <label className="text-[#b2c0d3] text-[11px] font-bold tracking-widest uppercase mb-2">
                    WHY ARE YOU APPLYING? (2–3 SENTENCES)
                  </label>
                  <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-[#172740] bg-[#070e1b] transition-all focus-within:border-[#0070f3] focus-within:shadow-[0_0_15px_rgba(0,112,243,0.25)]">
                    <Pencil className="w-5 h-5 text-[#0070f3] mt-0.5 shrink-0" />
                    <textarea
                      required
                      rows={3}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="What's the leadership gap you're trying to close?&#10;What's at stake?"
                      className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-[#99a1ac] resize-none"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold">
                    <span>⚠️</span>
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit Button (GRADIENT MATCH 100% COPY OF WIREFRAME) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-3 py-4 px-6 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-[#0088ff] via-[#0066ff] to-[#0052eb] hover:from-[#0096ff] hover:via-[#0075ff] hover:to-[#005eff] border-t border-white/40 transition-all duration-300 shadow-[0_0_35px_rgba(0,120,255,0.7)] hover:shadow-[0_0_50px_rgba(0,140,255,0.9)] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Footer Privacy Text */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                  <p className="text-[#bec3ca] text-xs font-medium">
                    We respect your privacy. No spam. Ever.
                  </p>
                </div>
              </form>
          </div>

        </div>
      </div>
    </section>
  );
}
