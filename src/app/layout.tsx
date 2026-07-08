import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'ILLARI UNAJMA',
  description: 'Movimiento político universitario de la Universidad Nacional José María Arguedas. Conoce a nuestros candidatos y propuestas.',
  keywords: 'ILLARI, UNAJMA, movimiento universitario, estudiantes, política universitaria, José María Arguedas',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
  title: 'ILLARI UNAJMA',
    description: 'Movimiento político universitario comprometido con la excelencia académica y la transparencia.',
    type: 'website',
    locale: 'es_PE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
