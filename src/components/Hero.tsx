import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-100/50 -z-10 select-none tracking-tighter">
        AIGC
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-4 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-4xl font-light text-slate-400 mb-2 uppercase tracking-tight">/ WORK SERIES</h2>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.9]">
            AIGC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">Innovation</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-4 pt-8"
        >
          <span className="px-6 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold shadow-sm">AI Model Rendering</span>
          <span className="px-6 py-2 bg-slate-100 text-slate-400 rounded-full text-sm font-bold">Scene Generation</span>
        </motion.div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center font-bold text-xs text-slate-400">01</div>
          <div className="w-20 h-[1px] bg-slate-200"></div>
          <span className="text-[10px] font-bold uppercase tracking-tight text-slate-400">Featured Series</span>
        </div>
      </div>
    </section>
  );
}
