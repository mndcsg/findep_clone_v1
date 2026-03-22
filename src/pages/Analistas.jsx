// Analistas.js
import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldTable from '../components/BusinessInkGoldTable';
import BusinessInkGoldTitle from '../components/BusinessInkGoldTitle';
import BusinessInkGoldToggleSection from '../components/BusinessInkGoldToggleSection';

const Analistas = () => {
  // CAPITAL 表格数据
  const capitalHeaders = [
    { key: 'nombre', label: 'Nombre', subLabel: null },
    { key: 'institucion', label: 'Institución', subLabel: null },
    { key: 'correo', label: 'Correo', subLabel: null }
  ];

  const capitalData = [
    { 
      nombre: 'Carlos de Legarreta', 
      institucion: 'GBM', 
      correo: 'cadelegarreta@gbm.com' 
    }
  ];

  // DEUDA 表格数据
  const deudaHeaders = [
    { key: 'nombre', label: 'Nombre', subLabel: null },
    { key: 'institucion', label: 'Institución', subLabel: null },
    { key: 'correo', label: 'Correo', subLabel: null }
  ];

  const deudaData = [
    { 
      nombre: 'Arturo Galindo', 
      institucion: 'BCP Securities LLC.', 
      correo: 'agalindo@bcpsecurities.com' 
    },
    { 
      nombre: 'Nicolas Riva', 
      institucion: 'BofA', 
      correo: 'nicolas.riva@bofa.com' 
    },
    { 
      nombre: 'Natalia Corfield', 
      institucion: 'J.P. Morgan', 
      correo: 'natalia.corfield@jpmorgan.com' 
    },
    { 
      nombre: 'Jonathan Szwarc', 
      institucion: 'DebtWire', 
      correo: 'jonathan.szwarc@acuris.com' 
    },
    { 
      nombre: 'Nick Dimitrov', 
      institucion: 'Morgan Stanley', 
      correo: 'nickolai.dimitrov@morganstanley.com' 
    }
  ];

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
    // 左右布局容器
    layoutContainer: {
      width: '100%',


      padding: '40px 80px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      gap: '40px',
      alignItems: 'flex-start'
    },
    // 左侧 ToggleSection
    sidebarWrapper: {
      flex: '0 0 300px',
      position: 'sticky',
      top: '20px'
    },
    // 右侧主要内容
    centeredContainer: {
      flex: 1,
      maxWidth: '1400px',
      width:'100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: 0
    },
    sectionWrapper: {
      width: '100%',
      marginBottom: '40px'
    }
  };

  return (
    <div style={styles.main}>
      {/* Header - Full Width */}
      <BusinessInkGoldHeader />
      
      {/* Main Content */}
      <main style={styles.content}>
        {/* Banner - Full Width */}
        <BusinessInkGoldBanner 
          image="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974"
          title="Cobertura de Analistas"
          description=""
        />
        
        {/* 左右布局容器 */}
        <div style={styles.layoutContainer}>
          
          {/* 左侧 ToggleSection */}
          <aside style={styles.sidebarWrapper}>
            <BusinessInkGoldToggleSection />
          </aside>
          
          {/* 右侧主要内容 */}
          <div style={styles.centeredContainer}>
            
            {/* CAPITAL 部分 */}
            <div style={styles.sectionWrapper}>
              <BusinessInkGoldTitle title="CAPITAL" />
              <BusinessInkGoldTable 
                tableHeaders={capitalHeaders}
                tableData={capitalData}
              />
            </div>
            
            {/* DEUDA 部分 */}
            <div style={styles.sectionWrapper}>
              <BusinessInkGoldTitle title="DEUDA" />
              <BusinessInkGoldTable 
                tableHeaders={deudaHeaders}
                tableData={deudaData}
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

export default Analistas;