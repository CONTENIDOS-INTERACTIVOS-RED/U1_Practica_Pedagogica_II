<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Jardín'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En esta etapa, el reconocimiento del contexto institucional a través de la observación directa y revisión de los documentos institucionales, permitirá identificar cómo las prácticas pedagógicas y los propósitos, se alinean con la normatividad vigente en la educación inicial.
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La educación en el jardín, en el centro de práctica, tiene como objetivo potenciar el desarrollo integral de los niños y las niñas, promoviendo la creatividad y la expresión a través de diversas formas, como el arte, el juego y el lenguaje (Zabalza, 2016).
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El estudiante podrá observar cómo se favorece la confianza de los niños para comunicar sus pensamientos, tanto de manera oral como escrita, mediante enfoques pedagógicos que estimulan el desarrollo del lenguaje en un contexto lúdico y significativo, tal como lo establece la normatividad educativa colombiana.
    
    p.mb-4 Asimismo, se promueve el pensamiento crítico y la resolución de problemas, habilidades fundamentales que permiten a los niños explorar su entorno, plantear preguntas y buscar respuestas de forma autónoma. El estudiante debe identificar cómo este proceso se lleva a cabo, en concordancia con los principios establecidos en la legislación educativa. El trabajo colaborativo también es clave, pues se enseña a los niños la importancia de compartir, respetar y construir nuevas ideas en equipo, tal como lo promueve la Ley General de Educación.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          p.mb-0 A lo largo de este proceso, todo niño crece en un ambiente seguro y estimulante, en el que se favorece el desarrollo de las competencias y habilidades necesarias para su aprendizaje y crecimiento. Es importante que el estudiante observe cómo se garantiza que cada niño tenga la oportunidad de aprender y desarrollarse en un contexto que respeta la normatividad de la educación inicial en Colombia. 
        p(data-aos="fade-left") ¡Comencemos este viaje de aprendizaje juntos, observando cómo se implementan estos principios en el centro de práctica!

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Propósitos de la educación en jardín
    
    p.mb-4 La educación en el nivel de jardín tiene como propósito fortalecer la creatividad, el lenguaje, el pensamiento crítico y la autonomía de los niños a través de experiencias de aprendizaje significativas.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Propósitos de la educación en jardín
            p.mb-4(data-aos="fade-right") En el PDF <b>Propósitos de la educación en jardín</b>, se analizan estrategias pedagógicas que potencian la expresión de ideas, el desarrollo del lenguaje oral y escrito, la resolución de problemas y el trabajo colaborativo. Además, se estudia cómo la implementación de metodologías activas, en consonancia con los lineamientos curriculares y las políticas de primera infancia, contribuye a la formación integral de los niños en esta etapa clave de su desarrollo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Propósitos de la educación en jardín.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')

    

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
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
