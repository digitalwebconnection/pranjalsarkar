import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';

// Eager imports for above-the-fold components
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import SmoothScroll from './components/ui/SmoothScroll';

// Lazy imports for below-the-fold components
const MirrorSection = lazy(() => import('./components/sections/MirrorSection'));
const ProgramIntroSection = lazy(() => import('./components/sections/ProgramIntroSection'));
const JudgementSection = lazy(() => import('./components/sections/JudgementSection'));
const PostWeek5Section = lazy(() => import('./components/sections/PostWeek5Section'));
const PhilosophySection = lazy(() => import('./components/sections/PhilosophySection'));
const AboutSection = lazy(() => import('./components/sections/AboutSection'));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection'));
const LogosSection = lazy(() => import('./components/sections/LogosSection'));
const WhoShouldApplySection = lazy(() => import('./components/sections/WhoShouldApplySection'));
const CurriculumSection = lazy(() => import('./components/sections/CurriculumSection'));
const EventsGallerySection = lazy(() => import('./components/sections/EventsGallerySection'));
const FAQSection = lazy(() => import('./components/sections/FAQSection'));
const FinalCTASection = lazy(() => import('./components/sections/FinalCTASection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));
const Footer = lazy(() => import('./components/layout/Footer'));

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const AdminPage = lazy(() => import('./admin/AdminPage').then(module => ({ default: module.AdminPage })));

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
        {/* 2. Hero Section — #1 Priority (Eagerly loaded) */}
        <HeroSection />

        <Suspense fallback={<div className="h-20 w-full bg-[#0A101F]" />}>
          {/* 3. The Mirror — The Problem — #2 */}
          <MirrorSection />

          {/* 4. Program Introduction — AI Product Leadership Studio — #8 */}
          <ProgramIntroSection />

          {/* 5. How Leadership-Level Judgment Gets Built — #9 */}
          <JudgementSection />

          {/* 6 — What Happens Next */}
          <PostWeek5Section />

          {/* 7. Philosophy — Build Product Judgment Under AI — #4 */}
          <PhilosophySection />

          {/* 8. About Pranjal Sarkar — #5 */}
          <AboutSection />

          {/* 9. Testimonials — #6 */}
          <TestimonialsSection />

          {/* 10. Logos Strip — #7 */}
          <LogosSection />

          {/* 11. Who Should Apply */}
          <WhoShouldApplySection />

          {/* 12. Curriculum — #11 */}
          <CurriculumSection />

          {/* 15. Final CTA — #13 */}
          <FinalCTASection />

          {/*13  Events & Speaking Gallery Section */}
          <EventsGallerySection />

          {/* 14. FAQ — #12 */}
          <FAQSection />

          {/* 16. Contact / Apply — #14 */}
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-[#0A101F] flex items-center justify-center text-white">Loading...</div>}>
      <Routes>
        {/* Main website */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        {/* Admin Panel — standalone page (no navbar/footer) */}
        <Route path="/admin" element={<AdminPage />} />

        {/* 404 Catch-all */}
        <Route path="*" element={
          <div className="h-screen flex items-center justify-center bg-black text-white">
            <h1 className="text-3xl font-serif">404 — Page Not Found</h1>
          </div>
        } />
      </Routes>
    </Suspense>
  );
}
