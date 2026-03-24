// Social.js
import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';

const Social = () => {
  // 主要内容 - 使用 WideCard 展示文章，重点内容已标注
  const mainContent = [
    [
      { text: 'La ', highlight: false }, 
      { text: 'Responsabilidad Social (RS)', highlight: true }, 
      { text: ' es el eje fundamental de los valores corporativos de Financiera Independencia, orientando todo nuestro trabajo hacia el ', highlight: false },
      { text: 'impacto positivo', highlight: true },
      { text: ' en la vida de nuestros colaboradores, las comunidades donde operamos y la sociedad mexicana en su conjunto. Nuestro compromiso se materializa en acciones concretas, basadas en ', highlight: false },
      { text: 'honestidad, compromiso y respeto', highlight: true },
      { text: ', con el objetivo de construir un México mejor.', highlight: false }
    ],
    [
      { text: 'Para nosotros, ', highlight: false }, 
      { text: 'nuestros colaboradores son el pilar', highlight: true },
      { text: ' de nuestra labor social. Por ello, nos dedicamos a mejorar su calidad de vida mediante ', highlight: false },
      { text: 'campañas de salud', highlight: true },
      { text: ', la creación de un ', highlight: false },
      { text: 'ambiente laboral sano y cordial', highlight: true },
      { text: ', programas de capacitación continua y actividades que involucren a sus familias, fomentando un vínculo basado en el bienestar mutuo.', highlight: false }
    ],
    [
      { text: 'Comprometidos con la ', highlight: false }, 
      { text: 'sostenibilidad y el bienestar comunitario', highlight: true },
      { text: ', aprovechamos nuestra presencia en ', highlight: false },
      { text: 'más de 140 ciudades mexicanas', highlight: true },
      { text: ' para llevar a cabo acciones voluntarias en pro del medio ambiente, beneficiando a las comunidades locales y promoviendo cambios positivos a nivel territorial.', highlight: false }
    ],
    [
      { text: 'Un eje prioritario de nuestra RS es el ', highlight: false }, 
      { text: 'apoyo a la niñez mexicana más vulnerable', highlight: true },
      { text: '. Desde 1998, a través de campañas como ', highlight: false },
      { text: 'Tucán, Dame un futuro y Corazón Imparable', highlight: true },
      { text: ' (desde 2019), hemos beneficiado a ', highlight: false },
      { text: 'más de 60,000 niños y niñas', highlight: true },
      { text: ', gracias a las aportaciones de nuestros colaboradores y Grupo Caprepa Evolution, demostrando nuestro compromiso con la generación de un futuro más justo para la juventud.', highlight: false }
    ],
    [
      { text: 'Este trabajo ha sido ', highlight: false }, 
      { text: 'reconocido consistentemente', highlight: true },
      { text: ': desde 2003, somos una ', highlight: false },
      { text: 'Empresa Socialmente Responsable (ESR)', highlight: true },
      { text: ' por el Centro Mexicano para la Filantropía (CEMEFI), un distintivo que renovamos año con año. Además, hemos recibido ', highlight: false },
      { text: 'múltiples premios', highlight: true },
      { text: ' por nuestras prácticas excepcionales en RS, incluyendo reconocimientos por nuestra vinculación comunitaria, calidad de vida laboral, protección ambiental y compromiso familiar, así como menciones en rankings de responsabilidad social de revista Mundo Ejecutivo.', highlight: false }
    ],
    [
      { text: 'Invitamos a conocer en detalle nuestras acciones de responsabilidad social a través de nuestros ', highlight: false },
      { text: 'Balances Sociales', highlight: true },
      { text: ', disponibles en esta página, donde se reflejan todo nuestro compromiso con la sociedad y el ', highlight: false },
      { text: 'desarrollo sostenible de México', highlight: true },
      { text: '.', highlight: false }
    ]
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
    // 居中内容容器
    centeredContainer: {
      maxWidth: '1400px',
      width:'100%',
      margin: '0 auto',
      padding: '40px 0px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
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
          image="1920x300_4.png"
          title="Responsabilidad Social"
          description="Compromiso con México y su Comunidad"
        />
        
        {/* 居中内容容器 */}
        <div style={styles.centeredContainer}>
          
          {/* 文章内容 - 只使用 WideCard */}
          <div style={styles.sectionWrapper}>
            <BusinessInkGoldWideCard 
              title="Responsabilidad Social de Financiera Independencia"
              content={mainContent}
            />
          </div>

        </div>
      </main>
      
      {/* Footer - Full Width */}
      <BusinessInkGoldFooter />
    </div>
  );
};

export default Social;