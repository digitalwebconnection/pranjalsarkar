const footerLinks = {
  Program: ['About the Studio', 'Curriculum', 'Program Takeaways', 'Application Process', 'Alumni Stories'],
  Connect: ['LinkedIn', 'Twitter / X', 'Newsletter', 'Podcast', 'YouTube'],
  Resources: ['PM Judgment Quiz', 'Free Workshop', 'Blog', 'Case Studies', 'The Judgment Manifesto'],
};
import Logo from '../../assets/SignatureSticker.png';

const footerLinkHashes: Record<string, string> = {
  'About the Studio': '#program',
  'Curriculum': '#curriculum',
  'Program Takeaways': '#takeaways',
  'Application Process': '#contact',
  'Alumni Stories': '#testimonials',
  'The Judgment Manifesto': '#philosophy',
  'Case Studies': '#testimonials',
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/8 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-14">

          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={Logo} alt="logo" />
            </div>
            <p className="text-[#e0e0e0] text-[13px] leading-relaxed mb-6 max-w-xs">
              Building the next generation of product leaders in the age of AI.
            </p>

            {/* Social Links (Reforge style) */}
            <div className="flex gap-2">
              {[
                {
                  name: 'LinkedIn',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  href: 'https://linkedin.com/in/pranjalsarkar'
                },
                {
                  name: 'Twitter',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: 'https://twitter.com/pranjalsarkar'
                },
                {
                  name: 'YouTube',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.003 3.003 0 00-2.11 2.108C0 8.026 0 12 0 12s0 3.974.502 5.837a3.003 3.003 0 002.11 2.108c1.863.51 9.388.51 9.388.51s7.524 0 9.388-.51a3.003 3.003 0 002.11-2.108c.502-1.863.502-5.837.502-5.837s0-3.974-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                  href: 'https://youtube.com'
                }
              ].map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-[4px] bg-white/2 border border-white/8 flex items-center justify-center text-[#9CA3AF] hover:text-[#0080C7] hover:border-[#0080C7] transition-all duration-150"
                  aria-label={s.name}
                >
                  {s.icon}
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
                      href={footerLinkHashes[l] || '#contact'}
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
