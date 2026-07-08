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
    id: 'asamblea-universitaria',
    school: 'Asamblea Universitaria',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN ACADÉMICA A NIVEL DE LA UNIVERSIDAD',
        color: '#042881',
        proposals: [
          {
            title: 'Transformación Digital Universitaria',
            description: 'Impulsar la digitalización integral de los servicios académicos y administrativos mediante la implementación de plataformas tecnológicas que optimicen el seguimiento del desempeño estudiantil y simplifiquen los procesos universitarios. Asimismo, promover la incorporación de medios de pago digitales, como Yape y Págalo.pe, con el fin de agilizar los procesos de matrícula y otros trámites, reduciendo tiempos de atención. De igual forma, establecer lineamientos institucionales para el uso ético, seguro y responsable de la inteligencia artificial en la enseñanza, la investigación y la gestión universitaria.',
          },
          {
            title: 'Aseguramiento de la Calidad Académica',
            description: 'Fortalecer la calidad educativa mediante la innovación pedagógica, la capacitación permanente del personal docente, la evaluación continua de los procesos de enseñanza-aprendizaje y la mejora permanente de los servicios académicos. Asimismo, promover el fortalecimiento de bibliotecas especializadas, laboratorios, infraestructura, equipamiento y recursos tecnológicos que contribuyan a una formación profesional de excelencia.',
          },
          {
            title: 'Internacionalización Académica',
            description: 'Consolidar una política institucional de internacionalización que fortalezca la movilidad académica de estudiantes y docentes, la cooperación con universidades nacionales e internacionales y la internacionalización del currículo. Asimismo, promover mecanismos de reconocimiento y convalidación de hasta el 100 % de los créditos académicos obtenidos en programas de intercambio o pasantías, siempre que exista equivalencia curricular y se cumpla la normativa institucional vigente.',
          },
          {
            title: 'Fortalecimiento de la Organización Académica',
            description: 'Impulsar el fortalecimiento y la reorganización de las escuelas profesionales y el funcionamiento eficiente de los departamentos académicos, sobre la base de criterios técnicos, calidad educativa y demanda académica. Asimismo, promover la implementación del Ciclo Cero como estrategia de nivelación académica y evaluar, mediante estudios técnicos, financieros y legales, la reducción de las tasas por derechos de enseñanza y otros servicios académicos, priorizando la equidad y el acceso de los estudiantes.',
          },
          {
            title: 'Bienestar Universitario',
            description: 'Fortalecer el sistema de bienestar universitario mediante programas permanentes de tutoría y acompañamiento académico, con atención de profesionales especializados en psicología y orientación educativa. Asimismo, consolidar políticas de inclusión, accesibilidad y salud integral, promoviendo el desarrollo deportivo, cultural, artístico y de responsabilidad social como pilares de la formación integral del estudiante.',
          },
        ],
      },
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN DE LA INVESTIGACIÓN A NIVEL DE LA UNIVERSIDAD',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Fortalecimiento de la Política Institucional de Investigación',
            description: 'Actualizar la política institucional de investigación, innovación y desarrollo tecnológico, alineándola con las prioridades regionales, nacionales e internacionales. Asimismo, promover alianzas estratégicas con investigadores de reconocido prestigio, universidades y centros de investigación para fortalecer la asesoría científica, el intercambio académico y las pasantías de investigación para estudiantes y docentes.',
          },
          {
            title: 'Fomento de la Investigación Formativa',
            description: 'Institucionalizar y fortalecer los semilleros de investigación mediante una adecuada asignación de recursos económicos, programas de mentoría científica y estrategias que desarrollen competencias investigativas desde los primeros ciclos, promoviendo la participación activa de los estudiantes en proyectos de investigación.',
          },
          {
            title: 'Financiamiento e Incentivos para la Investigación',
            description: 'Impulsar el fortalecimiento de fondos concursables para proyectos de investigación, innovación y emprendimiento, así como establecer incentivos para la publicación en revistas indexadas, el registro de patentes, la obtención de fondos externos y la participación en congresos y eventos científicos nacionales e internacionales.',
          },
          {
            title: 'Fortalecimiento de la Producción Científica',
            description: 'Promover políticas institucionales que incrementen la producción científica mediante la publicación de artículos, libros, capítulos de libro y revistas académicas indexadas, fortaleciendo la visibilidad, el impacto y la calidad de la investigación desarrollada por docentes y estudiantes.',
          },
          {
            title: 'Infraestructura y Transformación Digital para la Investigación',
            description: 'Fortalecer los laboratorios, centros de investigación, bibliotecas digitales, repositorios institucionales y plataformas tecnológicas, incorporando herramientas de inteligencia artificial, análisis de datos y otras tecnologías emergentes que potencien la investigación científica y la innovación.',
          },
          {
            title: 'Vinculación con el Sector Productivo y la Sociedad',
            description: 'Promover la investigación aplicada mediante alianzas estratégicas con entidades públicas, privadas y organizaciones sociales, orientando la producción científica hacia la solución de los principales desafíos de la región y del país, fortaleciendo la transferencia tecnológica y el impacto social de la universidad.',
          },
        ],
      },
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN ADMINISTRATIVA A NIVEL DE LA UNIVERSIDAD',
        color: '#8C0B1A',
        proposals: [
          {
            title: 'Reforma del Estatuto Universitario',
            description: 'Promover la actualización del Estatuto para fortalecer la gobernanza universitaria, consolidar los principios de transparencia, gobierno abierto y modernización institucional, así como garantizar una representación estudiantil Centros Federados o círculos de estudios con voz y participación en los espacios de decisión, conforme a la Ley Universitaria.',
          },
          {
            title: 'Fortalecimiento del Planeamiento Institucional',
            description: 'Velar por el cumplimiento del Plan Estratégico Institucional (PEI), el Plan Operativo Institucional (POI) y demás instrumentos de gestión, mediante el seguimiento periódico de metas, la evaluación de indicadores de desempeño y la participación de la comunidad universitaria en los procesos de monitoreo y mejora continua.',
          },
          {
            title: 'Fortalecimiento de la Fiscalización y Transparencia',
            description: 'Reforzar el rol de la Comisión Permanente de Fiscalización, promoviendo la transparencia en los procesos institucionales, el acceso oportuno a la información pública, la prevención de riesgos de gestión y el desarrollo de mesas permanentes de diálogo con la comunidad universitaria.',
          },
          {
            title: 'Rendición de Cuentas y Control Institucional',
            description: 'Impulsar la evaluación técnica de la Memoria Anual, el seguimiento al Informe de Gestión del Rector, la revisión de la ejecución presupuestal y la difusión periódica de los resultados de gestión, fortaleciendo la transparencia y la confianza de la comunidad universitaria.',
          },
          {
            title: 'Gobierno Abierto y Participación Universitaria',
            description: 'Promover mecanismos permanentes de participación de estudiantes, docentes y trabajadores mediante cabildos universitarios, audiencias públicas y espacios de diálogo institucional, fortaleciendo la transparencia activa, la participación democrática y la toma de decisiones basada en evidencia.',
          },
        ],
      },
    ],
  },
  {
    id: 'consejo-universitario',
    school: 'Consejo Universitario',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN ACADÉMICA A NIVEL DE LA UNIVERSIDAD',
        color: '#042881',
        proposals: [
          {
            title: 'Modernización Curricular',
            description: 'Ratificar y actualizar periódicamente los planes de estudio, incorporando competencias digitales, inteligencia artificial, sostenibilidad, innovación, emprendimiento y formación por competencias, en concordancia con las demandas del mercado laboral, el licenciamiento institucional y los procesos de acreditación.',
          },
          {
            title: 'Transformación Digital de los Servicios Académicos',
            description: 'Aprobar la digitalización integral de los procesos académicos y administrativos mediante la implementación de matrícula virtual, expediente académico electrónico, firma digital, trámites en línea y medios de pago digitales interoperables, optimizando la prestación de los servicios universitarios.',
          },
          {
            title: 'Innovación Académica y Exposición de Resultados de Aprendizaje',
            description: 'Institucionalizar concursos, ferias académicas y exposiciones de proyectos, productos finales, prototipos e iniciativas de innovación desarrollados por las escuelas profesionales, promoviendo la creatividad, la investigación aplicada, el emprendimiento y la vinculación con la sociedad.',
          },
          {
            title: 'Fortalecimiento de la Calidad Docente',
            description: 'Aprobar programas permanentes de capacitación, evaluación del desempeño, certificación y actualización docente, promoviendo metodologías innovadoras, recursos tecnológicos y el uso ético y responsable de la inteligencia artificial en el proceso de enseñanza-aprendizaje.',
          },
          {
            title: 'Oportunidad en la Contratación y Nombramiento Docente',
            description: 'Disponer que los procesos de contratación, ratificación y nombramiento docente se planifiquen y ejecuten oportunamente, garantizando el inicio de cada semestre académico con la totalidad de docentes designados, conforme a la disponibilidad presupuestal y la normativa vigente.',
          },
          {
            title: 'Movilidad Académica e Internacionalización',
            description: 'Fortalecer los convenios nacionales e internacionales que promuevan la movilidad académica de estudiantes y docentes, el intercambio científico, las pasantías y el reconocimiento de créditos académicos, conforme a la normativa institucional.',
          },
          {
            title: 'Convenios para el Fortalecimiento de la Formación Práctica',
            description: 'Promover la suscripción de convenios con universidades e instituciones que cuenten con laboratorios especializados, centros de investigación y equipamiento de alta tecnología, facilitando pasantías, prácticas académicas y actividades de formación para estudiantes, especialmente de las nuevas escuelas profesionales.',
          },
          {
            title: 'Fortalecimiento de la Formación Profesional',
            description: 'Actualizar el Reglamento Académico para fortalecer las prácticas preprofesionales, el Ciclo Cero y otros mecanismos de nivelación académica, promoviendo estrategias que favorezcan el acceso, la permanencia y la culminación oportuna de los estudios.',
          },
          {
            title: 'Sistema de Orden de Mérito por Ciclos Académicos',
            description: 'Evaluar e incorporar en el Reglamento Académico un sistema de orden de mérito por ciclo académico o nivel de formación, sustentado en criterios de equidad, objetividad y meritocracia, con el propósito de garantizar una evaluación comparativa entre estudiantes que cursan la misma etapa de formación, fortaleciendo la igualdad de oportunidades para el acceso a becas, estímulos, intercambios académicos y demás beneficios institucionales.',
          },
        ],
      },
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN DE LA INVESTIGACIÓN A NIVEL DE LA UNIVERSIDAD',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Fortalecimiento de la Política Institucional de Investigación',
            description: 'Aprobar lineamientos que impulsen la investigación científica, la innovación y el desarrollo tecnológico, priorizando proyectos orientados a resolver problemáticas de la región, del país y alineados con los Objetivos de Desarrollo Sostenible.',
          },
          {
            title: 'Financiamiento e Incentivos para la Investigación',
            description: 'Priorizar recursos para fondos concursables destinados a proyectos de investigación, innovación y emprendimiento, así como incentivos para publicaciones científicas, obtención de patentes, movilidad académica, pasantías y participación en congresos y redes nacionales e internacionales.',
          },
          {
            title: 'Fortalecimiento de Laboratorios y Centros de Investigación',
            description: 'Impulsar la modernización y el equipamiento permanente de laboratorios, institutos y centros de investigación, garantizando el mantenimiento de equipos, la disponibilidad de materiales e insumos, y el acceso equitativo para estudiantes y docentes de todas las escuelas profesionales.',
          },
          {
            title: 'Cooperación Científica e Internacionalización',
            description: 'Fortalecer convenios con universidades, centros de investigación, entidades públicas, empresas privadas e investigadores de reconocido prestigio para desarrollar proyectos conjuntos, pasantías, asesorías especializadas, transferencia tecnológica y programas de innovación.',
          },
          {
            title: 'Movilidad Académica para la Investigación',
            description: 'Promover programas de intercambio, estancias de investigación y pasantías en laboratorios e instituciones nacionales e internacionales, priorizando la participación de estudiantes y docentes con proyectos de investigación de alto impacto.',
          },
          {
            title: 'Producción Científica y Difusión del Conocimiento',
            description: 'Fortalecer las revistas científicas institucionales, repositorios digitales y espacios de divulgación académica, promoviendo la publicación de artículos científicos, libros, capítulos de libros y la participación en eventos científicos nacionales e internacionales.',
          },
          {
            title: 'Capacitación Permanente en Investigación',
            description: 'Implementar programas continuos de formación en metodología de la investigación, redacción científica, estadística aplicada, inteligencia artificial para la investigación, propiedad intelectual, formulación de proyectos y gestión de fondos concursables, fortaleciendo las competencias investigativas de estudiantes y docentes.',
          },
          {
            title: 'Reconocimiento al Mérito Científico',
            description: 'Establecer políticas institucionales de reconocimiento e incentivos para estudiantes, docentes e investigadores que destaquen por su producción científica, innovación, obtención de financiamiento externo, patentes, participación en congresos y representación de la universidad en eventos académicos nacionales e internacionales.',
          },
        ],
      },
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN ADMINISTRATIVA A NIVEL DE LA UNIVERSIDAD',
        color: '#8C0B1A',
        proposals: [
          {
            title: 'Modernización de la Gestión Universitaria',
            description: 'Implementar un Sistema Integrado de Gestión Universitaria que fortalezca la transformación digital mediante la digitalización de trámites, la firma digital, el expediente electrónico, la gestión documental y la interoperabilidad de los sistemas administrativos y académicos, optimizando la eficiencia y la calidad de los servicios institucionales.',
          },
          {
            title: 'Actualización Normativa y Simplificación Administrativa',
            description: 'Promover la revisión, actualización y armonización permanente del Reglamento Académico, el Texto Único de Procedimientos Administrativos (TUPA), las directivas y demás instrumentos de gestión, incorporando el enfoque de formación por competencias, la simplificación administrativa y la mejora continua de los procesos institucionales.',
          },
          {
            title: 'Gobierno Digital y Atención al Usuario',
            description: 'Implementar un Sistema Institucional de Atención al Usuario, con participación del Tercio Estudiantil como mecanismo de representación y seguimiento, que integre la gestión de trámites, el monitoreo de expedientes, la atención de quejas, reclamos, denuncias y sugerencias, garantizando una atención oportuna, transparente y accesible mediante plataformas digitales.',
          },
          {
            title: 'Movilidad Universitaria',
            description: 'Gestionar la incorporación progresiva de una flota de transporte universitario destinada al traslado de estudiantes, docentes y personal administrativo para actividades académicas, de investigación, extensión universitaria y representación institucional, priorizando criterios de seguridad, accesibilidad y sostenibilidad, conforme a la disponibilidad presupuestal.',
          },
          {
            title: 'Accesibilidad al Transporte Universitario',
            description: 'Gestionar, en coordinación con las autoridades competentes y las empresas concesionarias del transporte urbano, mecanismos que garanticen el respeto efectivo del medio pasaje universitario y la ampliación de su horario de aplicación, asegurando el acceso oportuno de los estudiantes a las actividades académicas.',
          },
          {
            title: 'Universidad Sostenible',
            description: 'Implementar una política institucional de sostenibilidad ambiental mediante la instalación de dispensadores de agua purificada, promoviendo el uso de envases reutilizables, la reducción del consumo de plásticos de un solo uso, la gestión responsable de residuos sólidos y el fortalecimiento de una cultura ambiental en la comunidad universitaria.',
          },
          {
            title: 'Fortalecimiento del Talento Humano',
            description: 'Promover programas permanentes de capacitación, evaluación del desempeño, desarrollo profesional y reconocimiento al mérito del personal docente y administrativo, fortaleciendo una gestión basada en la meritocracia, la innovación, la eficiencia y la mejora continua.',
          },
        ],
      },
    ],
  },
  {
    id: 'facultad-ingenieria',
    school: 'Facultad de Ingeniería',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN ACADÉMICA A NIVEL DE LA FACULTAD',
        color: '#042881',
        proposals: [
          {
            title: 'Modernizar y equipar permanentemente los laboratorios especializados, talleres y centros de simulación de todas las Escuelas Profesionales.',
            description: '',
          },
          {
            title: 'Gestionar licencias institucionales de software especializado (AutoCAD, Civil 3D, ArcGIS, Revit, BIM, ETABS, SAP2000, MATLAB, Python, R, entre otros) para la formación académica y la investigación.',
            description: '',
          },
          {
            title: 'Promover certificaciones nacionales e internacionales en software, tecnologías emergentes, idiomas y competencias profesionales.',
            description: '',
          },
          {
            title: 'Institucionalizar concursos de innovación, ferias tecnológicas, hackatones y exposiciones de proyectos integradores y productos finales desarrollados por los estudiantes.',
            description: '',
          },
          {
            title: 'Actualización Curricular Permanente',
            description: 'Revisar y aprobar periódicamente los currículos y planes de estudio, incorporando competencias digitales, inteligencia artificial, sostenibilidad, innovación, emprendimiento y formación por competencias, en concordancia con las necesidades del entorno profesional.',
          },
          {
            title: 'Seguimiento Curricular',
            description: 'Implementar mecanismos de evaluación permanente de sílabos, resultados de aprendizaje y desempeño académico, promoviendo la mejora continua de la calidad educativa.',
          },
          {
            title: 'Participación Estudiantil',
            description: 'Fortalecer la participación de los representantes estudiantiles en las comisiones académicas y en los procesos de mejora curricular, garantizando espacios de diálogo y propuestas para el fortalecimiento de la Facultad.',
          },
        ],
      },
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN DE LA INVESTIGACIÓN A NIVEL DE LA FACULTAD',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Promover proyectos de investigación interdisciplinarios vinculados a las necesidades de la región y del país.',
            description: '',
          },
          {
            title: 'Impulsar la participación de estudiantes y docentes en congresos, publicaciones científicas, concursos y redes de investigación.',
            description: '',
          },
          {
            title: 'Gestionar el fortalecimiento de laboratorios, centros de investigación, bibliotecas especializadas y software académico para el desarrollo de la investigación.',
            description: '',
          },
          {
            title: 'Promover la participación estudiantil en proyectos de investigación desde los primeros ciclos mediante programas de mentoría científica.',
            description: '',
          },
          {
            title: 'Promover la participación de estudiantes y docentes en congresos, publicaciones científicas y concursos nacionales e internacionales.',
            description: '',
          },
          {
            title: 'Desarrollar proyectos de investigación vinculados a infraestructura, minería, energía, medio ambiente, tecnologías digitales, inteligencia artificial, automatización y desarrollo sostenible.',
            description: '',
          },
        ],
      },
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN ADMINISTRATIVA A NIVEL DE LA FACULTAD',
        color: '#8C0B1A',
        proposals: [
          {
            title: 'Modernizar los procesos administrativos de la Facultad mediante la digitalización de trámites y expedientes académicos.',
            description: '',
          },
          {
            title: 'Fortalecer los mecanismos de atención al estudiante mediante plataformas para consultas, solicitudes, quejas y seguimiento de expedientes.',
            description: '',
          },
          {
            title: 'Promover la transparencia en los acuerdos del Consejo de Facultad mediante la difusión periódica de informes de gestión.',
            description: '',
          },
          {
            title: 'Implementar mesas permanentes de diálogo entre autoridades, docentes y estudiantes para atender oportunamente las necesidades académicas.',
            description: '',
          },
          {
            title: 'Promover el mantenimiento preventivo y la mejora continua de aulas, laboratorios, talleres y demás ambientes académicos.',
            description: '',
          },
          {
            title: 'Fortalecer la coordinación entre la Facultad y las Escuelas Profesionales para garantizar el cumplimiento de los planes de estudio y los objetivos institucionales.',
            description: '',
          },
          {
            title: 'Suscribir convenios con universidades, empresas, colegios profesionales, municipalidades y entidades públicas para prácticas, pasantías, investigación aplicada y transferencia tecnológica.',
            description: '',
          },
          {
            title: 'Gestionar convenios con universidades que cuenten con laboratorios de alta especialización para el desarrollo de pasantías y estancias académicas.',
            description: '',
          },
          {
            title: 'Fortalecer la inserción laboral mediante bolsas de trabajo, programas de empleabilidad y certificación de competencias profesionales.',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'facultad-ciencias-empresa',
    school: 'Facultad de Ciencias de la Empresa',
    color: '#042881',
    gradient: 'from-[#042881] via-[#0553DB] to-[#042881]',
    categories: [
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN ACADÉMICA A NIVEL DE LA FACULTAD',
        color: '#042881',
        proposals: [
          {
            title: 'Actualizar permanentemente los planes de estudio conforme a las tendencias nacionales e internacionales y a las necesidades del mercado laboral.',
            description: '',
          },
          {
            title: 'Implementar laboratorios especializados, centros de simulación clínica, consultorios académicos y aulas tecnológicas para fortalecer la formación práctica.',
            description: '',
          },
          {
            title: 'Promover certificaciones profesionales en herramientas digitales, gestión empresarial, finanzas, auditoría, marketing digital, salud pública, idiomas y liderazgo.',
            description: '',
          },
          {
            title: 'Fortalecer el aprendizaje mediante casos prácticos, simulaciones, clínicas empresariales y proyectos de intervención social.',
            description: '',
          },
          {
            title: 'Promover certificaciones profesionales en Excel Avanzado, Power BI, SAP, SIAF, SIGA, auditoría, marketing digital, historia clínica electrónica, idiomas y otras herramientas de alta demanda laboral.',
            description: '',
          },
          {
            title: 'Institucionalizar ferias empresariales, concursos de planes de negocio, simulaciones clínicas, casos prácticos, ruedas de negocios y exposiciones académicas por Escuela Profesional.',
            description: '',
          },
          {
            title: 'Garantizar que los procesos de contratación y ratificación docente concluyan oportunamente antes del inicio de cada semestre académico.',
            description: '',
          },
          {
            title: 'Fortalecer los programas de tutoría, consejería académica y acompañamiento psicológico para mejorar la permanencia y el bienestar estudiantil.',
            description: '',
          },
        ],
      },
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN DE LA INVESTIGACIÓN A NIVEL DE LA FACULTAD',
        color: '#FA9A06',
        proposals: [
          {
            title: 'Consolidar los semilleros de investigación en todas las Escuelas Profesionales de la Facultad.',
            description: '',
          },
          {
            title: 'Promover investigaciones orientadas al desarrollo empresarial, salud pública, gestión pública, innovación, emprendimiento, economía regional y responsabilidad social.',
            description: '',
          },
          {
            title: 'Incentivar publicaciones científicas, participación en congresos y movilidad académica nacional e internacional.',
            description: '',
          },
          {
            title: 'Gestionar convenios con hospitales, clínicas, centros de salud, empresas privadas, entidades financieras e instituciones públicas para fortalecer la investigación aplicada y la formación profesional.',
            description: '',
          },
          {
            title: 'Promover programas de incubación de empresas, innovación empresarial y transferencia del conocimiento.',
            description: '',
          },
        ],
      },
      {
        name: 'CONTRIBUCIÓN A LA GESTIÓN ADMINISTRATIVA A NIVEL DE LA FACULTAD',
        color: '#8C0B1A',
        proposals: [
          {
            title: 'Fortalecer la relación con el sector empresarial y sanitario para ampliar las oportunidades de prácticas preprofesionales, internados y empleo.',
            description: '',
          },
          {
            title: 'Implementar mecanismos digitales para la atención de solicitudes, seguimiento de expedientes y comunicación permanente con los estudiantes.',
            description: '',
          },
          {
            title: 'Promover informes periódicos de gestión y rendición de cuentas del Consejo de Facultad.',
            description: '',
          },
          {
            title: 'Supervisar permanentemente la calidad de los servicios académicos, laboratorios, centros de simulación, bibliotecas y demás recursos destinados a la formación profesional.',
            description: '',
          },
          {
            title: 'Impulsar programas de empleabilidad, seguimiento de egresados y certificación de competencias profesionales, fortaleciendo la inserción laboral de los futuros profesionales.',
            description: '',
          },
        ],
      },
    ],
  },
]
