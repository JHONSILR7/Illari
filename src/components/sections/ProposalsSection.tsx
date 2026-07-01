'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function ProposalsSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F8F8F8] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FA9A06]/[0.03] rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-title mb-3">Nuestras Propuestas</h2>
          <p className="section-subtitle">Estaremos actualizando esta sección pronto</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-5 sm:px-8 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-full">
            <div className="w-10 h-10 bg-[#FA9A06]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-[#FA9A06]" />
            </div>
            <p className="text-[#444444]/70 text-sm md:text-base font-medium text-center sm:text-left">
              Próximamente estaremos publicando nuestras propuestas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
