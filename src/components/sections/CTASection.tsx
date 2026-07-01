'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#042881] via-[#0553DB] to-[#042881]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#FA9A06]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(250,154,6,0.2)',
                '0 0 0 20px rgba(250,154,6,0)',
                '0 0 0 0 rgba(250,154,6,0)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#FA9A06]/30 mx-auto mb-5 shadow-lg"
          >
            <Image src="/logo.jpeg" alt="ILLARI" fill className="object-cover" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            El amanecer está cerca
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            Únete a nosotros para construir una UNAJMA mejor. Tu voto es la semilla del cambio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/candidatos"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#FA9A06] to-[#FDCB16] text-white font-semibold rounded-xl text-xs sm:text-sm hover:shadow-xl hover:shadow-[#FA9A06]/25 transition-all duration-300 active:scale-[0.97] w-full sm:w-auto justify-center"
            >
              <span>Conoce a tu candidato</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
