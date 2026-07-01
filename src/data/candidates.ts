export interface Candidate {
  id: string
  full_name: string
  photo_url: string | null
  position_id: string
  description: string
  biography: string
  list_name: string
  list_number: number
  is_active: boolean
  sort_order: number
  position?: { id: string; name: string; slug: string; category: string }
  images?: string[]
  created_at: string
  updated_at: string
}

const pos = {
  asamblea: { id: 'pos-2', name: 'Asamblea Universitaria', slug: 'asamblea-universitaria', category: 'asamblea-universitaria' },
  consejo: { id: 'pos-1', name: 'Consejo Universitario', slug: 'consejo-universitario', category: 'consejo-universitario' },
  ingenieria: { id: 'pos-3', name: 'Consejo de Facultad - Ingeniería', slug: 'consejo-ingenieria', category: 'consejo-facultad' },
  empresa: { id: 'pos-4', name: 'Consejo de Facultad - Ciencias de la Empresa', slug: 'consejo-ciencias-empresa', category: 'consejo-facultad' },
}

export const candidates: Candidate[] = [
  // Asamblea Universitaria - Titulares
  { id: 'c-1', full_name: 'PARIONA QUISPE DANIEL CLEMENTE', photo_url: '/images/candidatos/c-1.webp', position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 1, position: pos.asamblea, created_at: '', updated_at: '' },
  { id: 'c-2', full_name: 'QUISPE HOYOS BETZABE ASTRID', photo_url: '/images/candidatos/c-2.webp', position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 2, position: pos.asamblea, created_at: '', updated_at: '' },
  { id: 'c-3', full_name: 'PEREZ OSORIO EDU VALENTIN', photo_url: '/images/candidatos/c-3.webp', position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 3, position: pos.asamblea, created_at: '', updated_at: '' },
  { id: 'c-4', full_name: 'SILVERA ROJAS JHON DANNY', photo_url: '/images/candidatos/c-4.webp', position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 4, position: pos.asamblea, created_at: '', updated_at: '' },
  { id: 'c-5', full_name: 'COLACA GUTÍERREZ KENNY MAXIMILIANA', photo_url: '/images/candidatos/c-5.webp', position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 5, position: pos.asamblea, created_at: '', updated_at: '' },
  { id: 'c-6', full_name: 'COTARMA HUACCAYCACHACC NOEMÍ', photo_url: '/images/candidatos/c-6.webp', position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 6, position: pos.asamblea, created_at: '', updated_at: '' },

  // Asamblea Universitaria - Accesitarios
  { id: 'c-7', full_name: 'CARRIÓN ZUÑIGA LUCIA CLARA', photo_url: null, position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 7, position: pos.asamblea, created_at: '', updated_at: '' },
  { id: 'c-8', full_name: 'GUTIERREZ OSCCO WILIAM ALEX', photo_url: null, position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 8, position: pos.asamblea, created_at: '', updated_at: '' },
  { id: 'c-9', full_name: 'PAREDES ALEGRIA LIZ LUCERO', photo_url: null, position_id: pos.asamblea.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 9, position: pos.asamblea, created_at: '', updated_at: '' },

  // Consejo Universitario - Titulares
  { id: 'c-10', full_name: 'HUARHUACHI RAMOS FÉLIX ANGEL', photo_url: '/images/candidatos/c-10.webp', position_id: pos.consejo.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 1, position: pos.consejo, created_at: '', updated_at: '' },
  { id: 'c-11', full_name: 'BULEJE QUISPE JHOEL ARÓN', photo_url: '/images/candidatos/c-11.webp', position_id: pos.consejo.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 2, position: pos.consejo, created_at: '', updated_at: '' },

  // Consejo Universitario - Accesitarios
  { id: 'c-12', full_name: 'ARROYO QUISPE SOLEDAD', photo_url: '/images/candidatos/c-12.webp', position_id: pos.consejo.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 3, position: pos.consejo, created_at: '', updated_at: '' },
  { id: 'c-13', full_name: 'CARRASCO VARGAS MARÍA MERCEDES', photo_url: null, position_id: pos.consejo.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 4, position: pos.consejo, created_at: '', updated_at: '' },

  // Consejo de Facultad - Ingeniería - Titulares
  { id: 'c-14', full_name: 'RIVERA QUINTANA FRAN MARCEL', photo_url: '/images/candidatos/c-14.webp', position_id: pos.ingenieria.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 1, position: pos.ingenieria, created_at: '', updated_at: '' },
  { id: 'c-15', full_name: 'BLAS ALFARO NATIVIDAD', photo_url: '/images/candidatos/c-15.webp', position_id: pos.ingenieria.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 2, position: pos.ingenieria, created_at: '', updated_at: '' },

  // Consejo de Facultad - Ingeniería - Accesitarios
  { id: 'c-16', full_name: 'RIVERA OSCCO MARYCARMEN', photo_url: null, position_id: pos.ingenieria.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 3, position: pos.ingenieria, created_at: '', updated_at: '' },
  { id: 'c-17', full_name: 'ROJAS HUARACA ALEXANDER BRYAN', photo_url: null, position_id: pos.ingenieria.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 4, position: pos.ingenieria, created_at: '', updated_at: '' },

  // Consejo de Facultad - Ciencias de la Empresa - Titulares
  { id: 'c-18', full_name: 'CHIPANA ROMANÍ MICHAEL', photo_url: '/images/candidatos/c-18.webp', position_id: pos.empresa.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 1, position: pos.empresa, created_at: '', updated_at: '' },
  { id: 'c-19', full_name: 'HUACHOHUILLCA SOCA RUTH SAYDA', photo_url: '/images/candidatos/c-19.webp', position_id: pos.empresa.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 2, position: pos.empresa, created_at: '', updated_at: '' },

  // Consejo de Facultad - Ciencias de la Empresa - Accesitarios
  { id: 'c-20', full_name: 'HUAMANÍ ALLCCAHUAMÁN YORDI ANDERSON', photo_url: null, position_id: pos.empresa.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 3, position: pos.empresa, created_at: '', updated_at: '' },
  { id: 'c-21', full_name: 'VASQUEZ HUAMANI MELISA', photo_url: null, position_id: pos.empresa.id, description: '', biography: '', list_name: 'ILLARI', list_number: 1, is_active: true, sort_order: 4, position: pos.empresa, created_at: '', updated_at: '' },
]
