'use client'

import { motion } from 'framer-motion'
import { Shield, Users, BookOpen, TrendingUp, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const positions = [
  { title: 'Consejo Universitario', desc: 'La máxima autoridad de la universidad', slug: 'consejo-universitario', icon: Shield },
  { title: 'Asamblea Universitaria', desc: 'El órgano de representación y debate', slug: 'asamblea-universitaria', icon: Users },
  { title: 'Consejo de Ingeniería', desc: 'Representación de la facultad de ingeniería', slug: 'consejo-ingenieria', icon: BookOpen },
  { title: 'Consejo de Ciencias de la Empresa', desc: 'Representación de la facultad de ciencias empresariales', slug: 'consejo-ciencias-empresa', icon: TrendingUp },
]

export default function CandidatesSection() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#042881]/[0.02] rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-title mb-3">Conoce a Nuestros Candidatos</h2>
          <p className="section-subtitle">Estudiantes comprometidos con representar tu voz en cada estamento universitario</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {positions.map((pos, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Link href={`/candidatos?posicion=${pos.slug}`}>
                <div className="candidate-card group cursor-pointer">
                  <div className="h-32 sm:h-44 bg-gradient-to-br from-[#042881] to-[#0553DB] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTI4IDI0djJIMTJ2LTJoMTZ6TTI4IDE0djJIMTJ2LTJoMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#042881] via-[#042881]/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <pos.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#042881] text-sm group-hover:text-[#0553DB] transition-colors">{pos.title}</h3>
                    <p className="text-xs text-[#444444]/70 mt-1">{pos.desc}</p>
                    <div className="mt-4 flex items-center text-[#FA9A06] font-semibold text-xs group-hover:gap-3 transition-all">
                      Ver candidatos
                      <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mt-10"
        >
          <Link href="/candidatos" className="group inline-flex items-center gap-2 btn-primary">
            Ver todos los candidatos
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
