import SmoothScroll from '../components/ui/SmoothScroll';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import MirrorSection from '../components/sections/MirrorSection';
import DiagnosisSection from '../components/sections/DiagnosisSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import AboutSection from '../components/sections/AboutSection';
import VideoSection from '../components/sections/VideoSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import LogosSection from '../components/sections/LogosSection';
import ProgramIntroSection from '../components/sections/ProgramIntroSection';
import WhoShouldApplySection from '../components/sections/WhoShouldApplySection';
import JudgementSection from '../components/sections/JudgementSection';
import TakeawaysSection from '../components/sections/TakeawaysSection';
import CurriculumSection from '../components/sections/CurriculumSection';
import EventsGallerySection from '../components/sections/EventsGallerySection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTASection from '../components/sections/FinalCTASection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

/**
 * The main marketing / landing page — assembles all sections.
 */
export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <MirrorSection />
      <DiagnosisSection />
      <PhilosophySection />
      <AboutSection />
      <TestimonialsSection />
      <VideoSection />
      <LogosSection />
      <ProgramIntroSection />
      <WhoShouldApplySection />
      <JudgementSection />
      <TakeawaysSection />
      <CurriculumSection />
      <EventsGallerySection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
