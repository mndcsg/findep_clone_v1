// DiviDendos.js
import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';
import BusinessInkGoldTable from '../components/BusinessInkGoldTable';
import BusinessInkGoldToggleSection from '../components/BusinessInkGoldToggleSection';

const DiviDendos = () => {
  const dividendHeaders = [
    { key: 'approvalDate', label: 'Fecha de aprobación de dividendo' },
    { key: 'paymentDate', label: 'Fecha de pago de dividendo' },
    { key: 'totalAmount', label: 'Monto total del dividendo declarado' }
  ];

  const dividendData = [
    { approvalDate: '29-APR-25', paymentDate: '12-MAY-25', totalAmount: '$1,250,000,000' },
    { approvalDate: '29-APR-08', paymentDate: '14-MAY-08, 6-APR-08, 5-NOV-08, 4-FEB-09', totalAmount: '$510,000,000' },
    { approvalDate: '20-MAR-07', paymentDate: '21-MAR-07', totalAmount: '$178,785,156' },
    { approvalDate: '20-JUN-06', paymentDate: '21-JUN-06', totalAmount: '$836,552,509' },
    { approvalDate: '27-MAR-06', paymentDate: '27-MAR-06', totalAmount: '$73,265,261' }
  ];

  const Content = [
    [{ text: 'Accedemos a la ', highlight: false }, { text: 'Información de la Acción', highlight: true }, { text: ' y su rendimiento en el mercado bursátil.', highlight: false }],
    [{ text: 'Conocer los ', highlight: false }, { text: 'Dividendos Distribuidos', highlight: true }, { text: ' y la política de remuneración al accionista.', highlight: false }],
    [{ text: 'Datos actualizados de ', highlight: false }, { text: 'rentabilidad, historial y pagos', highlight: true }, { text: ' para decisiones de inversión informadas.', highlight: false }],
    [{ text: 'Visión completa de la ', highlight: false }, { text: 'solidez y retorno financiero', highlight: true }, { text: ' de la entidad.', highlight: false }]
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
          image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070"
          title="Información de la Acción y Dividendos"
          description="Datos actualizados de la acción, rentabilidad y pagos de dividendos para inversionistas."
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
              title="Información Financiera de la Acción"
              content={Content}
            />
          
            <BusinessInkGoldTable 
              tableHeaders={dividendHeaders}
              tableData={dividendData}
              tableWidth='100%'
            />
          </div>
        </div>
      </main>
      
      {/* Footer - Full Width */}
      <BusinessInkGoldFooter />
    </div>
  );
};

export default DiviDendos;