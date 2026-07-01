'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, ChevronRight, BookOpen, Shield, Users, TrendingUp, Sun, CheckCircle, Sparkles, Target, Eye, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { proposals as staticProposals } from '@/data/proposals'
import { siteContent } from '@/data/site-content'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const iconMap: Record<string, any> = {
  BookOpen, Shield, Users, TrendingUp, Sun, CheckCircle, Target, Eye, Lightbulb, Sparkles
}

export default function ProposalsPage() {
  const content = siteContent
  const proposals = staticProposals
  const displayProposals = proposals
  const categories = useMemo(() => Array.from(new Set(displayProposals.map(p => p.category).filter(Boolean))), [displayProposals])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[#042881] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#042881] via-[#0553DB] to-[#042881]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FA9A06]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FDCB16]/10 rounded-full blur-3xl" />

          <div className="relative z-10 section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Lightbulb className="w-6 h-6 md:w-7 md:h-7 text-[#FDCB16]" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3">
                Propuestas
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
                Ideas concretas y realizables para transformar la UNAJMA en una universidad de excelencia
              </p>
            </motion.div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-14 bg-[#F4F4F4]">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#042881]/5 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-[#042881]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#042881] mb-2">
                  {content.mission?.title || 'Misión'}
                </h3>
                <p className="text-[#444444]/80 leading-relaxed text-sm">
                  {content.mission?.content || 'Construir una universidad inclusiva y de calidad, promoviendo la participación democrática estudiantil.'}
                </p>
              </motion.div>

              <motion.div {...fadeUp} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#FA9A06]/5 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5 text-[#FA9A06]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#042881] mb-2">
                  {content.vision?.title || 'Visión'}
                </h3>
                <p className="text-[#444444]/80 leading-relaxed text-sm">
                  {content.vision?.content || 'Ser el movimiento estudiantil líder en la transformación de la UNAJMA.'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Propuestas detalladas */}
        <section className="py-14">
          <div className="section-container">
            <motion.div {...fadeUp} className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-[#FA9A06]/10 text-[#FA9A06] text-xs font-semibold rounded-full mb-3">
                Plan de trabajo
              </span>
              <h2 className="section-title mb-3">Nuestras Propuestas</h2>
              <p className="section-subtitle">
                Un plan integral para construir la universidad que merecemos
              </p>
            </motion.div>

            <div className="space-y-8">
              {categories.length > 0 ? categories.map((cat) => (
                <div key={cat}>
                  <h3 className="text-xl font-bold text-[#042881] mb-4 capitalize">{cat}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayProposals.filter(p => p.category === cat).map((prop, i) => {
                      const Icon = iconMap[prop.icon] || Lightbulb
                      return (
                        <motion.div key={i} {...fadeUp} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 hover:-translate-y-1 group">
                          <div className="w-10 h-10 bg-[#042881]/5 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-5 h-5 text-[#042881]" />
                          </div>
                          <h4 className="text-base font-bold text-[#042881] mb-2">{prop.title}</h4>
                          <p className="text-sm text-[#444444]/80 leading-relaxed">{prop.summary || prop.content}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              )) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayProposals.map((prop, i) => {
                    const Icon = iconMap[prop.icon] || Lightbulb
                    return (
                      <motion.div key={i} {...fadeUp} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 hover:-translate-y-1 group">
                        <div className="w-10 h-10 bg-[#042881]/5 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-[#042881]" />
                        </div>
                        <h4 className="text-base font-bold text-[#042881] mb-2">{prop.title}</h4>
                        <p className="text-sm text-[#444444]/80 leading-relaxed">{prop.summary || prop.content}</p>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </div>

            {proposals.length === 0 && (
              <motion.div {...fadeUp} className="text-center mt-8 p-6 bg-[#F4F4F4] rounded-2xl">
                <Sparkles className="w-8 h-8 text-[#FA9A06] mx-auto mb-2" />
                <p className="text-sm text-[#444444]/70">
                  Próximamente estaremos publicando nuestras propuestas detalladas.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-[#F4F4F4]">
          <div className="section-container text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#042881] mb-3">
                ¿Quieres aportar?
              </h2>
              <p className="text-sm md:text-base text-[#444444]/80 mb-6 max-w-xl mx-auto">
                Tus ideas también son importantes. Escríbenos y sé parte del cambio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/candidatos" className="btn-primary">
                  Conoce a los candidatos
                  <ChevronRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
