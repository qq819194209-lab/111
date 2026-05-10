import { motion } from 'motion/react';
import { Cpu, ShoppingBag, Globe } from 'lucide-react';

const categories = [
  {
    id: 'AIGC',
    title: 'AIGC 赋能',
    en: 'AIGC EMPOWERMENT',
    icon: <Cpu size={24} />,
    desc: 'Specialize in 3D-AIGC workflows for modern e-commerce, providing high-fidelity visual solutions.',
    className: 'bg-indigo-600 text-white'
  },
  {
    id: 'DomesticEcom',
    title: '国内电商',
    en: 'DOMESTIC E-COMMERCE',
    icon: <ShoppingBag size={24} />,
    desc: '深度洞察国内消费市场，打造高转化的新零售视觉系统。',
    className: 'bg-white text-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50'
  },
  {
    id: 'CrossBorderEcom',
    title: '跨境电商',
    en: 'CROSS-BORDER',
    icon: <Globe size={24} />,
    desc: '全球化视野适配多元文化，助力品牌全链路出海。',
    className: 'bg-white text-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50'
  }
];

export default function Categories({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-indigo-600 uppercase tracking-widest mb-4">/ SERVICE INDEX</h2>
            <h1 className="text-5xl font-black tracking-tight text-slate-900">Vertical <span className="italic font-serif font-light text-slate-400">Expertise</span></h1>
          </div>
          <div className="hidden lg:block w-1/3 h-[1px] bg-slate-200 mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onSelect(cat.id)}
              className={`group p-10 cursor-pointer rounded-[2.5rem] transition-all duration-500 overflow-hidden relative flex flex-col justify-between h-[450px] ${cat.className}`}
            >
              <div className="relative z-10">
                <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${cat.id === 'AIGC' ? 'text-indigo-200' : 'text-slate-400'}`}>Artist Insight</p>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold leading-tight">{cat.title}</h3>
                  <p className={`text-sm leading-relaxed opacity-80 ${cat.id === 'AIGC' ? 'text-indigo-50' : 'text-slate-600'}`}>
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-xs ${cat.id === 'AIGC' ? 'border-indigo-400 text-indigo-200' : 'border-slate-200 text-slate-400'}`}>0{idx + 1}</div>
                <div className={`h-[1px] flex-1 ${cat.id === 'AIGC' ? 'bg-indigo-400' : 'bg-slate-200'}`}></div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">View Portfolio</span>
              </div>

              {/* Decorative elements */}
              {cat.id === 'AIGC' && (
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
