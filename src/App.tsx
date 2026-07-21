import './styles/index.css';
import Navbar from './components/layout/Navbar';
import SmoothScroll from './components/ui/SmoothScroll';
import HeroSection from './components/sections/HeroSection';
import MirrorSection from './components/sections/MirrorSection';
import DiagnosisSection from './components/sections/DiagnosisSection';
import PhilosophySection from './components/sections/PhilosophySection';
import AboutSection from './components/sections/AboutSection';
import VideoSection from './components/sections/VideoSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import LogosSection from './components/sections/LogosSection';
import ProgramIntroSection from './components/sections/ProgramIntroSection';
import JudgementSection from './components/sections/JudgementSection';
import TakeawaysSection from './components/sections/TakeawaysSection';
import CurriculumSection from './components/sections/CurriculumSection';
import FAQSection from './components/sections/FAQSection';
import FinalCTASection from './components/sections/FinalCTASection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import EventsGallerySection from './components/sections/EventsGallerySection';

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

      {/* New Video Preview Section */}
      <VideoSection />

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

      {/* Events & Speaking Gallery Section */}
      <EventsGallerySection />


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
