import './index.css';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import HeroSection from './components/HeroSection';
import MirrorSection from './components/MirrorSection';
import DiagnosisSection from './components/DiagnosisSection';
import PhilosophySection from './components/PhilosophySection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import LogosSection from './components/LogosSection';
import ProgramIntroSection from './components/ProgramIntroSection';
import JudgementSection from './components/JudgementSection';
import TakeawaysSection from './components/TakeawaysSection';
import CurriculumSection from './components/CurriculumSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <SmoothScroll />
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero Section — #1 Priority */}
      <HeroSection />

      {/* 3. The Mirror — The Problem — #2 */}
      <MirrorSection />

      {/* 4. The Diagnosis — Why + Stats — #3 */}
      <DiagnosisSection />

      {/* 5. Philosophy — Build Product Judgment Under AI — #4 */}
      <PhilosophySection />

      {/* 6. About Pranjal Sarkar — #5 */}
      <AboutSection />

      {/* 7. Testimonials — #6 */}
      <TestimonialsSection />

      {/* 8. Logos Strip — #7 */}
      <LogosSection />

      {/* 9. Program Introduction — AI Product Leadership Studio — #8 */}
      <ProgramIntroSection />

      {/* 10. How Leadership-Level Judgment Gets Built — #9 */}
      <JudgementSection />

      {/* 11. Program Takeaways — #10 */}
      <TakeawaysSection />

      {/* 12. Curriculum — #11 */}
      <CurriculumSection />

      {/* 13. FAQ — #12 */}
      <FAQSection />

      {/* 14. Final CTA — #13 */}
      <FinalCTASection />

      {/* 15. Contact / Apply — #14 */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
