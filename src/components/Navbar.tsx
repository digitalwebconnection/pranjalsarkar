import { useState, useEffect } from 'react';
import Logo from '../assets/logo.webp';

const navLinks = [
    { label: 'About',      href: '#about' },
  { label: 'Problem',    href: '#mirror' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Program',    href: '#program' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'FAQ',        href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  /* ── Scroll glass effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section highlighting ── */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* ── Close menu on scroll ── */
  useEffect(() => {
    const close = () => { if (menuOpen) setMenuOpen(false); };
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/8'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* ── Main row ── */}
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ── */}
            <a href="#hero" className="flex items-center gap-3 no-underline shrink-0">
              <img src={Logo} alt="Logo" className="w-20 h-10" />
            </a>

     

            {/* ── Right: CTA + Hamburger ── */}
            <div className="flex items-center gap-3 shrink-0">
       {/* ── Desktop nav links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(l => {
                const isActive = activeId === l.href.replace('#', '');
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    className={[
                      'px-3.5 py-1.5 rounded-[4px] text-[13px] font-semibold no-underline transition-all duration-150 whitespace-nowrap',
                      isActive
                        ? 'text-[#D4A853] bg-white/5'
                        : 'text-white hover:text-white hover:bg-white/3',
                    ].join(' ')}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>
              {/* Desktop CTA */}
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 px-6 py-[9px] rounded-[6px] text-[#080808] text-[13px] font-bold tracking-wide no-underline transition-all duration-150 bg-[#D4A853] hover:bg-[#E5C180]"
              >
                Apply Now <span className="text-[13px]">→</span>
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
                className={[
                  'md:hidden flex flex-col items-center justify-center gap-[5px] w-[38px] h-[38px] rounded-[6px] border cursor-pointer transition-all duration-150',
                  menuOpen
                    ? 'bg-white/5 border-white/15'
                    : 'bg-transparent border-white/8 hover:bg-white/3',
                ].join(' ')}
              >
                <span
                  className={[
                    'block w-4.5 h-[1.5px] rounded-sm transition-all duration-150',
                    menuOpen ? 'bg-[#D4A853] rotate-45 translate-x-[4px] translate-y-[5px]' : 'bg-white',
                  ].join(' ')}
                />
                <span
                  className={[
                    'block w-4.5 h-[1.5px] rounded-sm transition-opacity duration-150',
                    menuOpen ? 'opacity-0 bg-[#D4A853]' : 'opacity-100 bg-white',
                  ].join(' ')}
                />
                <span
                  className={[
                    'block w-4.5 h-[1.5px] rounded-sm transition-all duration-150',
                    menuOpen ? 'bg-[#D4A853] -rotate-45 translate-x-[4px] translate-y-[-5px]' : 'bg-white',
                  ].join(' ')}
                />
              </button>
            </div>
          </div>

          {/* ── Mobile menu panel ── */}
          <div
            className={[
              'md:hidden overflow-hidden transition-all duration-200 ease-in-out',
              menuOpen ? 'max-h-[500px]' : 'max-h-0',
            ].join(' ')}
          >
            <div className="flex flex-col gap-1 pb-5 pt-1">
              {navLinks.map(l => {
                const isActive = activeId === l.href.replace('#', '');
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      'flex items-center justify-between px-4 py-3 rounded-[6px] text-[14px] no-underline transition-all duration-150',
                      isActive
                        ? 'text-[#D4A853] font-bold bg-white/5 border border-white/8'
                        : 'text-[#9CA3AF] font-semibold border border-transparent hover:text-white hover:bg-white/3',
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
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-[6px] text-[#080808] text-[14px] font-bold no-underline tracking-wide bg-[#D4A853] hover:bg-[#E5C180]"
              >
                Apply for Cohort 2 →
              </a>
            </div>
          </div>

        </div>
      </nav>

      {/* Spacer under fixed bar */}
      <div className="h-[72px] bg-[#080808]" />
    </>
  );
}
