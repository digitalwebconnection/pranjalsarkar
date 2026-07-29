import { useState, useEffect } from 'react';
import Logo from '../../assets/SignatureSticker.webp';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Problem', href: '#mirror' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Program', href: '#program' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'FAQ', href: '#faq' },
];

const sectionToNavLinkMap: Record<string, string> = {
  hero: '',
  mirror: 'mirror',
  diagnosis: 'mirror',
  philosophy: 'philosophy',
  about: 'about',
  preview: 'about',
  testimonials: 'philosophy',
  logos: 'program',
  program: 'program',
  judgment: 'program',
  takeaways: 'program',
  curriculum: 'curriculum',
  faq: 'faq',
  'final-cta': 'faq',
  contact: '',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  /* ── Scroll glass effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section highlighting ── */
  useEffect(() => {
    const ids = Object.keys(sectionToNavLinkMap);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(sectionToNavLinkMap[entry.target.id]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-72px 0px -20% 0px' }
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Close menu on scroll ── */
  useEffect(() => {
    const close = () => { if (menuOpen) setMenuOpen(false); };
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating Fixed Navbar ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <nav
          className={[
            'w-[98%] max-w-7xl pointer-events-auto transition-all duration-300 rounded-xl h-18 border',
            scrolled
              ? 'bg-[#0A101F]/90 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
              : 'bg-[#0A101F]/80 backdrop-blur-sm border-white/5',
          ].join(' ')}
        >
          <div className="flex justify-between h-full px-3 md:px-4">

            {/* ── Logo ── */}
            <a href="#hero" className="flex items-center gap-3 no-underline shrink-0">
              <img src={Logo} alt="Logo" className="w-52 h-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>

            {/* ── Center: Desktop nav links ── */}
            <div className="flex items-center gap-6">
              {navLinks.map(l => {
                const isActive = activeId === l.href.replace('#', '');
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    className={[
                      'text-[16px] font-medium no-underline transition-colors duration-200',
                      isActive
                        ? 'text-white'
                        : 'text-[#9CA3AF] hover:text-white',
                    ].join(' ')}
                  >
                    {l.label}
                  </a>
                );
              })}
              {/* ── Right: CTA + Hamburger ── */}
              <div className="flex justify-end shrink-0">
                {/* Desktop CTA */}
                <a
                  href="#contact"
                  className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-white text-[14px] font-bold tracking-wide no-underline transition-all duration-300 bg-linear-to-r from-[#2563EB] to-[#050B14] shadow-[0_0_80px_rgba(37,99,235,0.4)] hover:-translate-y-px"
                >
                  Apply Now <span>→</span>
                </a>

                {/* Hamburger — mobile only */}
                <button
                  onClick={() => setMenuOpen(o => !o)}
                  aria-label="Toggle menu"
                  aria-expanded={menuOpen}
                  className={[
                    'lg:hidden flex flex-col items-center justify-center gap-1.25 w-9.5 h-9.5 rounded-md border cursor-pointer transition-all duration-150',
                    menuOpen
                      ? 'bg-white/5 border-white/15'
                      : 'bg-transparent border-white/8 hover:bg-white/3',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'block w-4.5 h-[1.5px] rounded-sm transition-all duration-150',
                      menuOpen ? 'bg-[#3B82F6] rotate-45 translate-x-1 translate-y-1.25' : 'bg-white',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'block w-4.5 h-[1.5px] rounded-sm transition-opacity duration-150',
                      menuOpen ? 'opacity-0 bg-[#3B82F6]' : 'opacity-100 bg-white',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'block w-4.5 h-[1.5px] rounded-sm transition-all duration-150',
                      menuOpen ? 'bg-[#3B82F6] -rotate-45 translate-x-1 -translate-y-1.25' : 'bg-white',
                    ].join(' ')}
                  />
                </button>
              </div>
            </div>

          </div>

          {/* ── Mobile menu panel ── */}
          <div
            className={[
              'lg:hidden overflow-hidden transition-all duration-200 ease-in-out absolute top-20 left-0 right-0 rounded-xl bg-[#0A101F]/95 backdrop-blur-md border border-white/10 mx-auto shadow-2xl pointer-events-auto',
              menuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0 border-transparent',
            ].join(' ')}
          >
            <div className="flex flex-col gap-1 pb-5 pt-3 px-4">
              {navLinks.map(l => {
                const isActive = activeId === l.href.replace('#', '');
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      'flex items-center justify-between px-4 py-3 rounded-lg text-[14px] no-underline transition-all duration-150',
                      isActive
                        ? 'text-[#2563EB] font-bold bg-white/5 border border-white/5'
                        : 'text-[#9CA3AF] font-medium border border-transparent hover:text-white hover:bg-white/5',
                    ].join(' ')}
                  >
                    <span>{l.label}</span>
                  </a>
                );
              })}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 py-3.5 rounded-lg text-white text-[14px] font-bold no-underline tracking-wide bg-linear-to-r from-[#2563EB] via-[#1E40AF] to-[#050B14] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Apply Now →
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
