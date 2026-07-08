'use client'

import { motion } from 'framer-motion'
import { Lightbulb, ChevronRight, BookOpen, Shield, Users, TrendingUp, Sun, CheckCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { proposals } from '@/data/proposals'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const iconMap: Record<string, any> = {
  BookOpen, Shield, Users, TrendingUp, Sun, CheckCircle, Sparkles,
}

export default function ProposalsSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F8F8F8] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FA9A06]/[0.03] rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#042881]/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 py-1 bg-[#FA9A06]/10 text-[#FA9A06] text-xs font-semibold rounded-full mb-3">
            Plan de trabajo
          </span>
          <h2 className="section-title mb-3">Nuestras Propuestas</h2>
          <p className="section-subtitle">
            Un plan integral para construir la universidad que merecemos
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {proposals.map((prop, i) => {
              const Icon = iconMap[prop.icon] || Lightbulb
              return (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 bg-[#042881]/5 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#042881]" />
                  </div>
                  <h4 className="text-base font-bold text-[#042881] mb-2">{prop.title}</h4>
                  <p className="text-sm text-[#444444]/80 leading-relaxed">{prop.summary}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/propuestas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#042881] text-white font-semibold rounded-xl hover:bg-[#0553DB] transition-all duration-300 hover:shadow-lg hover:shadow-[#042881]/20 active:scale-[0.98] text-sm"
            >
              Ver todas las propuestas detalladas
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
