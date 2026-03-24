// Plot.js
import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';
import BusinessInkGoldStockChart from '../components/BusinessInkGoldPlotSection';
import BusinessInkGoldToggleSection from '../components/BusinessInkGoldToggleSection';

const Plot = () => {
  const Content = [
    [{text: 'La ', highlight: false}, { text: 'Gráfica Histórica', highlight: true }, { text: ' refleja la trayectoria y evolución del valor de la acción a lo largo del tiempo.', highlight: false }],
    [{ text: 'Permite analizar ', highlight: false }, { text: 'tendencias, volatilidad y rendimiento histórico', highlight: true }, { text: ' de forma visual y detallada.', highlight: false }],
    [{ text: 'Proporciona ', highlight: false }, { text: 'datos fundamentales y contextuales', highlight: true }, { text: ' para la toma de decisiones de inversión.', highlight: false }],
    [{ text: 'Ofrece una visión integral de la ', highlight: false }, { text: 'performance y solidez financiera', highlight: true }, { text: ' del activo en el mercado.', highlight: false }]
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '1400px',
      width:'100%',
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
          image="./1920x300_3.png"
          title="Gráfica Histórica"
          description="Evolución y datos clave de la acción en tiempo real"
        />
        
        {/* 左右布局容器 */}
        <div style={styles.layoutContainer}>
          
          {/* 左侧 ToggleSection */}
          <aside style={styles.sidebarWrapper}>
            <BusinessInkGoldToggleSection />
          </aside>
          
          {/* 右侧主要内容 */}
          <div style={styles.centeredContainer}>
            <BusinessInkGoldWideCard 
              title="Análisis Histórico del Valor Accionario"
              content={Content}
            />
            <BusinessInkGoldStockChart />
          </div>
        </div>
      </main>
      
      {/* Footer - Full Width */}
      <BusinessInkGoldFooter />
    </div>
  );
};

export default Plot;