import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldTimeline from '../components/BusinessInkGoldTimeline';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';

const History = () => {
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
  const companyIntroContent = [
    [
      { text: 'Desde 2012, ', highlight: false },
      { text: 'Caprepa Evolution', highlight: true },
      { text: ' ha evolucionado con estrategia clara, ', highlight: false },
      { text: 'priorizando calidad, solidez y transformación digital', highlight: true },
      { text: '.', highlight: false }
    ],
    [
      { text: 'Hemos logrado ', highlight: false },
      { text: 'crecimiento sostenible, innovación tecnológica y expansión responsable', highlight: true },
      { text: ' en todo el país.', highlight: false }
    ],
    [
      { text: 'Hoy somos una institución ', highlight: false },
      { text: 'sólida, confiable y referente en préstamos personales', highlight: true },
      { text: ' con más de una década de trayectoria profesional.', highlight: false }
    ]
  ];
  

  return (
    <div style={styles.main}>
      {/* Header - Full Width */}
      <BusinessInkGoldHeader />
      
      {/* Main Content */}
      <main style={styles.content}>
        {/* Banner - Full Width */}
        <BusinessInkGoldBanner 
  image="./1920x300_1.png"
  title="Nuestra Historia"
  description="Trayectoria y Compromiso Financiero"
/>
        
        {/* Centered Content Wrapper */}
        <div style={styles.centeredContainer}>
          <BusinessInkGoldWideCard 
            title="Perfil Corporativo"
            content={companyIntroContent}
          />
        <BusinessInkGoldTimeline />

        </div>
      </main>
      
      {/* Footer - Full Width */}
      <BusinessInkGoldFooter />
    </div>
  );
};

export default History;