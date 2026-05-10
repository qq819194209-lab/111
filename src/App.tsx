import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Portfolio from './components/Portfolio';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F9FAFB] flex overflow-hidden">
      {/* Sidebar Navigation */}
      <nav className="w-20 bg-white border-r border-slate-100 hidden md:flex flex-col items-center py-8 gap-12 z-50 sticky top-0 h-screen">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">Z</div>
        <div className="flex flex-col gap-8 flex-1 justify-center">
          <div className="cursor-pointer hover:text-indigo-600 transition-colors flex flex-col items-center gap-1 group">
            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase writing-mode-vertical rotate-180">Cover</span>
          </div>
          <div className="cursor-pointer text-slate-400 hover:text-indigo-600 transition-colors flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold tracking-widest uppercase writing-mode-vertical rotate-180">Profile</span>
          </div>
          <div className="cursor-pointer text-slate-400 hover:text-indigo-600 transition-colors flex flex-col items-center gap-1" onClick={scrollToPortfolio}>
            <span className="text-[10px] font-bold tracking-widest uppercase writing-mode-vertical rotate-180">Index</span>
          </div>
          <div className="cursor-pointer text-slate-400 hover:text-indigo-600 transition-colors flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold tracking-widest uppercase writing-mode-vertical rotate-180">Works</span>
          </div>
        </div>
        <div className="text-slate-400">
          <div className="w-1 h-1 bg-slate-300 rounded-full mb-1"></div>
          <div className="w-1 h-1 bg-slate-300 rounded-full mb-1"></div>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-20 right-0 h-1 bg-indigo-600 origin-left z-50"
          style={{ scaleX }}
        />

        {/* Top Header */}
        <header className={`sticky top-0 right-0 z-40 transition-all duration-500 h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-12 border-b border-slate-50`}>
          <div className="flex gap-12 text-sm font-medium text-slate-500 overflow-x-auto no-scrollbar">
            <span className="text-indigo-600 border-b-2 border-indigo-600 h-20 flex items-center cursor-pointer">AIGC Empowerment</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors h-20 flex items-center whitespace-nowrap">Domestic E-commerce</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors h-20 flex items-center whitespace-nowrap">Cross-border Market</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="bg-slate-100 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600">Available for Project</div>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-indigo-600 transition-colors">Connect</button>
          </div>
        </header>

        <main className="relative z-10">
          <Hero />
          <About />
          <Categories onSelect={scrollToPortfolio} />
          <Portfolio />
        </main>

        <footer className="py-24 px-6 md:px-12 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-serif text-slate-900 font-bold">Let's craft the future.</h3>
              <p className="text-slate-400 text-sm tracking-wide">Available for selective collaborations and innovative ventures.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-24 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
              <div className="space-y-4">
                <p className="text-indigo-600">Socials</p>
                <div className="flex flex-col gap-2">
                  <a href="#" className="hover:text-slate-900 transition-colors">Behance</a>
                  <a href="#" className="hover:text-slate-900 transition-colors">Dribbble</a>
                  <a href="#" className="hover:text-slate-900 transition-colors">Instagram</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-indigo-600">Contact</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:hello@designer.com" className="hover:text-slate-900 transition-colors">hello@designer.com</a>
                  <span>+86 123 4567 8900</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-slate-50 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300">© 2024 SLEEK INTERFACE</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 text-right">ALL RIGHTS RESERVED</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
