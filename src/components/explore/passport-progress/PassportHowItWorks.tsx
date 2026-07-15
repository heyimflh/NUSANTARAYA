import React from "react";
import { PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Bookmark, Map, Stamp } from "lucide-react";

type PassportHowItWorksProps = {
  summary: PassportProgressSummary;
};

export const PassportHowItWorks: React.FC<PassportHowItWorksProps> = ({ summary }) => {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Determine active step based on progress
  let activeStep = 1;
  if (summary.completedCount > 0) activeStep = 3;
  else if (summary.startedCount > 0) activeStep = 2;

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Rencanakan",
      description: "Simpan provinsi dan perjalanan yang ingin kamu buka berikutnya.",
      icon: <Bookmark className="w-5 h-5" />,
      count: summary.plannedCount,
      countLabel: "provinsi"
    },
    {
      id: 2,
      number: "02",
      title: "Jelajahi",
      description: "Buka Atlas untuk memulai eksplorasi sebuah provinsi.",
      icon: <Map className="w-5 h-5" />,
      count: summary.startedCount,
      countLabel: "sedang dijelajahi"
    },
    {
      id: 3,
      number: "03",
      title: "Kumpulkan",
      description: "Selesaikan pengalaman dan dapatkan stempel.",
      icon: <Stamp className="w-5 h-5" />,
      count: summary.completedCount,
      countLabel: "stempel"
    }
  ];

  return (
    <div className="w-full px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-24">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row relative"
      >
        {/* Desktop Connecting Line */}
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-[#D8C8A8] -z-10" />

        {/* Mobile Connecting Line */}
        <div className="md:hidden absolute top-0 bottom-12 left-[38px] w-[1px] bg-[#D8C8A8] -z-10" />

        {steps.map((step) => {
          const isActive = activeStep === step.id;
          
          return (
            <motion.div 
              key={step.id} 
              variants={item}
              className="flex-1 flex flex-row md:flex-col relative group pb-10 md:pb-0"
            >
              {/* Node Marker */}
              <div className="shrink-0 flex justify-center w-20 md:w-full md:mb-6">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-500",
                  isActive ? "bg-[#B85C38] border-[#B85C38] text-[#FFF9EC] shadow-[0_0_20px_rgba(184,92,56,0.3)]" : "bg-[#FFF9EC] border-[#D8C8A8] text-[#776A5D] group-hover:border-[#B85C38] group-hover:text-[#B85C38]"
                )}>
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 ml-4 md:ml-0 md:text-center pt-2 md:pt-0">
                <div className="flex items-baseline md:justify-center gap-2 mb-3">
                  <span className="font-serif text-2xl text-[#C87532] font-bold opacity-80">{step.number}</span>
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#2C2118]">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-sm text-[#776A5D] leading-relaxed mb-5 md:max-w-[240px] md:mx-auto">
                  {step.description}
                </p>

                <div className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-medium border transition-colors duration-500 uppercase tracking-widest",
                  isActive ? "bg-[#B85C38]/10 text-[#7A302B] border-[#B85C38]/30" : "bg-transparent text-[#776A5D] border-[#EFE1C5]"
                )}>
                  <span className="font-bold">{step.count}</span> {step.countLabel}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
