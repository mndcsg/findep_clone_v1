import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';
import BusinessInkGoldTable from '../components/BusinessInkGoldTable';

const Comite = () => {
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
    },
    // Two-column layout container
    twoColumnContainer: {
      width: '100%',
      display: 'flex',
      gap: '10px',
      margin: '40px auto',
      boxSizing: 'border-box'
    },
    leftColumn: {
      flex: '1',
      minWidth: '0'
    },
    rightColumn: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    sideImage: {
      width: '100%',
      maxWidth: '600px',
      borderRadius: '2px',
      boxShadow: '0 4px 12px rgba(26, 35, 50, 0.1)'
    }
  };

  // 公司简介数据
  const companyIntroContent = [
    [{ text: 'El ', highlight: false }, { text: 'Comité de Gobierno Corporativo', highlight: true }, { text: ' es un órgano consultivo fundamental del Consejo.', highlight: false }],
    [{ text: 'Se encarga de evaluar y proponer las ', highlight: false }, { text: 'políticas de gobierno corporativo', highlight: true }, { text: ' de la entidad.', highlight: false }],
    [{ text: 'Asesora sobre la ', highlight: false }, { text: 'integración, composición y renovación', highlight: true }, { text: ' del Consejo de Administración.', highlight: false }],
    [{ text: 'Garantiza el ', highlight: false }, { text: 'cumplimiento normativo y la transparencia', highlight: true }, { text: ' en la gestión corporativa.', highlight: false }]
  ];
  
  const auditCommitteeHeaders = [
    { key: 'name', label: 'Comités de Auditoría y Prácticas Societarias'},
    { key: 'role', label: 'Rol' }
  ];

  const auditCommitteeData = [
    { name: 'Carlos Javier de la Paz Mena', role: 'Consejero Propietario (independiente)' },
    { name: 'José Ramón Elizondo Anaya', role: 'Consejero Propietario (independiente)' },
    { name: 'Héctor Ángel Rodríguez Acosta', role: 'Consejero Propietario (independiente)' },
    { name: 'Juan García Madrigal', role: 'Coordinador' }
  ];

  return (
    <div style={styles.main}>
      {/* Header - Full Width */}
      <BusinessInkGoldHeader />
      
      {/* Main Content */}
      <main style={styles.content}>
        {/* Banner - Full Width */}
        <BusinessInkGoldBanner 
          image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070"
          title="Comités del Consejo"
          description="Estructura especializada para una gestión sólida y transparente"
        />
        
        {/* Centered Content Wrapper */}
        <div style={styles.centeredContainer}>
          <BusinessInkGoldWideCard 
            title=""
            content={companyIntroContent}
          />

          {/* Two-Column Layout: Table + Image */}
          <div style={styles.twoColumnContainer}>
            {/* Left Column - Table */}
            <div style={styles.leftColumn}>
              <BusinessInkGoldTable 
                tableHeaders={auditCommitteeHeaders}
                tableData={auditCommitteeData}
              />
            </div>
            
            {/* Right Column - Image */}
            <div style={styles.rightColumn}>
              <img 
                src="https://placehold.co/500x400/1A2332/D4B16A/png?text=Comité"
                alt="Comité de Auditoría"
                style={styles.sideImage}
              />
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer - Full Width */}
      <BusinessInkGoldFooter />
    </div>
  );
};

export default Comite;