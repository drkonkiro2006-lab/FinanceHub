import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { FileText, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

// --- DATA remains the same ---
const stats = [
  { label: "Returns Filed", value: 829, suffix: "+", icon: FileText, delay: 0.1 },
  { label: "Managed", value: 15, prefix: "₹", suffix: "cr+", icon: ArrowUpRight, delay: 0.2 },
  { label: "Accuracy", value: 99.8, suffix: "%", icon: ShieldCheck, delay: 0.3 },
  { label: "Experience", value: 5, suffix: "Yrs+", icon: Clock, delay: 0.4 },
];

const bengaliFirstNames = [
  "Arjun", "Sohini", "Pritam", "Ananya", "Rahul", "Ishita", "Ayan", "Moumita",
  "Sourav", "Tiyasha", "Deepak", "Riya", "Subho", "Payel", "Joy", "Sneha",
  "Abhi", "Pooja", "Vikram", "Tanwi"
];

function AnimatedNumber({ value, precision = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, value, motionValue]);
  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = latest.toFixed(precision).toLocaleString();
    });
  }, [springValue, precision]);
  return <span ref={ref}>0</span>;
}

function NetworkVisualization() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const dimensions = useMemo(() => {
    if (size.width === 0) return null;
    return {
      // Flattened Y-radius (0.3 and 0.15) to keep nodes within the small height
      rings: [
        { rx: size.width * 0.42, ry: size.height * 0.32, count: 12 }, 
        { rx: size.width * 0.22, ry: size.height * 0.18, count: 8 }
      ],
      avatarSize: Math.min(size.height * 0.18, 42),
      centerX: size.width / 2,
      centerY: size.height / 2
    };
  }, [size]);

  useEffect(() => {
    const updateSize = () => {
      const parent = document.getElementById('network-inner-container');
      if (parent) setSize({ width: parent.offsetWidth, height: parent.offsetHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const avatars = useMemo(() => {
    if (!dimensions) return [];
    let list = [];
    let nameIdx = 0;
    dimensions.rings.forEach((ring, ringIdx) => {
      for (let i = 0; i < ring.count; i++) {
        const angle = (i / ring.count) * 2 * Math.PI + (ringIdx * 0.8);
        list.push({
          id: `node-${ringIdx}-${i}`,
          name: bengaliFirstNames[nameIdx % bengaliFirstNames.length],
          image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${nameIdx}&backgroundColor=b6e3f4,c0aede,d1d4f9`,
          cx: dimensions.centerX + ring.rx * Math.cos(angle),
          cy: dimensions.centerY + ring.ry * Math.sin(angle)
        });
        nameIdx++;
      }
    });
    return list;
  }, [dimensions]);

  const allPositions = useMemo(() => {
    if (!dimensions) return {};
    const pos = { center: { cx: dimensions.centerX, cy: dimensions.centerY } };
    avatars.forEach(a => { pos[a.id] = { cx: a.cx, cy: a.cy }; });
    return pos;
  }, [dimensions, avatars]);

  const [activeConnections, setActiveConnections] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const ids = [...avatars.map(a => a.id), 'center'];
      if (ids.length < 2) return;
      const pairs = Array.from({ length: 5 }, () => ({
        from: ids[Math.floor(Math.random() * ids.length)],
        to: ids[Math.floor(Math.random() * ids.length)]
      })).filter(p => p.from !== p.to);
      setActiveConnections(pairs);
    }, 1200);
    return () => clearInterval(interval);
  }, [avatars]);

  return (
    <div id="network-inner-container" className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs><filter id="ray-glow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs>
        <AnimatePresence>
          {activeConnections.map((conn, idx) => {
            const from = allPositions[conn.from], to = allPositions[conn.to];
            return from && to && (
              <motion.line key={idx} x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy} 
                className="stroke-blue-500 dark:stroke-yellow-400" strokeWidth="2"
                style={{ filter: 'url(#ray-glow)' }}
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }} exit={{ opacity: 0 }}
              />
            );
          })}
        </AnimatePresence>
      </svg>

      {dimensions && (
        <div className="relative z-20 w-full h-full">
          <div className="absolute" style={{ left: dimensions.centerX, top: dimensions.centerY, transform: 'translate(-50%, -50%)' }}>
            <div className="rounded-full border-2 border-blue-600 dark:border-yellow-500 bg-white dark:bg-slate-800 p-0.5 shadow-lg">
              <div className="w-7 h-7 flex items-center justify-center font-black text-blue-600 dark:text-yellow-500 text-[9px]">HUB</div>
            </div>
          </div>
          {avatars.map(avatar => (
            <div key={avatar.id} className="absolute flex flex-col items-center pointer-events-none" 
                 style={{ left: avatar.cx, top: avatar.cy, transform: 'translate(-50%, -50%)' }}>
              <span className="bg-white/90 dark:bg-slate-800 px-1 rounded text-[7px] font-black mb-0.5 text-blue-700 dark:text-yellow-100 border border-blue-100 dark:border-slate-700 shadow-sm">
                {avatar.name}
              </span>
              <div className="rounded-full border border-blue-300 dark:border-white/20 overflow-hidden bg-white dark:bg-slate-800 shadow-sm" 
                   style={{ width: dimensions.avatarSize, height: dimensions.avatarSize }}>
                <img src={avatar.image} className="w-full h-full object-cover" alt={avatar.name}/>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PremiumStats() {
  return (
    <section className="w-full bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* items-stretch is the key to matching heights */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 items-stretch">
          
          {/* Left: Network Box matches the grid height */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="relative border-2 border-blue-500/30 dark:border-yellow-500/40 rounded-3xl overflow-hidden p-4"
            style={{ background: 'linear-gradient(135deg, rgba(136, 174, 225, 0.4) 0%, rgba(255, 253, 236, 0.6) 100%)' }}
          >
            {/* Dark Theme Gradient */}
            <div className="absolute inset-0 hidden dark:block -z-10" 
                 style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(45, 30, 5, 1) 100%)' }} />
            
            <NetworkVisualization />
          </motion.div>

          {/* Right: Stats Grid (Defines the section height) */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="relative group flex flex-col justify-center rounded-2xl bg-white dark:bg-[#0f172a] p-5 border border-blue-500/20 dark:border-yellow-500/20 shadow-lg dark:shadow-none min-h-[140px]"
              >
                <div className="mb-2 p-1.5 w-fit rounded-full bg-blue-50 dark:bg-yellow-500/10 text-blue-600 dark:text-yellow-500">
                  <stat.icon size={18} strokeWidth={2.5} />
                </div>
                <div className="flex items-baseline text-2xl md:text-3xl font-black text-blue-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-yellow-200 dark:to-yellow-600">
                  {stat.prefix && <span className="mr-0.5 text-lg font-bold">{stat.prefix}</span>}
                  <AnimatedNumber value={stat.value} precision={stat.value % 1 === 0 ? 0 : 1} />
                  <span className="text-sm ml-0.5 font-extrabold text-blue-500 dark:text-yellow-500/80">{stat.suffix}</span>
                </div>
                <p className="mt-1 text-[10px] font-black uppercase tracking-tight text-slate-400 dark:text-blue-100/40">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}