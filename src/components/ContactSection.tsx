import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', role: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* Left Column */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A853]/8 border border-[#D4A853]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#D4A853] mb-6">Contact & Apply</span>
            <h2 className="font-['Outfit',sans-serif] font-extrabold text-4xl md:text-[3.5rem] leading-[1.15] tracking-tight text-white mb-6">
              Ready to make<br />
              <span className="text-[#D4A853]">your move?</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#D4A853] my-6 md:my-8" />
            <p className="text-lg text-white  leading-relaxed max-w-[720px] mb-8">
              Fill out the application form. It takes 15 minutes. We review every application personally and respond within 5 business days.
            </p>

            {/* Contact info list (Reforge style) */}
            <div className="flex flex-col gap-4">
              {[
                { label: 'Email', value: 'hello@pranjalsarkar.com', icon: '✉️' },
                { label: 'number ', value: '+91 99794 29183', icon: '🔗' },
                { label: 'Response time', value: 'Within 5 business days', icon: '⏱️' },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-[4px] bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[16px] shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[#9CA3AF] text-[10px] font-bold tracking-wider uppercase">{c.label}</div>
                    <div className="text-white text-sm font-bold mt-0.5">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="p-6 md:p-8 rounded-lg bg-[#121212] border border-white/[0.08]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-5">🎉</div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  Application Received!
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  Pranjal will review your application personally and get back to you within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Apply for Cohort 2
                  </h3>
                  <p className="text-[#9CA3AF] text-[12px] mt-1">
                    All fields are required. Admission is selective.
                  </p>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field}>
                      <label className="text-[#9CA3AF] text-[10px] font-bold tracking-wider uppercase block mb-2">
                        {field === 'name' ? 'Full Name' : 'Work Email'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required
                        value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                        placeholder={field === 'name' ? 'Your Name' : 'you@company.com'}
                        className="w-full px-4 py-3 rounded-[6px] bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none transition-colors duration-150 focus:border-[#D4A853] focus:bg-transparent"
                      />
                    </div>
                  ))}
                </div>

                {/* Role + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {([['role', 'Current Role', 'Senior PM, EM, etc.'], ['company', 'Company', 'Where you work']] as const).map(([field, label, placeholder]) => (
                    <div key={field}>
                      <label className="text-[#9CA3AF] text-[10px] font-bold tracking-wider uppercase block mb-2">
                        {label}
                      </label>
                      <input
                        type="text"
                        required
                        value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-[6px] bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none transition-colors duration-150 focus:border-[#D4A853] focus:bg-transparent"
                      />
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div>
                  <label className="text-[#9CA3AF] text-[10px] font-bold tracking-wider uppercase block mb-2">
                    Why are you applying? (2–3 sentences)
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="What's the leadership gap you're trying to close? What's at stake?"
                    className="w-full px-4 py-3 rounded-[6px] bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none transition-colors duration-150 focus:border-[#D4A853] focus:bg-transparent resize-y"
                  />
                </div>

                <button type="submit" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4A853] border border-[#D4A853] rounded-[6px] text-[#080808] font-['Inter',sans-serif] text-sm font-semibold transition-all duration-200 hover:bg-[#E5C180] hover:border-[#E5C180] hover:-translate-y-px w-full justify-center text-[15px] py-3.5 mt-2">
                  Submit Application →
                </button>

                <p className="text-[#9CA3AF] text-[11px] text-center mt-1">
                  We respect your privacy. No spam. Ever.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
