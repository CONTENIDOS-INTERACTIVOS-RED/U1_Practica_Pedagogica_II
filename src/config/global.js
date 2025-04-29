export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Reconocimiento del contexto institucional a través de la observación y revisión documental',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Características organizativas, pedagógicas y normativas, para las instituciones educativas en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características organizativas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características pedagógicas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Normatividad para las instituciones educativas en Colombia',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prejardín',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Propósitos de la educación en prejardín',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Jardín',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Propósitos de la educación en jardín',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Dimensiones del desarrollo en la educación preescolar en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Polo Albarracín, M. & Sánchez Buitrago, J. O. (2022). La gestión directiva en las instituciones educativas: (1 ed.). Editorial Unimagdalena',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/223861 ',
    },
    {
      referencia:
        'López Martínez, J. (2012). El liderazgo educativo: los equipos directivos en centros de primaria, elementos básicos del éxito escolar: ( ed.). Ministerio de Educación y Formación Profesional de España. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49311',
    },
    {
      referencia:
        'Alvarado, C. E. & Mendoza Bautista, C. C. (Dir.). (2011). Modelos de pensamiento y gestión escolar mediada por el Proyecto Educativo Institucional (PEI): ( ed.). Centro Internacional de Educación Continua - Universidad Pedagógica Experimental Libertador. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/177588',
    },
    {
      referencia:
        'Guzmán, L. M. G., & Chirinos, S. R. P. (2020). Las prácticas pedagógicas de los docentes en Colombia, en función del Proyecto Educativo Institucional (PEI). Horizontes. Revista de Investigación en Ciencias de la Educación, 4(14), 102-117. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9114572',
    },
    {
      referencia:
        'Garzón Guerra, E., & Acuña Beltrán, L. F. (2016). Integración de los proyectos transversales al currículo: una propuesta para enseñar ciudadanía en ciclo inicial. Rev. Actual. Investig. Educ, 190-216. ',
      link:
        'https://www.scielo.sa.cr/scielo.php?pid=S1409-47032016000300190&script=sci_abstract&tlng=pt ',
    },
    {
      referencia:
        'Román, J., Peñafiel, M., Alvear, L., Chávez, R., & Vinueza, M. (2021). Modelos pedagógicos aplicados en educación inicial. Espacios, 42(01), 97-106. ',
      link: 'https://www.revistaespacios.com/a21v42n01/a21v42n01p08.pdf ',
    },
    {
      referencia:
        'Hernández Jara, P. V., Onofre Zapata, V. D. R., & Gómez Alcívar, V. J. (2021). La pedagogía Montessori y su incidencia en la Educación Inicial. Dilemas contemporáneos: educación, política y valores, 9(1). ',
      link: 'https://www.scielo.org.mx/scielo.php?pid=S2007-78902021000700030 ',
    },
    {
      referencia:
        'Lliguilema, E. P. J., Vargas, G. L. S., & Vasconez, L. A. C. (2023). El método de Reggio Emilia en el desarrollo de la creatividad en los niños de educación inicial. Dilemas contemporáneos: Educación, Política y Valores. ',
      link:
        'https://dilemascontemporaneoseducacionpoliticayvalores.com/index.php/dilemas/article/view/3723 ',
    },
    {
      referencia:
        'Ley 115/1994. Ley General de Educación | SITEAL. (s.f.). SITEAL. ',
      link:
        'https://siteal.iiep.unesco.org/bdnp/189/ley-1151994-ley-general-educacion ',
    },
    {
      referencia:
        'Decreto 1860 de 1994 Ministerio de Educación Nacional - Colombia. (s.f.). www.redjurista.com. ',
      link:
        'https://www.redjurista.com/Documents/decreto_1860_de_1994_ministerio_de_educacion_nacional.aspx#/ ',
    },
    {
      referencia:
        'Román, J., Peñafiel, M., Alvear, L., Chávez, R., & Vinueza, M. (2021). Modelos pedagógicos aplicados en educación inicial. Espacios, 42(01), 97-106. ',
      link: 'https://www.revistaespacios.com/a21v42n01/a21v42n01p08.pdf ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2014) Documento 20. Sentido de la Educación Inicial',
      link:
        'https://www.mineducacion.gov.co/1759/articles-341810_archivo_pdf_sentido_de_la_educacion.pdf',
    },
    {
      referencia:
        'Hernández Jara, P. V., Onofre Zapata, V. D. R., & Gómez Alcívar, V. J. (2021). La pedagogía Montessori y su incidencia en la Educación Inicial. Dilemas contemporáneos: educación, política y valores, 9(1). ',
      link: 'https://www.scielo.org.mx/scielo.php?pid=S2007-78902021000700030 ',
    },
    {
      referencia:
        'Folgueira Hernández, M. & Subías Pérez, J. M. (2018). Educación infantil: ( ed.). Ministerio de Educación y Formación Profesional de España. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49451 ',
    },
    {
      referencia:
        'Aznar Oro, P. Morte Remacha, J. L. & Serrano Ferruz, R. (2021). La educación física en la educación infantil de 3 a 6 años: ( ed.). Editorial INDE. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/177890 ',
    },
    {
      referencia:
        'Camargo Abello, M. (2014). Sentido de la educación inicial. ',
      link: 'https://repositorio.minedu.gob.pe/handle/20.500.12799/4682',
    },
    {
      referencia:
        'García-Ibarra, M. A., & Samada-Grasst, Y. (2022). El método lúdico para el desarrollo de la identidad y autonomía en niños de 4 años. MQRInvestigar, 6(3), 1109-1129. ',
      link: 'https://www.investigarmqr.com/ojs/index.php/mqr/article/view/57 ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (MEN) (2014). Bases curriculares para la Educación Inicial y preescolar. ',
      link:
        'https://www.mineducacion.gov.co/1780/articles-341880_recurso_1.pdf ',
    },
    {
      referencia:
        'Garcés, L. M. C., Monsalve, P. I. H., Chavarriaga, C. P., & Moreno, J. A. T. (2017). Pilares de la educación inicial: mediadores para el aprendizaje. JSR Funlam Journal of Students´ Research (revista descontinuada), (2), 86-94. ',
      link:
        'https://revistas.ucatolicaluisamigo.edu.co/index.php/jsr/article/view/2582 ',
    },
    {
      referencia:
        'Zabalza, M. A. (2016). Calidad en la educación infantil: ( ed.). Narcea Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/45952 ',
    },
    {
      referencia:
        'Farkas, C. (2012). Gestos que hablan: aprendiendo a comunicarse con nuestros niños: ( ed.). Editorial ebooks Patagonia - Ediciones Universidad Católica de Chile',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67725 ',
    },
    {
      referencia:
        'Sánchez Alcón, C. & Navarro Navarro, L. (2010). ¿Cómo educar en valores cívicos a los peques?: educación ética para la etapa de infantil y primer ciclo de primaria: ( ed.). Ediciones Octaedro, S.L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61882 ',
    },
    {
      referencia:
        'Ramírez, I. C. (2008). Desarrollo de la creatividad en Educación Infantil. Creatividad y sociedad, 20(12), 7-20',
      link:
        'https://educrea.cl/wp-content/uploads/2017/05/DOC1-desarrollo-creatividad.pdf ',
    },
    {
      referencia:
        'Gallego Castaño, C. A., Sánchez Zuleta, A., & Carolina Giraldo, L. (2017). Relaciones existentes entre situaciones críticas del contexto familiar y el desarrollo de la dimensión socio afectiva en niños del jardín del Hogar Infantil José María Osorio del municipio de Guarne (Doctoral dissertation, Corporación Universitaria Minuto de Dios). ',
      link:
        'https://repository.uniminuto.edu/server/api/core/bitstreams/1ab6f219-328d-46c1-baba-7151fd5780bd/content ',
    },
  ],
  glosario: [
    {
      termino: 'Currículo',
      significado:
        'Conjunto de objetivos, competencias, contenidos, metodologías y criterios de evaluación que guían el proceso educativo en una institución.',
    },
    {
      termino: 'Dimensiones del desarrollo',
      significado:
        'Ámbitos en los que se desarrolla el niño o la niña en la educación inicial, incluyendo lo cognitivo, socioemocional, comunicativo, corporal y artístico.',
    },
    {
      termino: 'Educación inicial',
      significado:
        'Etapa del sistema educativo dirigida a niños y las niñas desde la primera infancia, con enfoque en el desarrollo integral.',
    },
    {
      termino: 'Enfoque pedagógico',
      significado:
        'Modelo educativo que orienta la enseñanza y el aprendizaje según principios y estrategias específicas.',
    },
    {
      termino: 'Macrocurrículo',
      significado:
        'Lineamientos generales definidos por el Estado para orientar la educación a nivel nacional.',
    },
    {
      termino: 'Metodología activa',
      significado:
        'Estrategias de enseñanza que involucran a los niños y las niñas en su proceso de aprendizaje a través de la exploración, el juego y la participación.',
    },
    {
      termino: 'Microcurrículo',
      significado:
        'Planeación pedagógica específica de una institución educativa, adaptada a su contexto y necesidades particulares.',
    },
    {
      termino: 'Normatividad educativa',
      significado:
        'Conjunto de leyes, decretos y reglamentos que regulan el sistema educativo en Colombia.',
    },
    {
      termino: 'PEI (Proyecto Educativo Institucional)',
      significado:
        'Documento que define la identidad, misión, visión, principios y estrategias pedagógicas de una institución educativa.',
    },
    {
      termino: 'Prejardín',
      significado:
        'Nivel educativo en la educación inicial que atiende a niños y las niñas entre los 2 y 3 años, enfocándose en su desarrollo integral.',
    },
    {
      termino: 'Proyectos transversales',
      significado:
        'Estrategias educativas que integran diferentes áreas del conocimiento y promueven valores y habilidades esenciales en los niños y las niñas.',
    },
    {
      termino: 'Ruta Integral de Atención',
      significado:
        'Modelo que articula acciones intersectoriales para garantizar el desarrollo y bienestar de la primera infancia. ',
    },
    {
      termino: 'Sistema Educativo Colombiano',
      significado:
        'Conjunto de instituciones, normativas y políticas que regulan la educación en Colombia en todos sus niveles.',
    },
    {
      termino: 'Transición educativa',
      significado:
        'Paso progresivo de un nivel educativo a otro, garantizando la continuidad del aprendizaje y el desarrollo del niño o la niña.',
    },
  ],
}
