export interface Position {
  id: string
  name: string
  slug: string
  description: string
  category: string
  sort_order: number
}

export const positions: Position[] = [
  {
    id: 'pos-1',
    name: 'Consejo Universitario',
    slug: 'consejo-universitario',
    description: 'Candidatos al Consejo Universitario',
    category: 'consejo-universitario',
    sort_order: 1,
  },
  {
    id: 'pos-2',
    name: 'Asamblea Universitaria',
    slug: 'asamblea-universitaria',
    description: 'Candidatos a la Asamblea Universitaria',
    category: 'asamblea-universitaria',
    sort_order: 2,
  },
  {
    id: 'pos-3',
    name: 'Consejo de Facultad - Ingeniería',
    slug: 'consejo-ingenieria',
    description: 'Candidatos al Consejo de la Facultad de Ingeniería',
    category: 'consejo-facultad',
    sort_order: 3,
  },
  {
    id: 'pos-4',
    name: 'Consejo de Facultad - Ciencias de la Empresa',
    slug: 'consejo-ciencias-empresa',
    description: 'Candidatos al Consejo de la Facultad de Ciencias de la Empresa',
    category: 'consejo-facultad',
    sort_order: 4,
  },
]
