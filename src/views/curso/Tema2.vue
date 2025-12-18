<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Prejardín '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Camargo (2014), afirma que los primeros años de vida son fundamentales para sentar las bases del desarrollo integral de los niños y las niñas. En este sentido, la educación en prejardín no solo se enfoca en el aprendizaje cognitivo, sino también en la construcción de la identidad y la autonomía, promoviendo el descubrimiento de habilidades y el fortalecimiento de la confianza en sí mismos. Estos principios están enmarcados en la normativa educativa colombiana, que busca garantizar una educación inicial de calidad, equitativa e inclusiva.
        p(data-aos="fade-left") Desde esta perspectiva, las experiencias pedagógicas en prejardín, juegan un papel esencial en el desarrollo infantil:
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Actividades significativas" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Actividades significativas
            p A través de actividades significativas, se fortalecen las habilidades comunicativas y expresivas, estimulando la curiosidad y el pensamiento creativo. La exploración del entorno se convierte en una estrategia clave para el aprendizaje, favoreciendo el desarrollo cognitivo y emocional de los niños y las niñas. Estos propósitos se encuentran alineados con lo establecido en la Ley General de Educación y los lineamientos del Ministerio de Educación Nacional.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Interacción" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Interacción
            p La interacción con los pares cobra gran relevancia en esta etapa, puesto que los niños aprenden a convivir, a trabajar en equipo y a resolver conflictos, aspectos fundamentales para su desarrollo social. La construcción de relaciones armoniosas y respetuosas dentro del aula y el entorno educativo, es un objetivo clave en la educación inicial, porque contribuye a su bienestar emocional y social.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-3.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Para comprender cómo se materializan estos principios en la práctica educativa, es fundamental realizar un ejercicio de observación y análisis dentro de las instituciones de educación inicial. A través de la revisión documental y la exploración de las dinámicas institucionales en prejardín y jardín, es posible identificar cómo se desarrollan las experiencias de aprendizaje y de qué manera se articulan con los lineamientos pedagógicos y normativos.
            p(data-aos="fade-left") En este sentido, resulta pertinente reflexionar sobre la organización y ejecución de las experiencias en estos niveles: 
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center ¿Cómo se estructuran las actividades pedagógicas en la institución?
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center ¿En qué medida se evidencian los principios normativos y pedagógicos en la práctica educativa?
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center ¿Cómo influyen estos aspectos en el proceso formativo de los niños y las niñas?
    

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Propósitos de la educación en prejardín
    
    p.mb-4 La educación en prejardín cumple un papel fundamental en la formación integral de los niños, promoviendo el desarrollo de su identidad, autonomía y habilidades comunicativas.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Propósitos de la educación en prejardín
            p.mb-4(data-aos="fade-right") En el PDF <b>Propósitos de la educación en prejardín</b>, se analizan los objetivos esenciales de esta etapa, destacando estrategias para fortalecer la exploración, el pensamiento creativo y la expresión infantil. Además, se estudia cómo la interacción con el entorno y el juego potencian el aprendizaje, garantizando experiencias significativas que respetan los ritmos individuales de cada niño.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Propósitos de la educación en prejardín.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/115266" target="_blank" rel="noopener noreferrer") Gervilla Castillo, E. Soriano Díaz, A. & Casares García, P. (2014). Teoría de la educación: educación infantil: ( ed.). Difusora Larousse - Ediciones Pirámide.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/115594 " target="_blank" rel="noopener noreferrer") Prados Gallardo, M. D. M. Sánchez Jiménez, V. & Sánchez Queija, I. (2016). Manual de psicología de la educación para docente de educación infantil y primaria: (2 ed.). Difusora Larousse - Ediciones Pirámide. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.ucv.edu.pe/index.php/ucv-hacer/article/view/551 " target="_blank" rel="noopener noreferrer") Urbina, M. R. D. C. N., & Aguinaga, M. C. P. (2020). El juego en la identidad y autonomía del niño. UCV Hacer, 9(1), 11-17. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.iadb.org/desarrollo-infantil/es/5-maneras-de-mejorar-el-aprendizaje-de-los-ninos/ " target="_blank" rel="noopener noreferrer") 5 maneras de mejorar el aprendizaje de los niños. (s.f.). Primeros Pasos. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Tq0R_EoiunY " target="_blank" rel="noopener noreferrer") INDEE. (2022, 28 de febrero). El sentido del Proyecto Educativo Institucional como instrumento de construcción de identidad. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PziND_QXeeI " target="_blank" rel="noopener noreferrer") Infancia en Positivo. (2019, 15 de noviembre). Cómo aprenden los niños. Teoría del desarrollo cognitivo de Jean Piaget. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
