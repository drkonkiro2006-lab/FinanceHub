import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// 1. Assets Imports
// Add an extra ../ to each path
import itrBg from "../../assets/images/services/itr.png";
import gstRegBg from "../../assets/images/services/gst-registration.png";
import gstReturnBg from "../../assets/images/services/gst-returns.png";
import taxPlanningBg from "../../assets/images/services/tax-planning.png";
// import accountingImg from "../../assets/images/services/accounting.png";
// import consultingImg from "../../assets/images/services/consulting.png";

// import itrBg from '../assets/images/services/itr.png'
// import gstRegBg from '../assets/images/services/gst-registration.png'
// import gstReturnBg from '../assets/images/services/gst-returns.png'
// import taxPlanningBg from '../assets/images/services/tax-planning.png'

// 2. Data Array
const serviceList = [
  {
    slug: 'Tax-Calculation',
    title: 'Income Tax Calculator',
    bg: itrBg,
    desc: 'Easily estimate your tax liability with our free, user-friendly tool.',
    price: '₹0'
  },
  {
    slug: 'itr-filing',
    title: 'Income Tax Return Filing',
    desc: 'Accurate, compliant ITR filing with expert guidance.',
    price: '₹1,499',
    bg: itrBg
  },
  {
    slug: 'gst-registration',
    title: 'GST Registration',
    desc: 'Fast, error-free GST registration with documentation.',
    price: '₹2,999',
    bg: gstRegBg
  },
  {
    slug: 'gst-returns',
    title: 'GST Returns',
    desc: 'Monthly/quarterly GST returns filing and reconciliation.',
    price: '₹1,999',
    bg: gstReturnBg
  },
  {
    slug: 'tax-planning',
    title: 'Tax Planning & Advisory',
    desc: 'Optimize taxes with proactive advisory and strategy.',
    price: '₹4,999',
    bg: taxPlanningBg
  },
  {
    slug: 'accounting-compliance',
    title: 'Accounting & Compliance',
    bg: taxPlanningBg,
    desc: 'Stay audit-ready with comprehensive bookkeeping and statutory compliance management.',
    price: '₹3,999'
  },
  {
    slug: 'business-consulting',
    title: 'Business & Financial Consulting',
    bg: taxPlanningBg,
    desc: 'Unlock growth potential with data-driven strategies and financial forecasting.',
    price: '₹7,999'
  }
];

// 3. Icons
const ChevronLeftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6" /></svg>
);
const ChevronRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

// 4. Main Component
export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayDelay = 4000;

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % serviceList.length);
  };

  const changeSlide = (newIndex) => {
    const newSafeIndex = (newIndex + serviceList.length) % serviceList.length;
    setActiveIndex(newSafeIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => clearInterval(autoplayIntervalRef.current);
  }, [isPaused, activeIndex]);

  const onDragEnd = (event, info) => {
    const dragThreshold = 75;
    if (info.offset.x > dragThreshold) changeSlide(activeIndex - 1);
    else if (info.offset.x < -dragThreshold) changeSlide(activeIndex + 1);
  };

  return (
    <section className="w-full py-12 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-[rgb(29,56,132)] dark:text-[rgb(220,182,101)]">
            Popular Services
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Expert solutions for your financial needs</p>
        </div>
        <Link to="/services" className="text-[rgb(29,56,132)] dark:text-[rgb(220,182,101)] font-medium hover:underline">
          View all
        </Link>
      </div>

      <div 
        className="relative h-[450px] md:h-[550px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={onDragEnd}
        >
          {serviceList.map((service, index) => (
            <Card 
              key={service.slug} 
              service={service} 
              index={index} 
              activeIndex={activeIndex} 
              totalCards={serviceList.length} 
            />
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-6 mt-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => changeSlide(activeIndex - 1)}
            className="p-3 rounded-full border border-[rgb(29,56,132)] dark:border-[rgb(220,182,101)] text-[rgb(29,56,132)] dark:text-[rgb(220,182,101)] hover:bg-[rgb(29,56,132)] hover:text-white dark:hover:bg-[rgb(220,182,101)] dark:hover:text-black transition-all"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {serviceList.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  activeIndex === index 
                  ? "w-8 bg-[rgb(29,56,132)] dark:bg-[rgb(220,182,101)]" 
                  : "w-2 bg-gray-300 dark:bg-neutral-800"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={() => changeSlide(activeIndex + 1)}
            className="p-3 rounded-full border border-[rgb(29,56,132)] dark:border-[rgb(220,182,101)] text-[rgb(29,56,132)] dark:text-[rgb(220,182,101)] hover:bg-[rgb(29,56,132)] hover:text-white dark:hover:bg-[rgb(220,182,101)] dark:hover:text-black transition-all"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

// 5. Helper Sub-component
function Card({ service, index, activeIndex, totalCards }) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) offset -= totalCards;
  if (offset < -totalCards / 2) offset += totalCards;

  const isActive = offset === 0;
  const isVisible = Math.abs(offset) <= 1.5;

  return (
    <motion.div
      className="absolute w-[300px] md:w-[400px] h-[400px] md:h-[480px]"
      animate={{
        x: `${offset * 110}%`,
        scale: isActive ? 1 : 0.85,
        zIndex: totalCards - Math.abs(offset),
        opacity: isVisible ? 1 : 0,
        rotateY: offset * 15,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-2 border-transparent dark:border-[rgb(220,182,101)]/20">
        <img 
          src={service.bg} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
          <motion.div
            initial={false}
            animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
          >
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-200 line-clamp-2 mb-4">{service.desc}</p>
            
            <div className="flex items-center justify-between mt-2">
              <span className="text-xl font-bold text-[rgb(220,182,101)]">
                {service.price}
              </span>
              <div className="flex gap-3">
                <Link 
                  to={`/services/${service.slug}`}
                  className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 text-sm transition"
                >
                  Details
                </Link>
                <Link 
                  to="/contact"
                  className="px-4 py-2 rounded-lg bg-[rgb(29,56,132)] dark:bg-[rgb(220,182,101)] text-white dark:text-black font-semibold text-sm transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}