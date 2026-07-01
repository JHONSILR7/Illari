'use client'

import { Suspense, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, ChevronRight, Building2, ClipboardList, Settings, BarChart3 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { positions as staticPositions } from '@/data/positions'
import { candidates as staticCandidates } from '@/data/candidates'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

const positionIcons: Record<string, React.ReactNode> = {
  'consejo-universitario': <Building2 className="w-4 h-4" />,
  'asamblea-universitaria': <ClipboardList className="w-4 h-4" />,
  'consejo-ingenieria': <Settings className="w-4 h-4" />,
  'consejo-ciencias-empresa': <BarChart3 className="w-4 h-4" />,
}

export default function CandidatesPage() {
  return (
    <Suspense>
      <CandidatesContent />
    </Suspense>
  )
}

function CandidatesContent() {
  const searchParams = useSearchParams()
  const activeSlug = searchParams.get('posicion')

  const [selectedPos, setSelectedPos] = useState<string>(activeSlug || staticPositions[0]?.slug || '')

  const currentCandidates = staticCandidates.filter(c => c.position?.slug === selectedPos)

  const groupedCandidates = currentCandidates.reduce<Record<string, typeof staticCandidates>>((acc, c) => {
    const key = c.position?.slug || 'otros'
    if (!acc[key]) acc[key] = []
    acc[key].push(c)
    return acc
  }, {})

  const categoryColors: Record<string, string> = {
    'consejo-universitario': 'from-[#042881] to-[#0553DB]',
    'asamblea-universitaria': 'from-[#FA9A06] to-[#FDCB16]',
    'consejo-ingenieria': 'from-[#8C0B1A] to-[#042881]',
    'consejo-ciencias-empresa': 'from-[#0553DB] to-[#042881]',
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 bg-hero-gradient overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative z-10 section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3">
                Nuestros Candidatos
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
                Conoce a los estudiantes que representarán tu voz en los diferentes estamentos universitarios
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-3 sm:py-4 border-b border-gray-100 bg-white sticky top-16 md:top-20 z-30">
          <div className="section-container">
            <div className="flex flex-wrap items-center gap-2">
              {staticPositions.map((pos) => (
                <button
                  key={pos.slug}
                  onClick={() => setSelectedPos(pos.slug)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 inline-flex items-center gap-1.5 ${
                    selectedPos === pos.slug
                      ? 'bg-[#042881] text-white shadow-sm'
                      : 'bg-gray-100 text-[#444444] hover:bg-gray-200'
                  }`}
                >
                  {positionIcons[pos.slug]} {pos.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Listado */}
        <section className="py-8 sm:py-10 md:py-14">
          <div className="section-container">
            {currentCandidates.length === 0 ? (
              <motion.div {...fadeUp} className="text-center py-12 sm:py-16">
                <Users className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#444444] mb-1">Próximamente</h3>
                <p className="text-sm text-gray-400">Los candidatos serán anunciados pronto. Vuelve a visitarnos.</p>
              </motion.div>
            ) : (
              <div className="space-y-10">
                {Object.entries(groupedCandidates).map(([slug, cands]) => {
                  const pos = staticPositions.find(p => p.slug === slug)
                  return (
                    <motion.div key={slug} {...fadeUp}>
                      <div className="mb-4 sm:mb-5">
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#042881] mb-1">
                          {pos?.name || slug}
                        </h2>
                        <p className="text-sm text-[#444444]/70">{pos?.description}</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                        {cands.map((candidate) => (
                          <Link
                            key={candidate.id}
                            href={`/candidatos/${candidate.id}`}
                            className="group"
                          >
                            <motion.div whileHover={{ y: -4 }} className="candidate-card">
                              <div className={`aspect-[3/4] bg-gradient-to-br ${categoryColors[slug] || 'from-[#042881] to-[#0553DB]'} relative overflow-hidden`}>
                                {candidate.photo_url ? (
                                  <Image
                                    src={candidate.photo_url}
                                    alt={candidate.full_name}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                                  />
                                ) : (
                                  <div className="flex items-center justify-center h-full">
                                    <div className="w-14 h-14 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center">
                                      <span className="text-2xl text-white font-bold font-display">
                                        {candidate.full_name.charAt(0)}
                                      </span>
                                    </div>
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                                  <span className="text-white text-xs font-medium bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                                    {candidate.list_name || 'Candidato'}
                                  </span>
                                </div>
                              </div>
                              <div className="p-4">
                                <h3 className="font-bold text-[#042881] text-sm group-hover:text-[#0553DB] transition-colors">
                                  {candidate.full_name}
                                </h3>
                                <p className="text-xs text-[#444444]/70 mt-0.5 line-clamp-2">
                                  {candidate.description || 'Candidato comprometido con el cambio'}
                                </p>
                                <div className="mt-3 flex items-center text-[#FA9A06] font-semibold text-xs">
                                  Conoce más
                                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:ml-2 transition-all" />
                                </div>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
