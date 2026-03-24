// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import BusinessInkGoldHeroSlider from '../components/BusinessInkGoldHeroSlider';
import BusinessInkGoldShowSection from '../components/BusinessInkGoldShowSection';
import BusinessInkGoldWideCard from '../components/BusinessInkGoldWideCard';
import BusinessInkGoldTitle from '../components/BusinessInkGoldTitle';
const Home = () => {
  // 公司简介内容
  const companyIntroContent = [
    [
      { text: 'Financiera Independencia es ', highlight: false },
      { text: 'pionera en la industria de préstamos digitales', highlight: true },
      { text: ', consolidándose como líder en el ecosistema Fintech en México y Estados Unidos.', highlight: false }
    ],
    [
      { text: 'Con ', highlight: false },
      { text: 'más de 32 años de experiencia', highlight: true },
      { text: ', ofrecemos soluciones financieras innovadoras que transforman la vida de nuestros clientes.', highlight: false }
    ],
    [
      { text: 'Nuestro compromiso es brindar ', highlight: false },
      { text: 'servicios accesibles, seguros y adaptados', highlight: true },
      { text: ' a las necesidades de cada usuario.', highlight: false }
    ]
  ];


  // 快速导航卡片
  const quickLinks = [
    {
      title: 'Conoce la Empresa',
      description: 'Historia, perfil institucional y trayectoria',
      link: '#/corporativa/perfil',
      icon: '🏢'
    },
    {
      title: 'Gobierno Corporativo',
      description: 'Consejo, comités y estructura directiva',
      link: '#/gobierno/equipo-directivo',
      icon: '👥'
    },
    {
      title: 'Mercado de Capitales',
      description: 'Acción, dividendos y análisis de analistas',
      link: '#/accion/grafica-historica',
      icon: '📈'
    },
    {
      title: 'Responsabilidad Social',
      description: 'Compromiso con México y su comunidad',
      link: '#/responsabilidad-social',
      icon: '🤝'
    }
  ];

  const styles = {
    main: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif"
    },
    content: {
      flex: 1,
      width: '100%'
    },
    // 居中内容容器
    centeredContainer: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 80px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    sectionWrapper: {
      width: '100%',
      marginBottom: '60px'
    },
    // 快速导航区域
    quickLinksSection: {
      padding: '60px 80px',
    },
    quickLinksTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: '40px',
      margin: '0 0 40px 0'
    },
    quickLinksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    quickLinkCard: {
      backgroundColor: '#FFFFFF',
      padding: '32px 24px',
      borderRadius: '2px',
      textDecoration: 'none',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid #E0E0E0',
      display: 'block'
    },
    quickLinkIcon: {
      fontSize: '48px',
      marginBottom: '16px',
      display: 'block'
    },
    quickLinkTitle: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#1A2332',
      marginBottom: '12px',
      margin: '0 0 12px 0'
    },
    quickLinkDesc: {
      fontSize: '14px',
      color: '#5A697F',
      lineHeight: '1.6',
      margin: 0
    },
    // CTA 按钮
    ctaButton: {
      display: 'inline-block',
      backgroundColor: '#D4B16A',
      color: '#1A2332',
      padding: '16px 40px',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '2px',
      cursor: 'pointer',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: 'background 0.3s ease',
      marginTop: '24px'
    },
    // 时间线标题
    timelineTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#1A2332',
      textAlign: 'center',
      marginBottom: '40px',
      margin: '0 0 40px 0'
    }
  };

  return (
    <div style={styles.main}>
      {/* Header */}
      <BusinessInkGoldHeader />
      
      {/* Main Content */}
      <main style={styles.content}>
        
        {/* Hero Slider - 轮播图 */}
        <BusinessInkGoldHeroSlider />
        

        
        {/* 公司简介 */}
        <div style={styles.centeredContainer}>
          <div style={styles.sectionWrapper}>
            <BusinessInkGoldWideCard 
              title=""
              content={companyIntroContent}
            />
          </div>
        
                      {/* 关键统计数据 */}
        <BusinessInkGoldTitle title="Finanzas Confiables" />
        <BusinessInkGoldShowSection />  

        <BusinessInkGoldTitle title="Explora Nuestra Información" />
      {/* 快速导航 - 白色背景优化版 */}
      <div style={styles.quickLinksSection}>

          <div style={styles.quickLinksGrid}>
            {quickLinks.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                style={styles.quickLinkCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(26, 35, 50, 0.12)';
                  e.currentTarget.style.borderColor = '#D4B16A';
                  const arrow = e.currentTarget.querySelector('.quick-link-arrow');
                  if (arrow) arrow.style.transform = 'translateX(8px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#F7F8FA';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E0E0E0';
                  const arrow = e.currentTarget.querySelector('.quick-link-arrow');
                  if (arrow) arrow.style.transform = 'translateX(0)';
                }}
              >

                <h3 style={styles.quickLinkTitle}>{item.title}</h3>
                <p style={styles.quickLinkDesc}>{item.description}</p>
                <span className="quick-link-arrow" style={styles.quickLinkArrow}>
                  Conocer más →
                </span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* CTA 区域 */}
        <div style={styles.centeredContainer}>
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1A2332',
              margin: '0 0 16px 0'
            }}>
              ¿Quieres saber más?
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#5A697F',
              margin: '0 0 32px 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Conoce más sobre nuestra historia, gobierno corporativo 
              y compromiso con el desarrollo sostenible de México.
            </p>
            <Link to="/corporativa/perfil" style={styles.ctaButton}>
              Conoce la Empresa
            </Link>
          </div>
        </div>
        </div>


      </main>
      
      {/* Footer */}
      <BusinessInkGoldFooter />
    </div>
  );
};

export default Home;