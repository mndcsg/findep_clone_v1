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
              "name": "Kitzia Fernanda Retamoza García",
              "role": "Presidente",
              "desc": "Kitzia Fernanda Retamoza García es una destacada líder con amplia experiencia en el sector financiero y de crédito. Ha ocupado posiciones clave en la dirección estratégica de instituciones crediticias, enfocándose en el crecimiento sostenible, la gestión de riesgos y la innovación en productos financieros. Su liderazgo ha sido fundamental para fortalecer la gobernanza corporativa y expandir el alcance de la organización en el mercado."
            },
            {
              "name": "Eduardo Verde Lizárraga",
              "role": "Secretario",
              "desc": "Eduardo Verde Lizárraga cuenta con una sólida trayectoria en el ámbito legal y administrativo dentro del sector financiero. Como Secretario, es responsable de garantizar el cumplimiento normativo, la correcta documentación de las decisiones corporativas y la coordinación entre el consejo de administración y las distintas áreas operativas. Su experiencia aporta transparencia, rigor y eficiencia a la gestión institucional."
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