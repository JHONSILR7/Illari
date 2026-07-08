export const siteContent: Record<string, {
  section_key: string
  title: string
  subtitle: string
  content: string
  image_url: string | null
  is_visible: boolean
}> = {
  hero: {
    section_key: 'hero',
    title: 'ILLARI',
    subtitle: '',
    content: 'Un movimiento estudiantil comprometido con la excelencia académica, la transparencia y el desarrollo integral de nuestra universidad.',
    image_url: null,
    is_visible: true,
  },
  mission: {
    section_key: 'mission',
    title: 'Misión',
    subtitle: 'Nuestra Razón de Ser',
    content: 'Construir una universidad inclusiva y de calidad, promoviendo la participación democrática estudiantil, la defensa de nuestros derechos y el desarrollo de proyectos innovadores que beneficien a toda la comunidad universitaria.',
    image_url: null,
    is_visible: true,
  },
  vision: {
    section_key: 'vision',
    title: 'Visión',
    subtitle: 'Hacia Dónde Vamos',
    content: 'Ser el movimiento estudiantil líder en la transformación de la UNAJMA, formando una comunidad universitaria comprometida con la excelencia, la equidad y el progreso sostenible de nuestra región.',
    image_url: null,
    is_visible: true,
  },
  about: {
    section_key: 'about',
    title: '¿Quiénes Somos?',
    subtitle: 'Conoce a ILLARI',
    content: 'ILLARI es un movimiento político universitario conformado por estudiantes comprometidos con el cambio y la mejora continua de la Universidad Nacional José María Arguedas. Nuestro nombre, que significa "amanecer" en quechua, refleja nuestra visión de un nuevo comienzo para nuestra casa de estudios.',
    image_url: null,
    is_visible: true,
  },
}

export function getSiteContentArray() {
  return Object.values(siteContent)
}
