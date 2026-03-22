import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';
import BusinessInkGoldExpandSection from '../components/BusinessInkGoldExpandSection';
const ManageTeam = () => {
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
  const companyIntroContent = [[{ text: 'A continuación se presentan las ', highlight: false },{ text: 'biografías', highlight: false },{ text: ' de nuestros principales funcionarios.', highlight: false }],[{ text: 'Sus ', highlight: false },{ text: 'cargos son de período indefinido', highlight: true },{ text: ', conforme a la estructura organizacional.', highlight: false }],[{ text: 'En promedio, cuentan con ', highlight: false },{ text: '16 años de experiencia', highlight: true },{ text: ' en el sector de servicios financieros en México.', highlight: false }]];
  return (
    <div style={styles.main}>
      {/* Header - Full Width */}
      <BusinessInkGoldHeader />
      
      {/* Main Content */}
      <main style={styles.content}>
        {/* Banner - Full Width */}
        <BusinessInkGoldBanner 
  image="./1920x300_2.png"
  title="Equipo Directivo"
  description="Liderazgo con experiencia y solidez financiera"
/>   
        {/* Centered Content Wrapper */}
        <div style={styles.centeredContainer}>
          <BusinessInkGoldWideCard 
            title=""
            content={companyIntroContent}
          />

         < BusinessInkGoldExpandSection
          teamData={[
            {
              name: "Eduardo Messmacher Henríquez",
              role: "Director General",
              desc: "Eduardo Messmacher es un reconocido ejecutivo con más de 21 años de experiencia en el sector financiero en México, Argentina y Brasil, en importantes instituciones como HSBC y McKinsey and Co. Tiene una Ingeniería en Mecánica Eléctrica por el ITESM y una Maestría en Ciencias en Investigación de Operaciones por el MIT."
            },
            {
              name: "José María Cid Michavila",
              role: "Director Corporativo de Finanzas",
              desc: "José María tiene más de 33 años de experiencia. Durante los últimos 3 años ha liderado todas las estrategias y planes de negocios de AFI, revisándolos con el Consejo de Administración para establecer metas, planes y políticas."
            },
            {
              name: "Rogelio Flores Estrada",
              role: "Director de Servicios Estratégicos",
              desc: "Rogelio Flores Estrada cuenta con una experiencia de más de 27 años en el sector de microfinanzas. Siendo responsable de la Expansión e Infraestructura de las empresas teniendo a su cargo más de 330 sucursales."
            },
            {
              name: "María Teresa Garza Guerra",
              role: "Directora de Recursos Humanos",
              desc: "Tere Garza cuenta con más de 20 años de experiencia profesional. Ha desempeñado distintos cargos en empresas como Gamesa/Pepsico y Grupo Salinas. Cuenta con una Licenciatura en Sistemas Computacionales Administrativos por el ITESM y Maestría en Administración de Empresas por la UDEM."
            },
            {
              name: "Juan Román Escamilla",
              role: "Director Corporativo Fintech",
              desc: "Juan Román Escamilla tiene más de 20 años de experiencia en el diseño y desarrollo de sistemas. Su más reciente responsabilidad fue la Dirección Técnica en IUSA. Es Ingeniero en Sistemas por el ITESM y cuenta con más de 50 certificaciones en Ciencia de Datos, Fintech e IA."
            },
            {
              name: "Carlos Enríquez Ramírez",
              role: "Dir. Negocio Individual",
              desc: "Carlos Ramírez tiene una experiencia profesional de más de 25 años en el sector financiero, tanto en empresas nacionales como internacionales tales como HSBC y Banco Azteca."
            },
            {
              name: "Francisco Vázquez Vázquez",
              role: "Director Corporativo Jurídico",
              desc: "Francisco Vázquez cuenta con una experiencia de 16 años en el sector financiero y de cumplimiento. Tiene una Licenciatura en Derecho por la Universidad Iberoamericana."
            },
            {
              name: "Juan García Madrigal",
              role: "Director Corporativo de Auditoría",
              desc: "Juan García cuenta con más de 28 años de experiencia en el sector microfinanzas, de los cuales los últimos 12 los ha pasado en Financiera Independencia."
            }
          ]} />
        </div>
      </main>
      
      {/* Footer - Full Width */}
      <BusinessInkGoldFooter 
     />
    </div>
  );
};

export default ManageTeam;