import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { FileText, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

const stats = [
  { label: "Returns Filed", value: 829, suffix: "+", icon: FileText, delay: 0.3},
  { label: "Managed", value: 15, prefix: "₹", suffix: "cr+", icon: ArrowUpRight, delay: 0.1 },
  { label: "Accuracy", value: 99.8, suffix: "%", icon: ShieldCheck, delay: 0.2 },
  { label: "Experience", value: 5, suffix: "Yrs+", icon: Clock, delay: 0.3 },
];

function AnimatedNumber({ value, precision = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(precision).toLocaleString();
      }
    });
  }, [springValue, precision]);

  return <span ref={ref}>0</span>;
}

export default function PremiumStats() {
  return (
    <section className="w-full py-0.1 bg-[rgba(255, 255, 255, 0)]"> {/* Trans White Background */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: stat.delay, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Golden Glow Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#fbbf24] via-[#b45309] to-[#fbbf24] rounded-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="relative h-full flex flex-col items-center justify-center rounded-xl bg-[#0f172a] border border-white/10 p-6 overflow-hidden">
                
                {/* Icon with Floating Animation */}
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-3 p-2 rounded-full bg-gradient-to-tr from-[#fbbf24] to-[#d97706] text-[#020617]"
                >
                  <stat.icon size={20} strokeWidth={2.5} />
                </motion.div>

                {/* Counter */}
                <div className="flex items-baseline text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#fde68a] to-[#b45309]">
                  {stat.prefix && <span className="mr-1">{stat.prefix}</span>}
                  <AnimatedNumber 
                    value={stat.value} 
                    precision={stat.value % 1 === 0 ? 0 : 1} 
                  />
                  <span className="text-sm ml-0.5">{stat.suffix}</span>
                </div>
                
                {/* Label */}
                <p className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-200/60">
                  {stat.label}
                </p>

                {/* Bottom Shine Streak */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-[#fbbf24]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: stat.delay + 0.5, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}