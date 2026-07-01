'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Quote, Users, Award, BookOpen, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { candidates } from '@/data/candidates'

export default function CandidateDetailPage() {
  const params = useParams()

  const candidate = useMemo(() => {
    if (!params.id) return null
    return candidates.find(c => c.id === params.id) || null
  }, [params.id])

  if (!candidate) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-32">
          <div className="section-container text-center py-20">
            <h2 className="text-2xl font-bold text-[#444444]">Candidato no encontrado</h2>
            <Link href="/candidatos" className="btn-primary mt-6 inline-flex">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a candidatos
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="pt-20 pb-6 sm:pt-32 sm:pb-8 bg-[#F4F4F4]">
          <div className="section-container">
            <Link
              href="/candidatos"
              className="inline-flex items-center gap-2 text-[#042881] hover:text-[#0553DB] font-medium transition-colors mb-4 sm:mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a candidatos
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
              {/* Foto */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#042881] to-[#FA9A06] rounded-3xl blur-2xl opacity-30" />
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#042881] to-[#0553DB] shadow-2xl">
                    {candidate.photo_url ? (
                      <Image
                        src={candidate.photo_url}
                        alt={candidate.full_name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-6xl text-white font-bold font-display">
                              {candidate.full_name.charAt(0)}
                            </span>
                          </div>
                          <p className="text-white/50">Foto próximamente</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {candidate.list_name && (
                    <div className="mt-4 sm:mt-6 bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="w-5 h-5 text-[#FA9A06]" />
                        <span className="font-semibold text-[#042881]">Lista</span>
                      </div>
                      <p className="text-2xl font-bold text-[#042881] font-display">{candidate.list_name}</p>
                      {candidate.list_number && (
                        <p className="text-[#444444]">Número {candidate.list_number}</p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-3"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#042881]/5 text-[#042881] rounded-full text-sm font-semibold mb-4">
                  <Users className="w-4 h-4" />
                  {candidate.position?.name || 'Candidato'}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#042881] mb-4">
                  {candidate.full_name}
                </h1>

                {candidate.description && (
                  <div className="flex items-start gap-3 mb-6 sm:mb-8 bg-[#F4F4F4] p-4 sm:p-6 rounded-2xl">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#FA9A06] flex-shrink-0 mt-1" />
                    <p className="text-base sm:text-lg text-[#444444] italic">{candidate.description}</p>
                  </div>
                )}

                {candidate.biography ? (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-[#042881] mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#FA9A06]" />
                        Biografía
                      </h2>
                      <div className="text-[#444444] leading-relaxed whitespace-pre-line">
                        {candidate.biography}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-[#444444]">
                    <Sun className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                    <p>Próximamente más información sobre este candidato.</p>
                  </div>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/candidatos" className="btn-outline inline-flex items-center justify-center w-full sm:w-auto">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Ver más candidatos
                  </Link>
                  <Link href="/propuestas" className="btn-primary inline-flex items-center justify-center w-full sm:w-auto">
                    Conoce nuestras propuestas
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
