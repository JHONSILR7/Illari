export interface Proposal {
  id: string
  title: string
  summary: string
  content: string
  category: string
  icon: string
  is_published: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export const proposals: Proposal[] = [
  {
    id: 'prop-1',
    title: 'Excelencia Académica',
    summary: 'Impulsaremos programas de tutoría, biblioteca virtual actualizada y laboratorios equipados para todas las facultades.',
    content: '',
    category: '',
    icon: 'BookOpen',
    is_published: true,
    sort_order: 1,
    created_at: '',
    updated_at: '',
  },
  {
    id: 'prop-2',
    title: 'Transparencia y Gestión',
    summary: 'Rendición de cuentas mensual, acceso abierto a presupuestos y canales directos de comunicación estudiantil.',
    content: '',
    category: '',
    icon: 'Shield',
    is_published: true,
    sort_order: 2,
    created_at: '',
    updated_at: '',
  },
  {
    id: 'prop-3',
    title: 'Bienestar Estudiantil',
    summary: 'Ampliación de comedor universitario, becas de investigación y programas de salud mental para estudiantes.',
    content: '',
    category: '',
    icon: 'Users',
    is_published: true,
    sort_order: 3,
    created_at: '',
    updated_at: '',
  },
  {
    id: 'prop-4',
    title: 'Innovación y Desarrollo',
    summary: 'Incubadora de proyectos estudiantiles, ferias tecnológicas y convenios con empresas para prácticas profesionales.',
    content: '',
    category: '',
    icon: 'TrendingUp',
    is_published: true,
    sort_order: 4,
    created_at: '',
    updated_at: '',
  },
  {
    id: 'prop-5',
    title: 'Identidad Cultural',
    summary: 'Fortalecimiento de nuestra identidad andina, festivales culturales y recuperación de saberes ancestrales.',
    content: '',
    category: '',
    icon: 'Sun',
    is_published: true,
    sort_order: 5,
    created_at: '',
    updated_at: '',
  },
  {
    id: 'prop-6',
    title: 'Participación Democrática',
    summary: 'Asambleas estudiantiles abiertas, cabildos distritales y plataforma digital de votación y propuestas.',
    content: '',
    category: '',
    icon: 'CheckCircle',
    is_published: true,
    sort_order: 6,
    created_at: '',
    updated_at: '',
  },
]
