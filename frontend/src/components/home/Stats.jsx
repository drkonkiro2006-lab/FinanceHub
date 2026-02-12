// import React, { useEffect, useRef } from 'react';
// import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
// import { FileText, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

// const stats = [
//   { label: "Returns Filed", value: 829, suffix: "+", icon: FileText, delay: 0.3},
//   { label: "Managed", value: 15, prefix: "₹", suffix: "cr+", icon: ArrowUpRight, delay: 0.1 },
//   { label: "Accuracy", value: 99.8, suffix: "%", icon: ShieldCheck, delay: 0.2 },
//   { label: "Experience", value: 5, suffix: "Yrs+", icon: Clock, delay: 0.3 },
// ];

// function AnimatedNumber({ value, precision = 0 }) {
//   const ref = useRef(null);
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) motionValue.set(value);
//   }, [isInView, value, motionValue]);

//   useEffect(() => {
//     springValue.on("change", (latest) => {
//       if (ref.current) {
//         ref.current.textContent = latest.toFixed(precision).toLocaleString();
//       }
//     });
//   }, [springValue, precision]);

//   return <span ref={ref}>0</span>;
// }

// export default function PremiumStats() {
//   return (
//     <section className="w-full py-0.1 bg-[rgba(255, 255, 255, 0)]"> {/* Trans White Background */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30, scale: 0.9 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: stat.delay, ease: [0.23, 1, 0.32, 1] }}
//               whileHover={{ y: -5 }}
//               className="relative group"
//             >
//               {/* Golden Glow Effect */}
//               <div className="absolute -inset-[1px] bg-gradient-to-br from-[#fbbf24] via-[#b45309] to-[#fbbf24] rounded-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
              
//               <div className="relative h-full flex flex-col items-center justify-center rounded-xl bg-[#0f172a] border border-white/10 p-6 overflow-hidden">
                
//                 {/* Icon with Floating Animation */}
//                 <motion.div 
//                   animate={{ y: [0, -4, 0] }}
//                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                   className="mb-3 p-2 rounded-full bg-gradient-to-tr from-[#fbbf24] to-[#d97706] text-[#020617]"
//                 >
//                   <stat.icon size={20} strokeWidth={2.5} />
//                 </motion.div>

//                 {/* Counter */}
//                 <div className="flex items-baseline text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#fde68a] to-[#b45309]">
//                   {stat.prefix && <span className="mr-1">{stat.prefix}</span>}
//                   <AnimatedNumber 
//                     value={stat.value} 
//                     precision={stat.value % 1 === 0 ? 0 : 1} 
//                   />
//                   <span className="text-sm ml-0.5">{stat.suffix}</span>
//                 </div>
                
//                 {/* Label */}
//                 <p className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-200/60">
//                   {stat.label}
//                 </p>

//                 {/* Bottom Shine Streak */}
//                 <motion.div 
//                   className="absolute bottom-0 left-0 h-[2px] bg-[#fbbf24]"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   transition={{ delay: stat.delay + 0.5, duration: 1 }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { FileText, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

// --- DATA ---
const stats = [
  { label: "Returns Filed", value: 829, suffix: "+", icon: FileText, delay: 0.1 },
  { label: "Managed", value: 15, prefix: "₹", suffix: "cr+", icon: ArrowUpRight, delay: 0.2 },
  { label: "Accuracy", value: 99.8, suffix: "%", icon: ShieldCheck, delay: 0.3 },
  { label: "Experience", value: 5, suffix: "Yrs+", icon: Clock, delay: 0.4 },
];

const bengaliFirstNames = [
  "Arjun", "Sohini", "Pritam", "Ananya", "Rahul", "Ishita", "Ayan", "Moumita",
  "Sourav", "Tiyasha", "Deepak", "Riya", "Subho", "Payel", "Joy", "Sneha",
  "Abhi", "Pooja", "Vikram", "Tanwi", "Nilam", "Sagar", "Bithi", "Sayan",
  "Rupak", "Tania", "Amit", "Koyel", "Rohit", "Bristi", "Sumit", "Aditi",
  "Bikash", "Mousumi", "Ujjwal", "Debasree", "Partha", "Keya", "Kushal", "Rina",
  "Biplab", "Tumpa", "Sujit", "Lipi", "Prasun", "Sampa", "Goutam", "Nipa", "Sanjoy", "Rita"
];

// --- COMPONENTS ---

function AnimatedNumber({ value, precision = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(precision).toLocaleString();
      }
    });
  }, [springValue, precision]);

  return <span ref={ref}>0</span>;
}

function NetworkVisualization() {
  const [containerSize, setContainerSize] = useState(500);
  
  const dimensions = useMemo(() => {
    const scale = containerSize / 700;
    return {
      rings: [
        { radius: Math.floor(260 * scale), count: 12 }, // Outer ring (12 people)
        { radius: Math.floor(140 * scale), count: 8 },  // Inner ring (8 people)
      ],
      avatarSize: Math.floor(55 * scale), // Increased size for 20 nodes
      centerX: containerSize / 2,
      centerY: containerSize / 2
    };
  }, [containerSize]);

  useEffect(() => {
    const updateSize = () => {
      const parent = document.getElementById('network-wrapper');
      if (parent) {
        const size = Math.min(parent.offsetWidth, parent.offsetHeight) - 40; 
        setContainerSize(size);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const avatars = useMemo(() => {
    let list = [];
    let nameIdx = 0;
    dimensions.rings.forEach((ring, ringIdx) => {
      for (let i = 0; i < ring.count; i++) {
        list.push({
          id: `node-${ringIdx}-${i}`,
          name: bengaliFirstNames[nameIdx % bengaliFirstNames.length],
          image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${nameIdx}&backgroundColor=b6e3f4,c0aede,d1d4f9`,
          ringRadius: ring.radius,
          angle: (i / ring.count) * 2 * Math.PI + (ringIdx * 0.8)
        });
        nameIdx++;
      }
    });
    return list;
  }, [dimensions]);

  const allPositions = useMemo(() => {
    const pos = { center: { cx: dimensions.centerX, cy: dimensions.centerY } };
    avatars.forEach(a => {
      pos[a.id] = {
        cx: dimensions.centerX + a.ringRadius * Math.cos(a.angle),
        cy: dimensions.centerY + a.ringRadius * Math.sin(a.angle)
      };
    });
    return pos;
  }, [dimensions, avatars]);

  const [activeConnections, setActiveConnections] = useState([]);

  useEffect(() => {
    // Increased frequency and number of lines
    const interval = setInterval(() => {
      const ids = [...avatars.map(a => a.id), 'center'];
      const pairs = Array.from({ length: 6 }, () => ({ // 6 simultaneous lines
        from: ids[Math.floor(Math.random() * ids.length)],
        to: ids[Math.floor(Math.random() * ids.length)]
      })).filter(p => p.from !== p.to);
      setActiveConnections(pairs);
    }, 1200); // Faster animation
    return () => clearInterval(interval);
  }, [avatars]);

  return (
    <div 
      id="network-wrapper" 
      className="relative flex items-center justify-center w-full h-full min-h-[400px] lg:min-h-[600px] border-2 border-blue-500/30 dark:border-yellow-500/40 rounded-3xl backdrop-blur-sm overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(136, 174, 225, 0.7) 0%, rgba(255, 253, 236, 1) 100%)'
      }}
    >
      <div className="absolute inset-0 hidden dark:block" 
        style={{
          background: 'linear-gradient(135deg, rgba(120, 124, 139, 1) 0%, rgba(129, 97, 43, 1) 100%)'
        }} 
      />

      <div className="relative z-10" style={{ width: containerSize, height: containerSize }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Add a glow filter for bolder rays */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <AnimatePresence>
            {activeConnections.map((conn, idx) => {
              const from = allPositions[conn.from], to = allPositions[conn.to];
              return from && to && (
                <motion.line 
                  key={`${idx}-${conn.from}`} 
                  x1={from.cx} y1={from.cy} 
                  x2={to.cx} y2={to.cy} 
                  className="stroke-blue-500 dark:stroke-yellow-400" 
                  strokeWidth="3" // Much bolder lines
                  style={{ filter: 'url(#glow)' }}
                  initial={{ pathLength: 0, opacity: 0 }} 
                  animate={{ pathLength: 1, opacity: 0.8 }} 
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              );
            })}
          </AnimatePresence>
        </svg>

        <div className="absolute z-20" style={{ left: dimensions.centerX, top: dimensions.centerY, transform: 'translate(-50%, -50%)' }}>
          <div className="rounded-full border-2 border-blue-600 dark:border-yellow-500 bg-white dark:bg-slate-800 shadow-xl p-0.5">
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center font-black text-blue-600 dark:text-yellow-500 text-[12px] tracking-tighter">
              HUB
            </div>
          </div>
        </div>

        {avatars.map(avatar => {
          const pos = allPositions[avatar.id];
          return (
            <div key={avatar.id} className="absolute flex flex-col items-center pointer-events-none" 
                 style={{ left: pos.cx, top: pos.cy, transform: 'translate(-50%, -50%)' }}>
              <span className="bg-white/95 dark:bg-slate-800 px-2 py-1 rounded text-[10px] font-black mb-1 text-blue-800 dark:text-yellow-100 border border-blue-200 dark:border-slate-700 shadow-md">
                {avatar.name}
              </span>
              <div className="rounded-full border-2 border-blue-400 dark:border-white/30 overflow-hidden bg-white dark:bg-slate-800 shadow-lg" 
                   style={{ width: dimensions.avatarSize, height: dimensions.avatarSize }}>
                <img src={avatar.image} className="w-full h-full object-cover" alt={avatar.name}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default function PremiumStats() {
  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="w-full h-[500px] lg:h-auto"
        >
          <NetworkVisualization />
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:gap-8 content-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: stat.delay }}
              className="relative group aspect-square"
            >
              <div className="absolute -inset-[2px] bg-blue-500/20 dark:bg-yellow-500/30 rounded-3xl opacity-100 border-2 border-blue-500/40 dark:border-yellow-500/40" />
              
              <div className="relative h-full flex flex-col items-center justify-center rounded-3xl bg-white dark:bg-[#0f172a] p-8 shadow-2xl dark:shadow-none">
                
                <div className="mb-6 p-4 rounded-full bg-blue-50 dark:bg-yellow-500/10 text-blue-600 dark:text-yellow-500">
                  <stat.icon size={32} strokeWidth={2.5} />
                </div>

                <div className="flex items-baseline text-4xl md:text-6xl font-black text-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-yellow-200 dark:to-yellow-600">
                  {stat.prefix && <span className="mr-1 text-3xl font-bold">{stat.prefix}</span>}
                  <AnimatedNumber value={stat.value} precision={stat.value % 1 === 0 ? 0 : 1} />
                  <span className="text-xl md:text-2xl ml-1 font-extrabold text-blue-500 dark:text-yellow-500/80">{stat.suffix}</span>
                </div>
                
                <p className="mt-5 text-[14px] md:text-[16px] font-black uppercase tracking-widest text-slate-400 dark:text-blue-100/40 text-center">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}