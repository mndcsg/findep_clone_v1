import React from 'react';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';

import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';
import BusinessInkGoldTextCard from '../components/BusinessInkGoldTextCard';
import BusinessInkGoldInfoBlock from '../components/BusinessInkGoldInfoBlock';

const Intro = () => {
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

  // 公司简介数据 - Spanish
  const companyIntroContent = [
    [
      { text: 'Nuestra institución, ', highlight: false },
      { text: 'app_name', highlight: true },
      { text: ', es ', highlight: false },
      { text: 'pionera en la industria de préstamos digitales', highlight: true },
      { text: ', consolidándose como líder en el ecosistema Fintech.', highlight: false }
    ],
    [
      { text: 'Estamos ', highlight: false },
      { text: 'profundamente arraigados en el ecosistema de tecnología financiera', highlight: true },
      { text: ', ofreciendo soluciones innovadoras que transforman la vida de nuestros clientes.', highlight: false }
    ],
    [
      { text: 'Nuestro negocio principal son los ', highlight: false },
      { text: 'servicios innovadores de préstamos digitales', highlight: true },
      { text: ', diseñados para ser accesibles, seguros y adaptados a las necesidades de cada usuario.', highlight: false }
    ]
  ];

  // 公司价值观数据 - Spanish
  const companyValues = [
    { 
      title: 'Servicio al Cliente Primero', 
      desc: 'Ponemos a las personas en el centro de todo lo que hacemos. Acompañamos a nuestros usuarios en la realización de sus objetivos de vida y carrera, escuchando activamente sus necesidades y superando sus expectativas en cada interacción. Nuestro compromiso es construir relaciones duraderas basadas en la confianza y el respeto mutuo.' 
    },
    { 
      title: 'Tecnología Innovadora', 
      desc: 'Impulsamos la transformación digital del sector financiero mediante soluciones tecnológicas de vanguardia. Implementamos sistemas avanzados de encriptación y autenticación para garantizar la máxima seguridad de los fondos y la información de nuestros usuarios. Nuestra plataforma inteligente aprende y se adapta para ofrecer una experiencia cada vez más personalizada y eficiente.' 
    },
    { 
      title: 'Eficiencia y Conveniencia', 
      desc: 'Transformamos procesos complejos en experiencias simples y ágiles. Optimizamos continuamente nuestros flujos operativos para que los usuarios puedan acceder a nuestros servicios en cualquier momento y lugar, con solo unos clics. Nos esforzamos por hacer que cada interacción sea rápida, intuitiva y sin fricciones, ahorrando tiempo valioso a nuestros clientes.' 
    },
    { 
      title: 'Cumplimiento Normativo', 
      desc: 'La transparencia y la legalidad son pilares fundamentales de nuestra operación. Operamos bajo estricto cumplimiento de los requisitos regulatorios en todos los mercados donde tenemos presencia, supervisados por las autoridades financieras correspondientes. Mantenemos los más altos estándares éticos y de gobierno corporativo, asegurando que todas nuestras actividades sean legales, transparentes y socialmente responsables.' 
    }
  ];
  // 公司竞争力特点 - Spanish

  // 使命与愿景数据 - Spanish
  const missionVision = [
    { 
      title: 'Liderazgo Regional', 
      desc: 'Ser la institución financiera líder en la región fronteriza de México y Estados Unidos, reconocida por nuestra excelencia y confiabilidad.' 
    },
    { 
      title: 'Referente en Inclusión Financiera', 
      desc: 'Establecer el estándar de oro en servicios financieros inclusivos, brindando acceso a comunidades tradicionalmente desatendidas.' 
    },
    { 
      title: 'Modelo de Finanzas Digitales', 
      desc: 'Ser el ejemplo paradigmático de servicios financieros digitales, impulsando la innovación y transformación del sector financiero.' 
    }
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
          title="Conócenos"
          description="Sobre Nuestra Empresa"
        /> 
        
        {/* Centered Content Wrapper */}
        <div style={styles.centeredContainer}>
          {/* WideCard - 公司简介 */}
          <BusinessInkGoldWideCard 
            title="Perfil Corporativo"
            content={companyIntroContent}
          />
          
          {/* TextCard - 公司价值观 */}
          <BusinessInkGoldTextCard 
            title="Nuestros Valores Corporativos"
            values={companyValues}
          />
          
          {/* InfoBlock - 公司竞争力特点 */}
          {/* Competitive Advantages - 3 Separate InfoBlocks */}
<BusinessInkGoldInfoBlock 
  title="Proceso Optimizado"
  description="Proceso completamente en línea con procedimientos estandarizados y productos cumpliendo todas las normativas vigentes. Optimización continua de la experiencia del usuario."
  imagePosition="left"
  imageUrl="./1920x800_2.png"
/>

<BusinessInkGoldInfoBlock 
  title="Seguridad Inteligente"
  description="Sistema inteligente de control de riesgos con IA y tecnología anti-fraude avanzada. Políticas estrictas de seguridad de información."
  imagePosition="right"
  imageUrl="./1920x800_3.png"
/>

<BusinessInkGoldInfoBlock 
  title="Servicio Eficiente"
  description="Servicio al cliente rápido y eficiente disponible en múltiples canales. Equipo profesional con soporte 24/7."
  imagePosition="left"
  imageUrl="./1920x800_1.png"
/>
          
          {/* TextCard - 使命与愿景 */}
          <BusinessInkGoldTextCard 
            title="Misión y Visión"
            values={missionVision}
          />
        </div>
      </main>
      
      {/* Footer - Full Width */}
      <BusinessInkGoldFooter />
    </div>
  );
};

export default Intro;