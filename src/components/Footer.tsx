const footerLinks = {
  Program: ['About the Studio', 'Curriculum', 'Program Takeaways', 'Application Process', 'Alumni Stories'],
  Connect: ['LinkedIn', 'Twitter / X', 'Newsletter', 'Podcast', 'YouTube'],
  Resources: ['PM Judgment Quiz', 'Free Workshop', 'Blog', 'Case Studies', 'The Judgment Manifesto'],
};
import logo from '../assets/logo.webp'

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/8 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-14">

          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
        <img src={logo} alt="logo" />
            </div>
            <p className="text-[#9CA3AF] text-[13px] leading-relaxed mb-6 max-w-xs">
              Building the next generation of product leaders in the age of AI.
            </p>

            {/* Social Links (Reforge style) */}
            <div className="flex gap-2">
              {['in', 'tw', 'yt'].map(s => (
                <a
                  key={s}
                  href="#contact"
                  className="w-9 h-9 rounded-[4px] bg-white/2 border border-white/8 flex items-center justify-center text-[#9CA3AF] text-[11px] font-bold no-underline tracking-wide hover:text-[#D4A853] hover:border-[#D4A853] transition-all duration-150 uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-heading text-white text-[13px] font-bold tracking-wider uppercase mb-5">
                {col}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {links.map(l => (
                  <li key={l}>
                    <a
                      href="#contact"
                      className="text-[#9CA3AF] text-[13px] no-underline hover:text-white transition-colors duration-150"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[#9CA3AF] text-[12px] text-center md:text-left">
            © 2025 Pranjal Sarkar. AI Product Leadership Studio. All rights reserved.
          </span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Refund Policy'].map(l => (
              <a
                key={l}
                href="#contact"
                className="text-[#9CA3AF] text-[12px] no-underline hover:text-white transition-colors duration-150"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
