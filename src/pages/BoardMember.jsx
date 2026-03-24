import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';
import BusinessInkGoldExpandSection from '../components/BusinessInkGoldExpandSection';
const BoardMember = () => {
  const styles = {
    main: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif",
      overflowX: 'hidden' 
    },
    content: {
      flex: 1,
      width: '100%'
    },
    centeredContainer: {
      maxWidth: '1400px',
      width:'100%',
        margin: '0 auto',
        padding: '0 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
  };

  // 
  const companyIntroContent = [[{ text: 'Nuestro ', highlight: false },{ text: 'Consejo de Administración', highlight: false },{ text: ' cuenta actualmente con ', highlight: false },{ text: '13 miembros', highlight: true },{ text: ' en su composición.', highlight: false }],[{ text: 'Sus miembros son designados por un periodo de ', highlight: false },{ text: '1 año', highlight: true },{ text: ' mediante acuerdo en la Asamblea General Ordinaria de Accionistas.', highlight: false }],[{ text: 'El Consejo celebra reuniones ', highlight: false },{ text: 'al menos 4 veces al año', highlight: true },{ text: ' de forma regular.', highlight: false }],[{ text: 'En cumplimiento de la Ley del Mercado de Valores, ', highlight: false },{ text: 'al menos el 25% de sus miembros son Independientes', highlight: true },{ text: '.', highlight: false }]];

  return (
    <div style={styles.main}>
      {/* Header - Full Width */}
      <BusinessInkGoldHeader />
      
      {/* Main Content */}
      <main style={styles.content}>
        {/* Banner - Full Width */}
        <BusinessInkGoldBanner 
  image="./1920x300_2.png"
  title="Consejo de Administración"
  description="Gobierno corporativo con transparencia y compromiso"
/>
        {/* Centered Content Wrapper */}
        <div style={styles.centeredContainer}>
          <BusinessInkGoldWideCard 
            title=""
            content={companyIntroContent}
          />

         < BusinessInkGoldExpandSection
          teamData={
            [
                {"name": "Eduardo Messmacher Henríquez","role": "Director General de Financiera Independencia, Apoyo Económico Familiar","desc": "Eduardo Messmacher es un reconocido ejecutivo con más de 21 años de experiencia en el sector financiero en México, Argentina y Brasil, en importantes instituciones como HSBC y McKinsey and Co. Tiene una Ingeniería en Mecánica Eléctrica por el Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM-CEM) y una Maestría en Ciencias en Investigación de Operaciones por el Massachusetts Institute of Technology (MIT)."},
                {"name": "José María Cid Michavila","role": "Director Corporativo de Finanzas | Director General de Apoyo Financiero Inc.","desc": "José María tiene más de 33 años de experiencia. Durante los últimos 3 años ha liderado todas las estrategias y planes de negocios de AFI, revisándolos con el Consejo de Administración para establecer metas, planes y políticas. El Sr. Cid, junto con el equipo de directores, impulsan a la empresa hacia sus principales metas y objetivos."},
                {"name": "Rogelio Flores Estrada","role": "Director Corporativo de Servicios Estratégicos","desc": "Rogelio Flores Estrada cuenta con una experiencia de más de 27 años de experiencia en el sector de microfinanzas, (los últimos 11 años los ha pasado en Financiera Independencia); siendo responsable de la Expansión e Infraestructura de las empresas teniendo a su cargo más de 330 sucursales. Cuenta con una licenciatura en Finanzas y Postgrado en Administración Financiera por la Universidad Tecnológica de México."},
                {"name": "Adrián Orocio Barreto","role": "Director Corporativo de Contraloría","desc": "El Sr. Orocio cuenta con 21 años de experiencia en la Compañía, en las áreas de contraloría y finanzas. Es Licenciado en Contaduría y cuenta con una Maestría en Economía y Negocios en la Anáhuac México Norte."},
                {"name": "María Teresa Garza Guerra","role": "Director Corporativo de Recursos Humanos","desc": "Tere Garza cuenta con más de 20 años de experiencia profesional. Durante su carrera ha desempeñado distintos cargos en empresas como Gamesa/Pepsico y Grupo Salinas, donde fungió como Directora de Recursos Humanos durante los últimos años. Cuenta con una Licenciatura en Sistemas Computacionales Administrativos por el Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM), así como con una Maestría en Administración de Empresas con especialidad en Finanzas por la Universidad de Monterrey (UDEM)."},
                {"name": "Carlos Enríquez Ramírez Macías","role": "Dirección Corporativa de Negocio Individual sin garantía","desc": "Carlos Ramírez tiene una experiencia profesional de más de 25 años en el sector financiero, tanto en empresas nacionales como internacionales tales como HSBC y Banco Azteca, en las cuales, se ha distinguido por su enfoque en la rentabilidad de la organización, al incrementar las ventas y cobranza optimizando las operaciones; así mismo, desarrollando equipos de alto desempeño con una fuerte orientación a resultados. Actualmente Carlos es responsable de las Direcciones de la red de Sucursales de Financiera Independencia y Apoyo Económico Familiar, y del área de Cobranza y las de soporte a la operación. Su principal compromiso es la calidad de la originación de créditos, el volumen y la cobranza con enfoque en la rentabilidad del negocio. Carlos es Licenciado en Administración de Empresas por el Instituto Tecnológico de Estudios Superiores de Monterrey (ITESM), cuenta con una Maestría en Administración de Negocios por el Instituto Panamericano de Alta Dirección de Empresas (IPADE), así como Diplomados en Negocios Internacionales y en Valores Socio-Culturales en Madrid, España."},
                {"name": "Francisco Vázquez Vázquez","role": "Director Corporativo Jurídico","desc": "Francisco Vázquez cuenta con una experiencia de 16 años en el sector financiero y de cumplimiento. Tiene una Licenciatura en Derecho por la Universidad Iberoamericana, una Maestría en Derecho Corporativo por la Universidad Anáhuac y cuenta con una Certificación en materia de Prevención de Operaciones con Recursos de Procedencia Ilícita y Financiamiento al Terrorismo emitida por la Comisión Nacional Bancaria y de Valores."},
            ]

          } />
        </div>
      </main>
      
      {/* Footer - Full Width */}
      <BusinessInkGoldFooter 
     />
    </div>
  );
};

export default BoardMember;