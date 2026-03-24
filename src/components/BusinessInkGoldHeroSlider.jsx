import React, { useState, useEffect } from 'react';

const BusinessInkGoldHeroSlider = () => {
  // 幻灯片数据 - 4 张图片，每张都有标题和描述
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070',
      title: '+25 años construyendo relaciones de confianza',
      description: 'Más de 2.5 millones de clientes satisfaccion respaldan nuestro compromiso con la excelencia en el servicio y la atención personalizada.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      title: 'Soluciones integrales para cada necesidad',
      description: 'Desde banca personal hasta financiamiento corporativo, ofrecemos un portafolio completo de servicios financieros diseñados para impulsar el crecimiento.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      title: 'Innovación que transforma experiencias',
      description: 'Plataformas digitales de vanguardia y procesos automatizados que hacen más ágil, segura y accesible la gestión financiera.'
    }
  ];

  // 设计规范变量
  const colors = {
    primary: '#1A2332',
    gold: '#D4B16A',
    textLight: '#FFFFFF',
    overlay: 'rgba(26, 35, 50, 0.65)'
  };

  // 状态管理
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 切换幻灯片函数
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // 自动播放 - 每 6 秒切换
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const styles = {
    wrapper: {
      width: '100%',
      height: '600px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', sans-serif",
      backgroundColor: colors.primary
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'opacity 0.5s ease, transform 0.5s ease'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: colors.overlay,
      zIndex: 1
    },
    content: {
      position: 'relative',
      zIndex: 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      opacity: isAnimating ? 0.8 : 1,
      transition: 'opacity 0.5s ease'
    },
    subtitle: {
      color: colors.gold,
      fontSize: '16px',
      fontWeight: '600',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '20px',
      opacity: 0.9
    },
    title: {
      color: colors.textLight,
      fontSize: '56px',
      fontWeight: '700',
      lineHeight: '1.2',
      marginBottom: '30px',
      maxWidth: '2400px',
      textShadow: '0 4px 10px rgba(0,0,0,0.3)'
    },
    description: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: '20px',
      fontWeight: '300',
      maxWidth: '700px',
      lineHeight: '1.6',
      marginBottom: '40px'
    },
    button: {
      backgroundColor: colors.gold,
      color: colors.primary,
      padding: '16px 40px',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '2px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(212, 177, 106, 0.9)',
      color: colors.primary,
      border: 'none',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 3,
      fontSize: '20px',
      fontWeight: '700',
      transition: 'background 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    prevButton: {
      left: '30px'
    },
    nextButton: {
      right: '30px'
    },
    indicators: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '12px',
      zIndex: 3
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.4)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    indicatorActive: {
      backgroundColor: colors.gold,
      width: '30px',
      borderRadius: '6px'
    }
  };

  return (
    <section style={styles.wrapper}>
      {/* Background Image */}
      <div 
        style={{
          ...styles.image,
          backgroundImage: `url("${slides[currentSlide].image}")`
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>
          {slides[currentSlide].title}
        </h1>
        
        <p style={styles.description}>
          {slides[currentSlide].description}
        </p>


      </div>

      {/* Navigation Buttons */}
      <button 
        style={{...styles.navButton, ...styles.prevButton}}
        onClick={prevSlide}
        onMouseOver={(e) => e.target.style.backgroundColor = '#fff'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(212, 177, 106, 0.9)'}
      >
        ‹
      </button>
      
      <button 
        style={{...styles.navButton, ...styles.nextButton}}
        onClick={nextSlide}
        onMouseOver={(e) => e.target.style.backgroundColor = '#fff'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(212, 177, 106, 0.9)'}
      >
        ›
      </button>

      {/* Slide Indicators */}
      <div style={styles.indicators}>
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              ...(currentSlide === index ? styles.indicatorActive : {})
            }}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default BusinessInkGoldHeroSlider;