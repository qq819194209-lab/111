import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Category, WorkItem, CATEGORIES, SUB_CATEGORIES } from '../types';

const INITIAL_WORKS: WorkItem[] = [
  { id: '1', title: 'Cyberpunk Girl', category: 'AIGC', subCategory: 'AI-Model', imageUrl: 'https://images.unsplash.com/photo-1678912852701-9154929ab232?q=80&w=2070&auto=format&fit=crop', description: 'AI generated futuristic fashion model.' },
  { id: '2', title: 'Mountain Sanctuary', category: 'AIGC', subCategory: 'AI-Scene', imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1975&auto=format&fit=crop', description: 'Serene AI environment design.' },
  { id: '3', title: 'Modern Watch Ad', category: 'DomesticEcom', imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop', description: 'Visual campaign for domestic brand.' },
  { id: '4', title: 'Outdoor Gear', category: 'CrossBorderEcom', imageUrl: 'https://images.unsplash.com/photo-1533681904393-9ab6eba7b390?q=80&w=1932&auto=format&fit=crop', description: 'Web design for global outdoor market.' },
  { id: '5', title: 'Virtual Runway', category: 'AIGC', subCategory: 'AI-Model', imageUrl: 'https://images.unsplash.com/photo-1539109132314-d49c02d21295?q=80&w=1976&auto=format&fit=crop', description: 'AI-assisted fashion sequence.' },
  { id: '6', title: 'Desert Oasis', category: 'AIGC', subCategory: 'AI-Scene', imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop', description: 'Cinematic AI landscape.' },
  { id: '7', title: 'Organic Skincare', category: 'DomesticEcom', imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1974&auto=format&fit=crop', description: 'Product photography & layout.' },
  { id: '8', title: 'Nordic Furniture', category: 'CrossBorderEcom', imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop', description: 'E-commerce UI for premium furniture.' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [activeSubTab, setActiveSubTab] = useState<string>('All');

  const filteredWorks = useMemo(() => {
    return INITIAL_WORKS.filter(work => {
      const matchCategory = activeTab === 'All' || work.category === activeTab;
      const matchSubCategory = activeTab !== 'AIGC' || activeSubTab === 'All' || work.subCategory === activeSubTab;
      return matchCategory && matchSubCategory;
    });
  }, [activeTab, activeSubTab]);

  const handleTabChange = (tab: Category) => {
    setActiveTab(tab);
    setActiveSubTab('All');
  };

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">Selected Works</span>
          <h2 className="text-5xl font-serif">Portfolio <span className="text-zinc-200">/</span> 2024</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id as Category)}
                className={`px-6 py-2 text-sm uppercase tracking-widest rounded-full transition-all duration-300 ${
                  activeTab === cat.id 
                    ? 'bg-zinc-900 text-white shadow-lg' 
                    : 'bg-zinc-50 text-zinc-400 hover:bg-zinc-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Subfilters for AIGC */}
          <AnimatePresence mode="wait">
            {activeTab === 'AIGC' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-6 border-b border-zinc-100 pb-2"
              >
                <button 
                  onClick={() => setActiveSubTab('All')}
                  className={`text-xs uppercase tracking-widest transition-colors ${activeSubTab === 'All' ? 'text-zinc-900 border-b border-zinc-900' : 'text-zinc-400'}`}
                >
                  全部 AIGC
                </button>
                {SUB_CATEGORIES.AIGC.map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubTab(sub.id)}
                    className={`text-xs uppercase tracking-widest transition-colors ${activeSubTab === sub.id ? 'text-zinc-900 border-b border-zinc-900' : 'text-zinc-400'}`}
                  >
                    {sub.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500"
              >
                <div className="flex-1 bg-slate-50 flex items-center justify-center p-6 sm:p-10 relative overflow-hidden h-[350px]">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <p className="text-white text-xs font-bold uppercase tracking-widest">{work.subCategory || 'Featured'}</p>
                  </div>
                </div>

                <div className="p-8 flex justify-between items-center bg-white">
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{work.category}</p>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">{work.title}</h3>
                  </div>
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Placeholder */}
        <div className="flex justify-center pt-20">
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 cursor-pointer hover:text-slate-900 transition-colors">Prev</span>
            <div className="flex gap-4">
              <span className="text-xs font-black text-indigo-600 border-b-2 border-indigo-600">01</span>
              <span className="text-xs font-bold text-slate-300">02</span>
              <span className="text-xs font-bold text-slate-300">03</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900 cursor-pointer hover:text-indigo-600 transition-colors">Next Series</span>
          </div>
        </div>
      </div>
    </section>
  );
}
