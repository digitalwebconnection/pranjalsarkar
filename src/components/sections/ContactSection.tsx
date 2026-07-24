import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', role: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden border-b border-white/8 bg-[#010308]">
      
      {/* Background glow and abstract effects */}
      <div className="absolute bottom-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.25)_0%,transparent_60%)] blur-[50px]" />
        {/* Subtle dotted wavy pattern simulation (radial gradient overlay) */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 128, 199, 0.4) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#010308] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#010308] via-transparent to-[#010308]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-center">

          {/* Left Column */}
          <div className="max-w-md">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#0080C7]/30 bg-[#0080C7]/5 mb-8 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#33a8ff]">
                Contact & Apply
              </span>
            </div>
            
            {/* Header */}
            <div className="relative mb-10">
              <h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] tracking-tight text-white mb-2">
                Ready to make<br />
                <span className="text-[#0080C7] drop-shadow-[0_0_15px_rgba(0,128,199,0.4)]">your move?</span>
              </h2>
              {/* Horizontal flare line */}
              <div className="absolute -bottom-4 left-0 w-48 md:w-80 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_15px_rgba(0,128,199,0.9)] opacity-80" />
            </div>

            <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed mb-10">
              Fill out the application form. It takes 1–3 minutes. We review every application personally and respond within <span className="text-white font-bold">5 business days</span>.
            </p>

            {/* Contact info list */}
            <div className="flex flex-col gap-4">
              {/* Phone Card */}
              <div className="flex gap-5 items-center p-4 rounded-xl border border-[#0080C7]/20 bg-[#050B14]/80 backdrop-blur-sm shadow-[0_0_20px_rgba(0,128,199,0.05)] w-full max-w-sm">
                <div className="w-12 h-12 rounded-full border border-[#0080C7]/40 flex items-center justify-center bg-[#001020] text-[#33a8ff] shadow-[inset_0_0_10px_rgba(0,128,199,0.15)] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[#64748b] text-[10px] font-bold tracking-widest uppercase mb-0.5">Phone Number</div>
                  <div className="text-white text-[15px] font-bold tracking-wide">+91 99794 29183</div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="flex gap-5 items-center p-4 rounded-xl border border-[#0080C7]/20 bg-[#050B14]/80 backdrop-blur-sm shadow-[0_0_20px_rgba(0,128,199,0.05)] w-full max-w-sm">
                <div className="w-12 h-12 rounded-full border border-[#0080C7]/40 flex items-center justify-center bg-[#001020] text-[#33a8ff] shadow-[inset_0_0_10px_rgba(0,128,199,0.15)] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" x2="16" y1="2" y2="6"/>
                    <line x1="8" x2="8" y1="2" y2="6"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[#64748b] text-[10px] font-bold tracking-widest uppercase mb-0.5">Response Time</div>
                  <div className="text-white text-[15px] font-bold tracking-wide">Within 5 business days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="relative w-full rounded-2xl bg-[#050B14] border border-[#0080C7]/30 shadow-[0_0_50px_rgba(0,128,199,0.15)] p-8 md:p-10 z-10 overflow-hidden">
            {/* Inner Highlights for Glassmorphism */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#33a8ff]/60 to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#33a8ff]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0080C7]/20 to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#0080C7]/20 to-transparent" />
            
            {/* Subtle inner radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,128,199,0.1)_0%,transparent_60%)] pointer-events-none" />

            {submitted ? (
              <div className="text-center py-20 relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#0080C7]/20 border border-[#0080C7]/50 flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(0,128,199,0.3)]">
                  🎉
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  Application Received!
                </h3>
                <p className="text-[#a1a1aa] text-base leading-relaxed max-w-sm mx-auto">
                  Pranjal will review your application personally and get back to you within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="mb-2">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                    Apply for <span className="text-[#33a8ff]">Cohort 2</span>
                  </h3>
                  <p className="text-[#a1a1aa] text-[14px]">
                    All fields are required. Admissions are selective.
                  </p>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#64748b] text-[10px] font-bold tracking-widest uppercase">
                      Full Name
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#0080C7]/20 bg-[#0A101C] transition-colors focus-within:border-[#0080C7]/60 focus-within:shadow-[0_0_15px_rgba(0,128,199,0.1)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#33a8ff]">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your Name"
                        className="bg-transparent border-none outline-none text-[#f8fafc] text-sm w-full placeholder:text-[#475569]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#64748b] text-[10px] font-bold tracking-widest uppercase">
                      Work Email
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#0080C7]/20 bg-[#0A101C] transition-colors focus-within:border-[#0080C7]/60 focus-within:shadow-[0_0_15px_rgba(0,128,199,0.1)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#33a8ff]">
                        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="you@company.com"
                        className="bg-transparent border-none outline-none text-[#f8fafc] text-sm w-full placeholder:text-[#475569]"
                      />
                    </div>
                  </div>
                </div>

                {/* Role + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Role */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#64748b] text-[10px] font-bold tracking-widest uppercase">
                      Current Role
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#0080C7]/20 bg-[#0A101C] transition-colors focus-within:border-[#0080C7]/60 focus-within:shadow-[0_0_15px_rgba(0,128,199,0.1)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#33a8ff]">
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                      <input
                        type="text"
                        required
                        value={form.role}
                        onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                        placeholder="Senior PM, EM, etc."
                        className="bg-transparent border-none outline-none text-[#f8fafc] text-sm w-full placeholder:text-[#475569]"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#64748b] text-[10px] font-bold tracking-widest uppercase">
                      Company
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#0080C7]/20 bg-[#0A101C] transition-colors focus-within:border-[#0080C7]/60 focus-within:shadow-[0_0_15px_rgba(0,128,199,0.1)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#33a8ff]">
                        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
                      </svg>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        placeholder="Where you work"
                        className="bg-transparent border-none outline-none text-[#f8fafc] text-sm w-full placeholder:text-[#475569]"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#64748b] text-[10px] font-bold tracking-widest uppercase">
                    Why are you applying? (2–3 sentences)
                  </label>
                  <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-[#0080C7]/20 bg-[#0A101C] transition-colors focus-within:border-[#0080C7]/60 focus-within:shadow-[0_0_15px_rgba(0,128,199,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#33a8ff] mt-0.5 shrink-0">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
                    </svg>
                    <textarea
                      required
                      rows={3}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="What's the leadership gap you're trying to close? What's at stake?"
                      className="bg-transparent border-none outline-none text-[#f8fafc] text-sm w-full placeholder:text-[#475569] resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full mt-2 py-4 rounded-xl text-white font-bold text-[16px] bg-gradient-to-r from-[#0080C7] to-[#1e99f5] hover:from-[#009CEE] hover:to-[#33a8ff] transition-all duration-300 shadow-[0_0_20px_rgba(0,128,199,0.3)] hover:shadow-[0_0_30px_rgba(0,128,199,0.5)] flex items-center justify-center gap-2 group">
                  Submit Application 
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>

                {/* Footer Privacy Text */}
                <div className="flex items-center justify-center gap-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#64748b]">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                  <p className="text-[#64748b] text-xs">
                    We respect your privacy. No spam. Ever.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
