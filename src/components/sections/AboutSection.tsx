'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface Props {
  content: Record<string, any>
}

export default function AboutSection({ content }: Props) {
  return (
    <section id="nosotros" className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#042881]/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="section-title mb-4">
            {content.about?.title || '¿Quiénes Somos?'}
          </h2>
          <p className="section-subtitle">
            {content.about?.content || 'ILLARI es un movimiento político universitario conformado por estudiantes comprometidos con el cambio.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideLeft}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#042881] to-[#0553DB] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-100 h-full hover:shadow-lg hover:border-gray-200 transition-all duration-500">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#042881]/5 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#042881]" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-[#042881] mb-2 sm:mb-3">
                {content.mission?.title || 'Misión'}
              </h3>
              <p className="text-sm text-[#444444]/80 leading-relaxed">
                {content.mission?.content || 'Construir una universidad inclusiva y de calidad, promoviendo la participación democrática estudiantil.'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideRight}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FA9A06] to-[#FDCB16] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-100 h-full hover:shadow-lg hover:border-gray-200 transition-all duration-500">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FA9A06]/5 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#FA9A06]" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-[#042881] mb-2 sm:mb-3">
                {content.vision?.title || 'Visión'}
              </h3>
              <p className="text-sm text-[#444444]/80 leading-relaxed">
                {content.vision?.content || 'Ser el movimiento estudiantil líder en la transformación de la UNAJMA.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
