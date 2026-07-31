import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#000001] text-white min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">Terms of Use</h1>
        <p className="text-gray-400 mb-10 text-sm">Last updated: April 2026</p>
        
        <div className="space-y-6 text-gray-300 leading-relaxed text-[15px] md:text-[16px]">
          <p>This page is currently under construction. Please check back later for our full Terms of Use.</p>
          <p>For any immediate questions, please write to <a href="mailto:hello@pranjalsarkar.com" className="text-[#3B82F6] hover:underline">hello@pranjalsarkar.com</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
