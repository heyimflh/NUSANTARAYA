"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Map } from "lucide-react"

export function JourneyCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full mt-12 md:mt-20 flex flex-col items-center text-center max-w-2xl mx-auto px-4"
    >
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
        Siap mengikuti alurnya?
      </h3>
      <p className="text-muted-foreground text-sm md:text-base mb-8">
        Mulai dari Nusa Map dan biarkan setiap provinsi membawamu ke cerita, rasa, perjalanan, dan pengalaman baru.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          href="/map"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          Mulai Jelajah
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/map"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-foreground border border-input font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
        >
          <Map className="w-4 h-4" />
          Lihat Peta Interaktif
        </Link>
      </div>
    </motion.div>
  )
}
