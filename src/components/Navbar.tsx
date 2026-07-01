'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Users, UserCheck, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Inicio', icon: Home, section: 'hero' },
  { href: '/#nosotros', label: 'Nosotros', icon: Users, section: 'nosotros' },
  { href: '/candidatos', label: 'Candidatos', icon: UserCheck },
  { href: '/propuestas', label: 'Propuestas', icon: Lightbulb },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const listRef = useRef<HTMLDivElement>(null)

  const isHome = pathname === '/'
  const isCandidatos = pathname === '/candidatos'
  const isPropuestas = pathname === '/propuestas'

  const getActiveIndex = useCallback(() => {
    if (isCandidatos) return 2
    if (isPropuestas) return 3
    if (isHome) {
      return navLinks.findIndex(l => (l as any).section === activeSection)
    }
    return 0
  }, [isHome, isCandidatos, isPropuestas, activeSection])

  useEffect(() => {
    if (!isHome) return

    const hero = document.getElementById('hero')
    const nosotros = document.getElementById('nosotros')

    const observer = new IntersectionObserver(
      (entries) => {
        let latest = activeSection
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target
            if (el.id === 'hero') latest = 'hero'
            else if (el.id === 'nosotros') latest = 'nosotros'
          }
        }
        if (latest !== activeSection) setActiveSection(latest)
      },
      { threshold: 0.2, rootMargin: '-80px 0px -30% 0px' }
    )

    if (hero) observer.observe(hero)
    if (nosotros) observer.observe(nosotros)

    return () => observer.disconnect()
  }, [isHome, activeSection])

  useEffect(() => {
    if (isCandidatos) setActiveSection('candidatos')
    else if (isPropuestas) setActiveSection('propuestas')
    else if (isHome) setActiveSection(activeSection || 'hero')
  }, [isCandidatos, isPropuestas, isHome])

  useEffect(() => {
    const update = () => {
      if (!listRef.current) return
      const idx = getActiveIndex()
      const links = listRef.current.querySelectorAll<HTMLAnchorElement>('a')
      const active = links[idx]
      if (!active) return
      const rect = listRef.current.getBoundingClientRect()
      const linkRect = active.getBoundingClientRect()
      setIndicator({ left: linkRect.left - rect.left, width: linkRect.width })
    }

    update()
    window.addEventListener('resize', update)
    const id = setInterval(update, 500)
    return () => {
      window.removeEventListener('resize', update)
      clearInterval(id)
    }
  }, [getActiveIndex])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#042881]/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden shadow-lg shadow-black/20">
              <Image src="/logo.jpeg" alt="ILLARI" fill className="object-contain p-0.5" />
            </div>
            <div className="flex flex-col relative">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold text-white font-display tracking-wide">ILLARI</span>
              </div>
              <span className="text-[11px] md:text-xs text-white/50 font-semibold -mt-0.5 tracking-wider uppercase">UNAJMA</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 relative" ref={listRef}>
            <motion.div
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-[#FA9A06] to-[#FDCB16] rounded-full shadow-lg shadow-[#FA9A06]/20"
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />

            {navLinks.map((link, i) => {
              const idx = getActiveIndex()
              const isActive = i === idx
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <link.icon className={`w-3.5 h-3.5 transition-colors duration-300 ${
                    isActive ? 'text-[#FA9A06]' : 'text-white/40 group-hover:text-white/60'
                  }`} />
                  {link.label}
                </Link>
              )
            })}
          </div>

          <button
            className="md:hidden text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#042881]/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => {
                const idx = getActiveIndex()
                const isActive = navLinks.indexOf(link) === idx
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-white bg-white/8'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className={`w-4 h-4 ${isActive ? 'text-[#FA9A06]' : 'text-white/40'}`} />
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
