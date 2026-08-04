import { Routes, Route } from 'react-router-dom';
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
import StudioExperienceSection from './components/sections/StudioExperienceSection';
import WhoShouldApplySection from './components/sections/WhoShouldApplySection';
import JudgementSection from './components/sections/JudgementSection';
import TakeawaysSection from './components/sections/TakeawaysSection';
import CurriculumSection from './components/sections/CurriculumSection';
import FAQSection from './components/sections/FAQSection';
import FinalCTASection from './components/sections/FinalCTASection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import EventsGallerySection from './components/sections/EventsGallerySection';
import { AdminPage } from './admin/AdminPage';

/** The main marketing / landing page */
function LandingPage() {
  return (
    <>
      <SmoothScroll />
      
      {/* Skip Navigation Link for A11Y */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white font-bold"
      >
        Skip to content
      </a>

      {/* 1. Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero Section — #1 Priority */}
        <HeroSection />

      {/* 3. The Mirror — The Problem — #2 */}
      <MirrorSection />

      {/* 9. Program Introduction — AI Product Leadership Studio — #8 */}
      <ProgramIntroSection />

      {/* 10. How Leadership-Level Judgment Gets Built — #9 */}
      <JudgementSection />

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

      {/* New Video Preview Section */}
      <VideoSection />

      {/* 9. The Studio Experience */}
      <StudioExperienceSection />
      
      {/* 9.5. Who Should Apply */}
      <WhoShouldApplySection />

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
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfUse from './pages/TermsOfUse';

export default function App() {
  return (
    <Routes>
      {/* Main website */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />

      {/* Admin Panel — standalone page (no navbar/footer) */}
      <Route
        path="/admin"
        element={
          <AdminPage />
        }
      />

      {/* 404 Catch-all */}
      <Route path="*" element={
        <div className="h-screen flex items-center justify-center bg-black text-white">
          <h1 className="text-3xl font-serif">404 — Page Not Found</h1>
        </div>
      } />
    </Routes>
  );
}
