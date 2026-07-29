import { Mail, ShieldCheck } from 'lucide-react';
import Logo from '../../assets/SignatureSticker.webp';

const footerLinks = {
  PROGRAM: ['About the Studio', 'Curriculum', 'Program Framework', 'Application Process', 'Alumni Stories'],
  CONNECT: ['LinkedIn', 'Twitter / X', 'Newsletter', 'Podcast', 'YouTube'],
  RESOURCES: ['PM Judgment Deck', 'Free Workshop', 'Blog', 'Case Studies', 'The Judgment Members'],
};

const footerLinkHashes: Record<string, string> = {
  'About the Studio': '#program',
  'Curriculum': '#curriculum',
  'Program Framework': '#takeaways',
  'Application Process': '#contact',
  'Alumni Stories': '#testimonials',
  'PM Judgment Deck': '#philosophy',
  'Free Workshop': '#contact',
  'Blog': '#contact',
  'Case Studies': '#testimonials',
  'The Judgment Members': '#philosophy',
};

export default function Footer() {
  return (
    <footer className="bg-[#000000] pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Top Section: Brand + Links */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 mb-10">

          {/* Brand Info (Left Col) */}
          <div className="lg:w-[35%] lg:pr-16 lg:border-r lg:border-white/10 flex flex-col items-start">
            <img src={Logo} alt="Pranjal Sarkar" className="w-56 h-auto mb-3" style={{ filter: 'brightness(0) invert(1)' }} />

            {/* Glowing line */}
            <div className="w-28 h-0.5 bg-linear-to-r from-[#3B82F6]/10 via-[#3B82F6] to-[#3B82F6]/10 shadow-[0_0_15px_rgba(59,130,246,0.8)] mb-8 rounded-full" />

            <p className="text-[#D1D5DB] text-[15px] leading-relaxed mb-10 max-w-70 font-medium">
              Building future-ready product leaders<br />who create <span className="text-[#3B82F6] font-semibold">impact</span> that lasts.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>, href: '#' },
                { name: 'X', icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: '#' },
                { name: 'YouTube', icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.003 3.003 0 00-2.11 2.108C0 8.026 0 12 0 12s0 3.974.502 5.837a3.003 3.003 0 002.11 2.108c1.863.51 9.388.51 9.388.51s7.524 0 9.388-.51a3.003 3.003 0 002.11-2.108c.502-1.863.502-5.837.502-5.837s0-3.974-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>, href: '#' }
              ].map(s => (
                <a key={s.name} href={s.href} className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns (Right Col) */}
          <div className="lg:w-[65%] lg:pl-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pt-4">
            {Object.entries(footerLinks).map(([col, links]) => (
              <div key={col}>
                <h4 className="text-[#3B82F6] text-[14px] font-bold tracking-widest uppercase mb-3">
                  {col}
                </h4>
                <div className="w-16 h-[2.5px] bg-linear-to-r from-[#3B82F6] to-transparent mb-8 rounded-full" />
                <ul className="flex flex-col gap-5">
                  {links.map(l => (
                    <li key={l} className="flex items-center gap-3.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <a href={footerLinkHashes[l] || '#contact'} className="text-[#D1D5DB] text-[14px] font-medium hover:text-white transition-colors duration-150">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="border border-white/10 w-full lg:w-[85%] ml-auto rounded-2xl p-6 md:px-10 md:py-6 flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 relative overflow-hidden bg-white/1">
          <div className="flex items-center gap-6 z-10 w-full lg:w-auto">
            <div className="w-13 h-13 rounded-full border border-[#3B82F6]/30 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <p className="text-[14px] md:text-[15px] text-[#9CA3AF] max-w-lg leading-relaxed">
              <span className="text-white font-bold block md:inline mr-1">Stay in the loop.</span>
              Insights, frameworks, and product leadership lessons — straight to your inbox.
            </p>
          </div>
          <div className="flex w-full lg:w-auto items-center gap-4 z-10">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-[#0A101F] border border-white/10 rounded-lg px-5 py-3.5 text-[14px] text-white placeholder-gray-500 w-full lg:w-[320px] focus:outline-none focus:border-[#3B82F6]/50"
            />
            <button className="px-8 py-3.5 rounded-lg text-white text-[15px] font-bold transition-all duration-300 bg-linear-to-r from-[#2563EB] to-[#1D4ED8] shadow-[0_0_20px_rgba(37,99,235,0.3)] whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className=" flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#9CA3AF] text-[14px]">
                © 2025 Pranjal Sarkar. All rights reserved.
              </span>
              <span className="text-[#3B82F6] text-[14px] font-medium mt-0.5">
                Product Leadership Studio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8 text-[#3B82F6] text-[14px] font-medium">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-1.25 h-1.25 rounded-full bg-[#3B82F6]" />
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="w-1.25 h-1.25 rounded-full bg-[#3B82F6]" />
            <a href="#refund" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
