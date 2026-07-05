import { motion } from "framer-motion";

export function PillarClosingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[32px] w-full max-w-5xl mx-auto mt-16 bg-white/10 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
    >
      {/* Subtle Apple-like inner glow / specular highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-transparent pointer-events-none" />
      
      {/* Minimal Noise for tactile texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-darken pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />

      <div className="relative z-10 p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        
        {/* Text Section */}
        <div className="max-w-2xl text-center md:text-left space-y-5">
          <div className="inline-flex items-center gap-3 mb-2 justify-center md:justify-start w-full">
            <span className="w-8 h-[1.5px] bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.3em] uppercase">Jelajahi Peta</span>
            <span className="w-8 h-[1.5px] bg-[#C9A84C] md:hidden" />
          </div>
          
          <h3 
            className="font-serif text-3xl md:text-[40px] font-medium leading-[1.1] tracking-wide"
            style={{ color: "#111827" }}
          >
            Semua pilar terhubung dalam satu pengalaman.
          </h3>
          
          <p 
            className="text-base md:text-[17px] leading-relaxed font-normal pt-2 max-w-xl mx-auto md:mx-0"
            style={{ color: "#4B5563" }}
          >
            Dari peta, pengguna bisa masuk ke cerita, kuliner, destinasi, arsip budaya, rute perjalanan, hingga masa depan digital Nusantara.
          </p>
        </div>

        {/* Apple Style Dark CTA Button */}
        <div className="relative z-10 shrink-0">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group/btn relative inline-flex items-center justify-center gap-4 px-4 py-3 pr-8 rounded-full bg-[#111827] text-white cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_8px_20px_rgba(17,24,39,0.25)] hover:bg-black"
          >
            {/* Circular Arrow Badge */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/15 text-white flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            {/* Button Text */}
            <span className="relative z-10 text-[12px] font-bold uppercase tracking-[0.15em] pt-0.5">Mulai Jelajah</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
