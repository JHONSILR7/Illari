'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface Props {
  content: Record<string, any>
}

export default function HeroSection({ content }: Props) {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[40vh] sm:min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/images/UNAJMA.png')] bg-[length:122%] sm:bg-[length:100%_120%] bg-center bg-no-repeat"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-8 sm:py-0 mt-4 sm:mt-0">
        {/* Title and subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-none mb-2 sm:mb-4 drop-shadow-lg">
            ILLARI
          </h1>
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-2 sm:mb-5">
            <div className="w-6 sm:w-16 h-px sm:h-0.5 bg-gradient-to-r from-[#FA9A06] to-[#FDCB16] rounded-full" />
            <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-[#FA9A06] to-[#FDCB16] text-[#042881] text-[9px] sm:text-xs font-black rounded-full tracking-wider shadow-lg shadow-[#FA9A06]/20">
              LISTA <span className="text-xs sm:text-lg leading-none">2</span>
            </span>
            <div className="w-6 sm:w-16 h-px sm:h-0.5 bg-gradient-to-r from-[#FDCB16] to-[#FA9A06] rounded-full" />
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-10"
        >
          <Link
            href="/propuestas"
            className="group relative inline-flex items-center gap-1 sm:gap-2 px-4 py-2.5 sm:px-8 sm:py-3.5 bg-gradient-to-r from-[#FA9A06] to-[#FDCB16] text-white font-semibold rounded-lg sm:rounded-xl text-xs sm:text-sm hover:shadow-xl hover:shadow-[#FA9A06]/30 transition-all duration-300 active:scale-[0.97] w-full sm:w-auto justify-center"
          >
            Nuestras propuestas
          </Link>
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
