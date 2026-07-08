export interface ProposalItem {
  title: string
  description: string
  items?: string[]
}

export interface ProposalCategory {
  name: string
  color: string
  proposals: ProposalItem[]
}

export interface SchoolProposals {
  id: string
  school: string
  subtitle?: string
  color: string
  gradient: string
  categories: ProposalCategory[]
}

export const detailedProposals: SchoolProposals[] = [
  {
    id: 'educacion-primaria',
    school: 'Educación Primaria Intercultural',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'EJE 1. CONTRIBUCIÓN A LA GESTIÓN ACADÉMICA',
        color: '#042881',
        proposals: [
          {
            title: 'Impulsar la actualización permanente del plan de estudios',
            description: 'Propondremos que se evalúe periódicamente la malla curricular para incorporar temas como:',
            items: [
              'Inteligencia Artificial aplicada a la educación.',
              'Educación inclusiva.',
              'Competencias digitales docentes.',
              'Innovación pedagógica.',
              'Diseño Universal para el Aprendizaje (DUA).',
            ],
          },
          {
            title: 'Fortalecer las prácticas preprofesionales (Practica preprofesional de tercer ciclo)',
            description: 'Gestionaremos convenios con UGEL, instituciones educativas públicas para ampliar los espacios de práctica profesional y garantizar un acompañamiento pedagógico de calidad.',
          },
          {
            title: 'Programa permanente de capacitación',
            description: 'Propondremos que la Facultad organice durante todo el año talleres gratuitos sobre:',
            items: [
              'Investigación educativa.',
              'Redacción científica.',
              'Elaboración de sesiones de aprendizaje.',
              'Evaluación por competencias.',
              'Preparación para el concurso de nombramiento docente.',
            ],
          },
          {
            title: 'Fortalecimiento de la Educación Intercultural Bilingüe',
            description: 'Promoveremos actividades académicas para fortalecer el dominio del quechua oral y escrito, así como la producción de materiales educativos contextualizados.',
          },
          {
            title: 'Sistema de tutoría estudiantil (Haremos que todos los tutores cumplan con su trabajo)',
            description: 'Impulsaremos un programa de tutoría entre docentes y estudiantes para reducir la deserción universitaria y mejorar el rendimiento académico.',
          },
          {
            title: 'Participación estudiantil (escuchar a todos los estudiantes)',
            description: 'Solicitaremos que antes de modificar reglamentos académicos o el plan curricular se realicen espacios de consulta con los estudiantes.',
          },
          {
            title: 'Fortalecimiento de la plana docente (falta de docentes)',
            description: 'Gestionar ante las autoridades universitarias la cobertura oportuna de plazas docentes para evitar que los estudiantes inicien el semestre con cursos sin profesor, así como solicitar que la asignación de carga académica se realice de manera anticipada para garantizar el normal desarrollo de las clases.',
          },
          {
            title: 'Revisión y actualización de sílabos. (Silabos que no responden a la actualidad ni contexto)',
            description: 'Impulsar la revisión periódica de los sílabos de la Escuela Profesional de Educación Primaria Intercultural para garantizar que los contenidos, metodologías, evaluaciones y bibliografía estén actualizados y respondan a las necesidades de la formación docente intercultural y bilingüe.',
          },
        ],
      },
      {
        name: 'EJE 2. CONTRIBUCIÓN A LA GESTIÓN EN INVESTIGACIÓN',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Fondo de apoyo para investigación estudiantil',
            description: 'Propondremos convocatorias internas para financiar pequeños proyectos de investigación y participación en congresos.',
          },
          {
            title: 'Revista científica estudiantil',
            description: 'Gestionaremos la creación de una revista digital donde los estudiantes publiquen investigaciones, experiencias de práctica y ensayos académicos.',
          },
          {
            title: 'Capacitación en investigación',
            description: 'Impulsaremos talleres gratuitos sobre:',
            items: [
              'Normas APA.',
              'Gestores bibliográficos.',
              'SPSS.',
              'ATLAS.ti.',
              'Mendeley.',
              'Redacción científica.',
            ],
          },
          {
            title: 'Investigación vinculada a la realidad regional',
            description: 'Promoveremos investigaciones relacionadas con:',
            items: [
              'Educación rural.',
              'Educación Intercultural Bilingüe.',
              'Aprendizaje del quechua.',
              'Problemáticas educativas de Apurímac.',
            ],
          },
          {
            title: 'Participación en eventos científicos',
            description: 'Gestionaremos apoyo institucional para que los estudiantes presenten investigaciones en congresos nacionales e internacionales.',
          },
        ],
      },
      {
        name: 'EJE 3. CONTRIBUCIÓN A LA GESTIÓN ADMINISTRATIVA',
        color: '#8C0B1A',
        proposals: [
          {
            title: 'Transparencia (Falta de trasnparencia)',
            description: 'Como representantes estudiantiles informaremos después de cada sesión del Consejo de Facultad, Consejo Universitario y Asamblea Universitaria los acuerdos adoptados.',
          },
          {
            title: 'Fiscalización (Falta de fiscalización)',
            description: 'Supervisaremos que los acuerdos aprobados beneficien realmente a los estudiantes y solicitaremos informes cuando sea necesario.',
          },
          {
            title: 'Mejor atención al estudiante (Mala atención demora)',
            description: 'Propondremos mecanismos para que las consultas y solicitudes tengan plazos claros de respuesta.',
          },
          {
            title: 'Bienestar universitario (Falta de campañas de salud mental)',
            description: 'Gestionaremos campañas de salud mental, orientación psicológica y prevención de la violencia universitaria.',
          },
          {
            title: 'Ampliación de la cobertura del comedor universitario (muchos estudiantes no pueden acceder)',
            description: 'Gestionar la ampliación de la cobertura del comedor universitario para que más estudiantes, especialmente aquellos en situación de vulnerabilidad económica, puedan acceder a este beneficio de manera transparente y oportuna.',
          },
          {
            title: 'Bolsa laboral (Falta de convocatorias)',
            description: 'Promoveremos una plataforma para difundir convocatorias laborales, prácticas profesionales y oportunidades de capacitación.',
          },
          {
            title: 'Vinculación con las comunidades',
            description: 'Desarrollar proyectos de aprendizaje-servicio en comunidades rurales para fortalecer la identidad cultural y contribuir con la educación local.',
          },
          {
            title: 'Ludoteca universitaria',
            description: 'Implementar una ludoteca o espacio de cuidado infantil dentro de la universidad para que los estudiantes puedan asistir a clases mientras sus hijos permanecen en un ambiente seguro.',
          },
          {
            title: 'Becas para estudiantes con hijos',
            description: 'Impulsar becas o apoyos económicos dirigidos a estudiantes con hijos y en situación de vulnerabilidad.',
          },
        ],
      },
    ],
  },
  {
    id: 'asamblea-universitaria',
    school: 'Asamblea Universitaria',
    subtitle: 'Daniel Clemente Pariona Quispe',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'I. CONTRIBUCIÓN A LA GESTIÓN ACADÉMICA',
        color: '#042881',
        proposals: [
          {
            title: 'Modernización permanente de la malla curricular',
            description: 'Promover la actualización periódica de los planes de estudio de todas las escuelas profesionales, incorporando asignaturas acordes con las exigencias del mercado laboral y la transformación digital, como Inteligencia Artificial, Ciencia de Datos, Marketing Digital, Innovación, Emprendimiento, Finanzas Digitales y Competencias Blandas. Asimismo, fortalecer el enfoque práctico mediante metodologías activas de aprendizaje.',
            items: [
              'Beneficio: egresados con mayor competitividad y empleabilidad.',
            ],
          },
          {
            title: 'Programa Integral de Certificaciones Profesionales',
            description: 'Gestionar convenios para ofrecer certificaciones gratuitas o de bajo costo en:',
            items: [
              'Excel Avanzado.',
              'Power BI.',
              'SAP.',
              'Inglés.',
              'Ofimática.',
              'Gestión de Proyectos.',
              'Inteligencia Artificial.',
              'Liderazgo.',
              'Oratoria.',
              'Marketing Digital.',
            ],
          },
          {
            title: 'Tutoría y acompañamiento académico',
            description: 'Implementar un sistema institucional de tutoría que brinde orientación permanente a los estudiantes, con programas de nivelación, asesoría académica y seguimiento a quienes presenten dificultades, contribuyendo a disminuir la deserción universitaria.',
          },
          {
            title: 'Fortalecimiento de las prácticas preprofesionales',
            description: 'Gestionar nuevos convenios con empresas públicas y privadas para ampliar las oportunidades de prácticas profesionales, visitas técnicas y programas de inserción laboral desde ciclos intermedios.',
          },
          {
            title: 'Editorial Universitaria',
            description: 'Crear la Editorial Universitaria UNAJMA, destinada a la edición, publicación e impresión de:',
            items: [
              'Libros.',
              'Manuales.',
              'Revistas científicas.',
              'Investigaciones.',
              'Tesis destacadas.',
              'Material académico.',
            ],
          },
        ],
      },
      {
        name: 'II. CONTRIBUCIÓN A LA GESTIÓN DE INVESTIGACIÓN',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Fondo concursable para investigación estudiantil',
            description: 'Impulsar la creación de un fondo económico destinado a financiar proyectos de investigación e innovación desarrollados por estudiantes y docentes, incentivando la generación de soluciones para la región y el país.',
          },
          {
            title: 'Semilleros de investigación',
            description: 'Crear equipos permanentes de investigación multidisciplinaria donde estudiantes trabajen junto a docentes investigadores, fortaleciendo la producción científica desde los primeros ciclos.',
          },
          {
            title: 'Capacitación permanente en investigación',
            description: 'Organizar talleres gratuitos sobre:',
            items: [
              'Metodología de investigación.',
              'Redacción científica.',
              'Scopus.',
              'Mendeley.',
              'Zotero.',
              'Inteligencia Artificial aplicada a la investigación.',
              'Elaboración de artículos científicos.',
            ],
          },
          {
            title: 'Laboratorio Vivo Universitario',
            description: 'Implementar un Laboratorio Vivo en los espacios exteriores de la universidad, donde estudiantes desarrollen proyectos reales relacionados con:',
            items: [
              'Agricultura sostenible.',
              'Gestión ambiental.',
              'Energías renovables.',
              'Emprendimiento.',
              'Innovación tecnológica.',
              'Prototipos de ingeniería y negocios.',
            ],
          },
          {
            title: 'Feria anual de Innovación e Investigación',
            description: 'Institucionalizar una feria anual donde estudiantes presenten proyectos innovadores, investigaciones y emprendimientos, premiando las mejores iniciativas y promoviendo la vinculación con empresas e instituciones.',
          },
        ],
      },
      {
        name: 'III. CONTRIBUCIÓN A LA GESTIÓN ADMINISTRATIVA',
        color: '#8C0B1A',
        proposals: [
          {
            title: 'Implementación del Sistema ERP Universitario',
            description: 'Gestionar la implementación de un Sistema ERP (Enterprise Resource Planning) que integre en una sola plataforma todos los procesos académicos y administrativos. Permitirá:',
            items: [
              'Matrículas en línea.',
              'Seguimiento de trámites.',
              'Pagos virtuales.',
              'Gestión documental.',
              'Historial académico.',
              'Control administrativo.',
              'Mayor transparencia y rapidez en la atención.',
            ],
          },
          {
            title: 'Digitalización de todos los trámites',
            description: 'Eliminar progresivamente el uso excesivo de documentos físicos, permitiendo que la mayoría de trámites universitarios puedan realizarse completamente en línea, reduciendo tiempos y costos para los estudiantes.',
          },
          {
            title: 'Espacios de descanso y coworking',
            description: 'Implementar zonas modernas de estudio y descanso en los pasillos y áreas comunes con:',
            items: [
              'Sofás ergonómicos.',
              'Mesas colaborativas.',
              'Internet de alta velocidad.',
              'Puntos de carga para celulares y laptops.',
              'Iluminación adecuada.',
            ],
          },
          {
            title: 'Kiosco Universitario',
            description: 'Gestionar la implementación de un kiosco universitario con precios accesibles que ofrezca:',
            items: [
              'Alimentos saludables.',
              'Bebidas.',
              'Útiles de escritorio.',
              'Impresiones y fotocopias.',
              'Productos básicos para la comunidad universitaria.',
            ],
          },
          {
            title: 'Mejoramiento de la infraestructura universitaria',
            description: 'Impulsar proyectos para:',
            items: [
              'Instalación de calefacción en aulas.',
              'Ampliación de la cobertura de internet.',
              'Renovación del mobiliario.',
              'Mantenimiento permanente de laboratorios y ambientes académicos.',
              'Mejor iluminación y seguridad del campus.',
            ],
          },
          {
            title: 'Transparencia y participación estudiantil',
            description: 'Promover una gestión abierta mediante:',
            items: [
              'Publicación periódica de informes de gestión.',
              'Rendición de cuentas.',
              'Difusión del presupuesto institucional.',
              'Espacios permanentes para recoger propuestas estudiantiles.',
            ],
          },
          {
            title: 'Bienestar universitario',
            description: 'Fortalecer los servicios de:',
            items: [
              'Atención psicológica.',
              'Atención médica.',
              'Bolsa laboral.',
              'Becas.',
              'Actividades deportivas y culturales.',
              'Programas de salud mental y bienestar.',
            ],
          },
        ],
      },
      {
        name: 'PROPUESTA EMBLEMÁTICA',
        color: '#FA9A06',
        proposals: [
          {
            title: 'UNAJMA 4.0: Universidad Inteligente, Innovadora y Sostenible',
            description: 'Nuestra propuesta busca transformar la universidad mediante la integración de tecnología, innovación y bienestar estudiantil. Impulsaremos la implementación del Sistema ERP Universitario, la creación de la Editorial Universitaria, el Laboratorio Vivo para investigación aplicada, espacios de coworking y descanso, un Kiosco Universitario moderno, la digitalización integral de los servicios y una gestión transparente y participativa. Nuestro compromiso es construir una UNAJMA donde cada estudiante tenga mejores oportunidades para aprender, investigar, innovar y desarrollarse profesionalmente, convirtiendo a nuestra universidad en un referente de calidad, modernización y excelencia académica a nivel regional y nacional.',
          },
        ],
      },
    ],
  },
  {
    id: 'enfermeria',
    school: 'Enfermería',
    color: '#0553DB',
    gradient: 'from-[#0553DB] via-[#042881] to-[#0553DB]',
    categories: [
      {
        name: '1. Eje: Infraestructura',
        color: '#042881',
        proposals: [
          {
            title: 'Gestión de la construcción y mejora del pabellón e infraestructura de la Escuela Profesional de Enfermería',
            description: '',
            items: [
              'Presentar un informe con las necesidades identificadas a las autoridades.',
              'Solicitar reuniones periódicas para dar seguimiento a los proyectos de infraestructura.',
              'Promover la mejora de aulas y ambientes destinados a la formación práctica.',
            ],
          },
        ],
      },
      {
        name: '2. Eje: Laboratorios, equipamiento y recursos tecnológicos',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Fortalecimiento de laboratorios',
            description: 'Adquisición de instrumental, maquetas, simuladores, materiales de práctica y equipos tecnológicos que favorezcan el aprendizaje.',
            items: [
              'Elaborar un inventario de los equipos y materiales prioritarios.',
              'Gestionar la adquisición de instrumental, maquetas, simuladores y recursos tecnológicos.',
              'Impulsar la implementación de espacios de práctica de libre acceso y una minibiblioteca especializada para los estudiantes.',
              'Gestionar el mantenimiento y renovación periódica del equipamiento existente.',
            ],
          },
        ],
      },
      {
        name: '3. Eje: Actualización y fortalecimiento de la formación académica',
        color: '#042881',
        proposals: [
          {
            title: 'Actualización permanente de la formación académica',
            description: 'Promover la actualización permanente de la formación académica de la Escuela Profesional de Enfermería, de acuerdo con los avances científicos y tecnológicos, las necesidades del sistema de salud y las competencias que exige el ejercicio profesional, garantizando una educación de calidad.',
            items: [
              'Identificar oportunidades de mejora en la formación académica.',
              'Gestionar la actualización de la malla curricular cuando sea necesario.',
              'Promover metodologías de enseñanza innovadoras y el uso de tecnologías educativas.',
              'Impulsar talleres, cursos y capacitaciones complementarias.',
              'Evaluar periódicamente las mejoras implementadas.',
            ],
          },
        ],
      },
      {
        name: '4. Eje: Vinculación institucional',
        color: '#8C0B1A',
        proposals: [
          {
            title: 'Fortalecimiento de convenios institucionales',
            description: 'Fortalecer los convenios con instituciones de salud y universidades para ampliar las oportunidades de aprendizaje.',
            items: [
              'Gestionar convenios con hospitales, centros de salud y universidades.',
              'Organizar charlas, talleres y conferencias con profesionales y docentes invitados.',
              'Promover intercambios académicos y actividades de capacitación continua.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ciencias-empresa',
    school: 'Ciencias de la Empresa',
    subtitle: 'TU VOZ, MI VOZ, NUESTRA VOZ',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'PROP 1: Una Facultad que Escucha',
        color: '#042881',
        proposals: [
          {
            title: 'Consejo Abierto',
            description: 'Publicar un informe sencillo después de cada sesión del Consejo de Facultad con los acuerdos, propuestas y avances.',
          },
          {
            title: 'Mesa Permanente del Estudiante',
            description: 'Realizar reuniones mensuales para recoger necesidades y llevarlas formalmente al Consejo de Facultad.',
          },
          {
            title: 'Banco Digital de Problemas',
            description: 'Implementar un formulario permanente para registrar problemas académicos y administrativos y priorizar soluciones.',
          },
        ],
      },
      {
        name: 'PROP 2: Mejor Calidad Académica',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Programa Empresa en el Aula',
            description: 'Promover la participación periódica de empresarios, egresados y profesionales para compartir casos reales.',
          },
          {
            title: 'Más Visitas Empresariales',
            description: 'Impulsar visitas técnicas a empresas e instituciones para fortalecer la formación práctica.',
          },
          {
            title: 'Tutorías Solidarias',
            description: 'Promover tutorías entre estudiantes con buen rendimiento y quienes requieren apoyo.',
          },
        ],
      },
      {
        name: 'PROP 3: Empleabilidad',
        color: '#042881',
        proposals: [
          {
            title: 'Feria de Prácticas y Empleo',
            description: 'Gestionar una feria anual con empresas e instituciones públicas y privadas.',
          },
          {
            title: 'Red de Egresados',
            description: 'Fortalecer el vínculo con egresados para mentorías y oportunidades laborales.',
          },
          {
            title: 'Bolsa de Oportunidades',
            description: 'Difundir en un solo canal becas, prácticas, concursos y cursos gratuitos.',
          },
        ],
      },
      {
        name: 'PROP 4: Investigación',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Investigación desde el Primer Ciclo',
            description: 'Impulsar proyectos de investigación formativa desde los primeros ciclos.',
          },
          {
            title: 'Club de Investigación Empresarial',
            description: 'Fomentar grupos de investigación y participación en concursos y eventos académicos.',
          },
        ],
      },
      {
        name: 'PROP 5: Emprendimiento',
        color: '#8C0B1A',
        proposals: [
          {
            title: 'Incubadora Estudiantil',
            description: 'Promover espacios para desarrollar ideas de negocio con acompañamiento docente.',
          },
          {
            title: 'Feria de Innovación Empresarial',
            description: 'Organizar una feria semestral de proyectos y emprendimientos estudiantiles.',
          },
        ],
      },
      {
        name: 'PROP 6: Transparencia y Fiscalización',
        color: '#042881',
        proposals: [
          {
            title: 'Seguimiento de Acuerdos',
            description: 'Solicitar informes periódicos sobre el cumplimiento de los acuerdos del Consejo.',
          },
          {
            title: 'Rendición de Cuentas',
            description: 'Presentar informes semestrales a los estudiantes sobre el trabajo realizado.',
          },
        ],
      },
      {
        name: 'Propuesta Estratégica',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Observatorio de Calidad Académica',
            description: 'Crear un Observatorio de Calidad Académica para recoger información sobre las necesidades de los estudiantes y presentar informes técnicos al Consejo de Facultad, con el fin de que las decisiones se basen en evidencia y respondan a la realidad de la Facultad.',
          },
        ],
      },
    ],
  },
  {
    id: 'matematica-estadistica',
    school: 'Matemática y Estadística Aplicadas',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'PROPUESTAS',
        color: '#042881',
        proposals: [
          {
            title: 'I. Mejorar la cobertura y velocidad del internet en el campus.',
            description: '',
          },
          {
            title: 'II. Modernizar laboratorios y salas de cómputo.',
            description: '',
          },
          {
            title: 'III. Incrementar los espacios de estudio(bibliotecas más amplias).',
            description: '',
          },
          {
            title: 'IV. Gestionar más convenios para prácticas preprofesionales.',
            description: '',
          },
          {
            title: 'V. media beca para comedor universitario.',
            description: '',
          },
          {
            title: 'VI. Implementar un buzón virtual de sugerencias.',
            description: '',
          },
          {
            title: 'VII. Realizar reuniones abiertas con los estudiantes.',
            description: '',
          },
          {
            title: 'VIII. Fortalecer la atención psicológica.',
            description: '',
          },
          {
            title: 'IX. Mejorar horarios de atención en el centro médico.',
            description: '',
          },
          {
            title: 'X. Promover actividades deportivas y culturales durante todo el año.',
            description: '',
          },
          {
            title: 'XI. Hackáthones de datos(evento).',
            description: '',
          },
          {
            title: 'XII. Promover el uso del transporte universitario en actividades académicas de investigación desde el ciclo I.',
            description: '',
          },
          {
            title: 'XIII. Informes mensuales de gestión.',
            description: '',
          },
          {
            title: 'XIV. Reuniones abiertas con estudiantes.',
            description: '',
          },
          {
            title: 'XV. Encuestas permanentes.',
            description: '',
          },
          {
            title: 'XVI. Buzón virtual de sugerencias.',
            description: '',
          },
          {
            title: 'XVII. Rendición de cuentas.',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ingenieria-ambiental',
    school: 'Ingeniería Ambiental',
    color: '#0553DB',
    gradient: 'from-[#0553DB] via-[#042881] to-[#0553DB]',
    categories: [
      {
        name: '1. PROPUESTAS DESDE EL CONSEJO DE FACULTAD',
        color: '#042881',
        proposals: [
          {
            title: 'Propuesta A: Programa Modular de Herramientas Digitales y Certificaciones Competitivas',
            description: '',
            items: [
              '1. Gratuito e Inmediato (Software Libre y Capacitación Abierta): Talleres Internos de QGIS y AutoCAD: Institucionalizar talleres de software libre y diseño técnico básico dictados por estudiantes de últimos ciclos con dominio técnico calificado o docentes de la especialidad, respaldados con certificación oficial gratuita de la Facultad. Centralización de MOOCs: Crear una red de difusión y soporte para cursos masivos gratuitos con certificación internacional (Copernicus de la UE, Google Académico, plataformas del MTPE y SENATI) enfocados en gestión ambiental y seguridad. Costo cero para el estudiante y fortalecimiento inmediato del Currículum Vitae desde los primeros ciclos de la carrera.',
              '2. Gestión Institucional (Licenciamiento ArcGIS y Autodesk): Auditoría de Convenios Tecnológicos: Fiscalizar si la UNAJMA cuenta con convenios de educación vigentes. De no existir, iniciar inmediatamente la solicitud formal para acceder a los programas de licencias educativas gratuitas o de muy bajo costo que corporaciones como ESRI (ArcGIS Pro) y Autodesk ofrecen a universidades públicas. Acceso legal, oficial y actualizado a las herramientas SIG y de modelamiento más demandadas por el mercado laboral.',
              '3. Certificación Externa (SSOMA, ISO 14001, SST): Bolsas de Compra Corporativa Estudiantil: Al ser certificaciones emitidas por entes externos con un costo fijo, el Consejo negociará convenios corporativos por volumen de estudiantes. Al presentarnos como un bloque masivo de la UNAJMA, se reducirán los costos individuales de certificación en ISO 14001, SSOMA y Seguridad y Salud en el Trabajo hasta en un 50%. Inserción laboral altamente competitiva en los sectores minero, industrial y de construcción civil de la región Apurímac.',
            ],
          },
          {
            title: 'Propuesta B: Plan de Convenios Coactivos y Prácticas Reales con Enfoque Territorial',
            description: '',
            items: [
              'Auditoría de Convenios Históricos: Exigir un informe detallado al Decanato en los primeros 30 días de representación sobre el estado real de los convenios de la EPIAM (vigentes, vencidos e inactivos) para sincerar las plazas de prácticas disponibles.',
              'Priorización y Foco Regional: Concentrar la capacidad de gestión en un grupo corto de instituciones estratégicas de la zona donde existe viabilidad real de inserción: OEFA, ANA (Autoridad Nacional del Agua), SERFOR, consultoras ambientales locales y las Gerencias de Gestión Ambiental de la Municipalidad Provincial de Andahuaylas y las municipalidades distritales de San Jerónimo y Talavera.',
              'Células de Acompañamiento Técnico: Conformar equipos de apoyo técnico integrados por estudiantes de últimos ciclos que asesoren activamente en el armado de expedientes y realicen el seguimiento burocrático, asegurando que los trámites no se queden congelados en las oficinas administrativas.',
            ],
          },
        ],
      },
      {
        name: '2. PROPUESTAS DESDE LA ASAMBLEA UNIVERSITARIA',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Propuesta C: Institucionalización Financiera del Programa de Educación y Monitoreo Ambiental de la EPIAM',
            description: '',
            items: [
              'Reforma del Reglamento de RSU: Impulsar desde la Asamblea la modificación de las normativas de Responsabilidad Social Universitaria para crear el Programa de Extensión Universitaria en Educación y Monitoreo Ambiental de la UNAJMA. Esto validará formalmente las intervenciones técnicas de los estudiantes en las comunidades altoandinas de la provincia como horas de RSU obligatorias para el egreso.',
              'Blindaje de Fondos para Proyección Social: Asegurar que las partidas de Proyección Social de la universidad (que frecuentemente se devuelven al Estado por falta de propuestas técnicas) financien de forma obligatoria la logística, movilidad, viáticos y materiales didácticos de las brigadas estudiantiles, reduciendo a cero el costo económico para el alumno participante.',
              'Estructura Orgánica Sostenible: Institucionalizar el programa mediante resolución de Asamblea bajo un modelo de Comité Fiscalizable integrado por un Coordinador General Estudiantil (elegido por mérito académico), un Docente Asesor del área de Gestión Ambiental, y representantes de Bienestar Universitario, garantizando su continuidad independientemente de la gestión de turno.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ingenieria-agroindustrial',
    school: 'Ingeniería Agroindustrial',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'Propuestas',
        color: '#042881',
        proposals: [
          {
            title: 'Fortalecimiento de laboratorios',
            description: 'No podemos hablar de calidad educativa si nuestros laboratorios no cuentan con equipos adecuados, materiales suficientes y mantenimiento constante. Por eso proponemos el fortalecimiento integral de los laboratorios de enseñanza e investigación de todas las escuelas profesionales.',
            items: [
              'mejorar el equipamiento,',
              'aumentar materiales y reactivos,',
              'implementar mantenimiento permanente,',
              'y garantizar espacios adecuados para las prácticas.',
              'Inventario obligatorio de laboratorios y renovación de laboratorios',
              'Modernización de Laboratorios y mantenimiento',
            ],
          },
          {
            title: 'Más acceso estudiantil a investigación',
            description: '',
          },
          {
            title: 'Fiscalización y transparencia presupuestal',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ingenieria-sistemas',
    school: 'Ingeniería de Sistemas',
    color: '#0553DB',
    gradient: 'from-[#0553DB] via-[#042881] to-[#0553DB]',
    categories: [
      {
        name: 'PROPUESTAS DE INGENIERIA SISTEMAS',
        color: '#042881',
        proposals: [
          {
            title: '1. Informe mensual del representante estudiantil',
            description: 'Acuerdos del Consejo de Facultad, pedidos realizados y avances.',
          },
          {
            title: '2. Diagnóstico de laboratorios de Ingeniería por escuela profesional',
            description: 'Equipos, software, internet, horarios, materiales y necesidades.',
          },
          {
            title: '3. Revisión estudiantil de sílabos y evaluaciones',
            description: 'Detectar cursos con problemas recurrentes.',
          },
          {
            title: '4. Mesa de diálogo por escuela profesional una vez por ciclo',
            description: 'Sistemas, Agroindustrial, Ambiental y las carreras que correspondan según implementación vigente.',
          },
          {
            title: '5. Banco de problemas académicos frecuentes',
            description: 'Cursos con cruces de horario, falta de docentes, falta de prácticas, demora de notas, cambios no informados.',
          },
          {
            title: '6. Semilleros de investigación por carrera',
            description: 'Con docentes asesores y temas conectados a problemas reales de Apurímac.',
          },
          {
            title: '7. Capacitaciones técnicas cortas',
            description: 'Programación, redes, AutoCAD, GIS, laboratorio, inocuidad, seguridad ambiental, formulación de proyectos, según cada escuela.',
          },
          {
            title: '8. Seguimiento a acuerdos del Consejo de Facultad',
            description: 'Usando una matriz simple: pedido, fecha, responsable, estado y resultado.',
          },
          {
            title: '9. Defensa del estudiante con sustento, no con gritos',
            description: 'Todo reclamo debe ir con evidencias, firmas, documentos, encuestas o informes.',
          },
        ],
      },
    ],
  },
  {
    id: 'contabilidad',
    school: 'Contabilidad',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'PROPUESTAS DE CONTABILIDAD',
        color: '#042881',
        proposals: [
          {
            title: 'Convenios para prácticas preprofesionales',
            description: 'Gestionar más convenios para prácticas preprofesionales con empresas, estudios contables, bancos y entidades públicas.',
          },
          {
            title: 'Talleres gratuitos de herramientas contables',
            description: 'Solicitar talleres gratuitos de manejo de Excel, Power BI, SAP, SIAF, SIGA y otros programas contables.',
          },
          {
            title: 'Investigación y movilidad estudiantil',
            description: 'Impulsar más oportunidades de investigación, semilleros y movilidad estudiantil.',
          },
          {
            title: 'Congresos de Contabilidad',
            description: 'Gestionar la realización de congresos de Contabilidad con ponentes especializados, así como promover la participación de los estudiantes en congresos nacionales, fortaleciendo su formación académica y actualización profesional.',
          },
        ],
      },
    ],
  },
]
