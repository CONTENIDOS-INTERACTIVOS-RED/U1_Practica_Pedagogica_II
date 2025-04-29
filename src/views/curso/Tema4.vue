<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Dimensiones del desarrollo en la educación preescolar en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/1.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Para comprender la identidad y el propósito de una institución educativa, es imprescindible conocer su Proyecto Educativo Institucional (PEI). Este documento, lejos de ser un simple requisito administrativo, constituye la esencia de la institución, dado que define su orientación pedagógica, sus valores y el camino que seguirá para alcanzar sus objetivos. A través del PEI, cada comunidad educativa establece las bases sobre las cuales se organizará el aprendizaje, la convivencia y la gestión escolar (Alvarado y Mendoza, 2011).
    
    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Observación en el centro de práctica")
            p Desde aquí se identificará que en el nivel de jardín se fortalecerán aspectos fundamentales como la identidad, las relaciones interpersonales, el lenguaje, la expresión oral y escrita, el pensamiento lógico y la resolución de problemas. Estas dimensiones se desarrollarán mediante estrategias pedagógicas establecidas en los Proyectos Educativos Institucionales (PEI) de las instituciones, los cuales responderán a la política pública de primera infancia "De Cero a Siempre", que enfatiza la importancia de un aprendizaje integral en un ambiente seguro y estimulante.
            p La revisión documental de los PEI y los lineamientos del Ministerio de Educación Nacional (MEN) y el Instituto Colombiano de Bienestar Familiar (ICBF), revelará que la educación en el nivel de jardín no solo se enfocará en el desarrollo cognitivo, sino también en aspectos como la coordinación motriz, la creatividad a través del arte y la música, y el respeto por los valores y la convivencia armoniosa. Estas disposiciones se alinearán con el Decreto 1075 del 2015, el cual establece que la educación inicial deberá garantizar experiencias que permitan a los niños interactuar con su entorno de manera activa y significativa.
    
          .div(titulo="Análisis del contexto institucional")
            p Este análisis, a través de la observación y la revisión de los documentos institucionales, permitirá identificar cómo las instituciones educativas habrán incorporado en sus microcurrículos metodologías basadas en el juego, la exploración y la interacción. Estas metodologías aseguran que el desarrollo infantil se aborde desde un enfoque integral, permitiendo que los niños y las niñas desarrollen habilidades en diversas áreas de su vida.
    
          .div(titulo="Observación institucional y la revisión documental")
            p Este proceso de análisis, contribuirá a una comprensión profunda de cómo cada dimensión del desarrollo infantil cobrará vida en los espacios de aprendizaje. Al comparar las metodologías observadas en el centro de práctica con la normatividad nacional, se evidenciará la alineación de las prácticas pedagógicas con las disposiciones legales, asegurando que el desarrollo infantil se enfoque de manera integral y en armonía con los objetivos nacionales de la educación preescolar.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Acompáñenos en este recorrido educativo, donde cada dimensión del desarrollo infantil cobra vida en los espacios de aprendizaje. ¡Vamos a descubrir y aprender juntos!

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-lg-2
            h2.mb-4(data-aos="flip-up") Espacios de aprendizaje
            p.mb-4(data-aos="fade-right") Los espacios de aprendizaje en la educación inicial desempeñan un papel fundamental en el desarrollo integral de los niños y las niñas, al brindar ambientes que favorecen la exploración, la interacción y la construcción del conocimiento. En el PDF <b>Espacios de aprendizaje</b>, se analizan las diferentes dimensiones del desarrollo infantil, incluyendo la socioafectiva, comunicativa, cognitiva, corporal, estética, y espiritual-ética. A través de este contenido, se explora cómo cada dimensión contribuye al fortalecimiento de habilidades esenciales como la autonomía, la expresión, la resolución de problemas y la convivencia armónica, garantizando experiencias de aprendizaje significativas y enriquecedoras.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Espacios de aprendizaje.
    
          .col-lg-5.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/4.png', alt='')



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
