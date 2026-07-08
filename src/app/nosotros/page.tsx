'use client'

import { motion } from 'framer-motion'
import { Users, Target, Eye } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteContent } from '@/data/site-content'

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

export default function NosotrosPage() {
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
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 sm:mb-3">
                Nosotros
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                {siteContent.about?.content || 'ILLARI es un movimiento político universitario conformado por estudiantes comprometidos con el cambio.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#042881]/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="section-container relative">
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
                    {siteContent.mission?.title || 'Misión'}
                  </h3>
                  <p className="text-sm text-[#444444]/80 leading-relaxed">
                    {siteContent.mission?.content || 'Construir una universidad inclusiva y de calidad, promoviendo la participación democrática estudiantil.'}
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
                    {siteContent.vision?.title || 'Visión'}
                  </h3>
                  <p className="text-sm text-[#444444]/80 leading-relaxed">
                    {siteContent.vision?.content || 'Ser el movimiento estudiantil líder en la transformación de la UNAJMA.'}
                  </p>
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
