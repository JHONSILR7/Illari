'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, ChevronUp, ChevronRight, Lightbulb, ListChecks,
  BookOpen, Building2, BarChart3, Monitor, Shield, Eye,
  Target, Sparkles, Download,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { detailedProposals } from '@/data/proposals-detailed'

const schoolIcons: Record<string, any> = {
  'asamblea-universitaria': Building2,
  'consejo-universitario': Shield,
  'facultad-ingenieria': Monitor,
  'facultad-ciencias-empresa': BarChart3,
}

const categoryBadges: Record<string, { label: string; icon: any }> = {
  'gestion-academica': { label: 'Gestión Académica', icon: BookOpen },
  'gestion-investigacion': { label: 'Investigación', icon: Eye },
  'gestion-administrativa': { label: 'Gestión Administrativa', icon: Target },
  'propuesta-emblematica': { label: 'Propuesta Emblemática', icon: Sparkles },
}

function cleanCategoryName(name: string): string {
  const patterns = [
    /^EJE \d+\.\s*/i,
    /^[IVX]+\.\s*/i,
    /^\d+\.\s*Eje:\s*/i,
    /^PROP\s*\d+:\s*/i,
    /^Propuestas/i,
    /^PROPUESTAS\s*(DE\s.*)?$/i,
  ]
  let cleaned = name
  for (const pattern of patterns) {
    cleaned = cleaned.replace(pattern, '').trim()
  }
  return cleaned || name
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function ProposalsPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {}
      detailedProposals.forEach((school, si) => {
        school.categories.forEach((_, ci) => {
          initial[`${si}-${ci}`] = true
        })
      })
      return initial
    }
  )

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 bg-hero-gradient overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative z-10 section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-white/10">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 sm:mb-3">
                Propuestas
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Un plan integral con propuestas concretas para cada escuela profesional y la universidad en su conjunto
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="/PLAN%20DE%20GOBIERNO%20AU%2C%20CU%20Y%20CF%20ILLARI%20UNAJMA.pdf"
                  download
                  className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl active:scale-[0.98] text-sm sm:text-base group"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Descargar Plan de Gobierno
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 md:py-20">
          <div className="section-container">
            <div className="space-y-16">
              {detailedProposals.map((school, si) => {
                const SchoolIcon = schoolIcons[school.id] || Lightbulb
                return (
                  <motion.div
                    key={school.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.08 }}
                  >
                    {/* School Header */}
                    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                      <div className={`w-12 h-12 bg-gradient-to-r ${school.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <SchoolIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#042881]">
                          {school.school}
                        </h2>
                        {school.subtitle && (
                          <p className="text-xs sm:text-sm text-[#444444]/60 mt-0.5">{school.subtitle}</p>
                        )}
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="space-y-5">
                      {school.categories.map((cat, ci) => {
                        const sectionKey = `${si}-${ci}`
                        const isExpanded = expandedSections[sectionKey] !== false
                        const cleanName = cleanCategoryName(cat.name)
                        return (
                          <div key={ci} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            {/* Category Header */}
                            <button
                              onClick={() => toggleSection(sectionKey)}
                              className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 bg-white hover:bg-[#F8F8F8] transition-colors duration-200"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div
                                  className="w-1 h-10 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: cat.color }}
                                />
                                <div className="text-left min-w-0">
                                  <h3 className="text-sm sm:text-base font-bold text-[#042881]">
                                    {cleanName}
                                  </h3>
                                  <p className="text-[11px] text-[#444444]/50 mt-0.5">
                                    {cat.proposals.length} {cat.proposals.length === 1 ? 'propuesta' : 'propuestas'}
                                  </p>
                                </div>
                              </div>
                              <div
                                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                                style={{ backgroundColor: `${cat.color}08` }}
                              >
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" style={{ color: cat.color }} />
                                ) : (
                                  <ChevronDown className="w-4 h-4" style={{ color: cat.color }} />
                                )}
                              </div>
                            </button>

                            {/* Proposals */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden border-t border-gray-50"
                                >
                                  <div className="p-4 sm:p-5 bg-white">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                      {cat.proposals.map((prop, pi) => (
                                        <motion.div
                                          key={pi}
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: pi * 0.03 }}
                                          className="group relative bg-[#F8F8F8] hover:bg-white rounded-xl p-4 sm:p-5 border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                                        >
                                          <div className="flex items-start gap-3">
                                            <div
                                              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                                              style={{ backgroundColor: `${cat.color}10` }}
                                            >
                                              <Lightbulb className="w-4 h-4" style={{ color: cat.color }} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                              <h4 className="text-sm font-bold text-[#042881] mb-1.5 leading-snug">
                                                {prop.title}
                                              </h4>
                                              {prop.description && (
                                                <p className="text-sm text-[#444444]/75 leading-relaxed">
                                                  {prop.description}
                                                </p>
                                              )}
                                              {prop.items && prop.items.length > 0 && (
                                                <div className="mt-3 pt-3 border-t border-gray-100">
                                                  {prop.items.length <= 4 ? (
                                                    <ul className="space-y-1.5">
                                                      {prop.items.map((item, ii) => (
                                                        <li key={ii} className="flex items-start gap-2 text-sm text-[#444444]/70">
                                                          <span
                                                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                            style={{ backgroundColor: cat.color }}
                                                          />
                                                          <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                      ))}
                                                    </ul>
                                                  ) : (
                                                    <div className="overflow-x-auto">
                                                      <table className="w-full text-sm text-[#444444]/70">
                                                        <tbody>
                                                          {prop.items.map((item, ii) => (
                                                            <tr key={ii} className="border-b border-gray-50 last:border-0">
                                                              <td className="py-1.5 pl-0 pr-2 align-top">
                                                                <span
                                                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                                  style={{ backgroundColor: cat.color }}
                                                                />
                                                              </td>
                                                              <td className="py-1.5 leading-relaxed">{item}</td>
                                                            </tr>
                                                          ))}
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                  )}
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#042881] via-[#0553DB] to-[#042881] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="absolute top-10 right-10 w-48 h-48 bg-[#FA9A06]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#FDCB16]/10 rounded-full blur-3xl" />
          <div className="relative z-10 section-container text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3">
                ¿Quieres aportar?
              </h2>
              <p className="text-sm sm:text-base text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
                Tus ideas también son importantes. Escríbenos y sé parte del cambio que queremos construir.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/candidatos"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#042881] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-xl active:scale-[0.98] text-sm"
                >
                  Conoce a los candidatos
                  <ChevronRight className="w-4 h-4" />
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
