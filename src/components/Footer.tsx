import { Heart, MapPin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#042881] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FA9A06] via-[#FDCB16] to-[#FA9A06]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden ring-2 ring-white/10">
                <Image src="/logo.jpeg" alt="ILLARI" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold font-display">ILLARI</h3>
                <p className="text-[11px] md:text-xs text-white/50">UNAJMA</p>
              </div>
            </div>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed">
              Movimiento político universitario comprometido con la transformación de la Universidad Nacional José María Arguedas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#FDCB16] mb-3 uppercase text-[11px] md:text-xs tracking-widest">Enlaces</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/candidatos', label: 'Candidatos' },
                { href: '/propuestas', label: 'Propuestas' },
                { href: '/#nosotros', label: 'Nosotros' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-xs md:text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FDCB16] mb-3 uppercase text-[11px] md:text-xs tracking-widest">Candidatos</h4>
            <ul className="space-y-2">
              {[
                { href: '/candidatos?posicion=consejo-universitario', label: 'Consejo Universitario' },
                { href: '/candidatos?posicion=asamblea-universitaria', label: 'Asamblea Universitaria' },
                { href: '/candidatos?posicion=consejo-ingenieria', label: 'Consejo de Ingeniería' },
                { href: '/candidatos?posicion=consejo-ciencias-empresa', label: 'Consejo de Ciencias Empresa' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-xs md:text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FDCB16] mb-3 uppercase text-[11px] md:text-xs tracking-widest">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/60 text-xs md:text-sm">
                <MapPin className="w-3.5 h-3.5 text-[#FA9A06] flex-shrink-0" />
                <span>UNAJMA, Andahuaylas</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-xs md:text-sm">
                <Mail className="w-3.5 h-3.5 text-[#FA9A06] flex-shrink-0" />
                <span className="break-all">contacto@illari.unajma.edu.pe</span>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} ILLARI UNAJMA. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Hecho con <Heart className="w-3.5 h-3.5 text-[#FA9A06]" fill="#FA9A06" /> por el equipo ILLARI
          </p>
        </div>
      </div>
    </footer>
  )
}
