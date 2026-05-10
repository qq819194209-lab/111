import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 px-6 md:px-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[3rem] bg-slate-50 shadow-2xl shadow-indigo-100">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Profile" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-indigo-600 uppercase tracking-widest">/ ARTIST PROFILE</h2>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">Creativity</span> & AI Efficiency
            </h1>
          </div>
          
          <p className="text-slate-500 leading-relaxed font-medium text-lg lg:text-xl">
            专注于 <span className="text-slate-900">3D-AIGC</span> 工作流在现代电商中的应用，为全球品牌提供高保真视觉解决方案。致力于在技术边界寻找美学的最优解。
          </p>

          <div className="grid grid-cols-2 gap-8 pt-10 border-t border-slate-100">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold mb-3">Core Focus</h4>
              <p className="text-sm font-black text-slate-900">AIGC Vision, UI/UX, Global E-com</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold mb-3">Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm font-black text-slate-900">Available for Global Project</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative text in background */}
      <div className="absolute -bottom-20 -left-10 text-[15rem] font-bold text-slate-50/80 -z-0 select-none">
        PROFILE
      </div>
    </section>
  );
}
