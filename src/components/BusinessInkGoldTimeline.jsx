// BusinessInkGoldTimeline.js
import React, { useRef, useEffect, useState } from 'react';

const BusinessInkGoldTimeline = () => {
  const data = [
    { year: '2025', text: 'Impulso definitivo de la inteligencia artificial en riesgo y atención al cliente, logrando mayor rapidez y seguridad.' },
    { year: '2024', text: 'Mejores resultados de rentabilidad y solidez en la década, respaldados por la transformación digital integral del grupo.' },
    { year: '2023', text: '31 años de trayectoria. Reestructuración financiera exitosa y fortalecimiento del modelo de crédito responsable.' },
    { year: '2022', text: 'Expansión a nuevos mercados locales y lanzamiento de créditos 100% digitales sin trámites presenciales.' },
    { year: '2021', text: 'Implementación de sistema antifraude avanzado y optimización de aprobación automática para usuarios.' },
    { year: '2020', text: 'Estrategia sólida ante la pandemia. Consolidación del negocio core y refuerzo de la seguridad operativa.' },
    { year: '2019', text: 'Centralización operativa para elevar la eficiencia, calidad del servicio y protección de datos.' },
    { year: '2018', text: '25 años de servicio. Lanzamiento del modelo empresarial unificado y productos personalizados.' },
    { year: '2017', text: 'Migración tecnológica a la nube y refinanciación estratégica para fortalecer la estructura financiera.' },
    { year: '2016', text: 'Logro de cartera de mayor calidad y reducción histórica de mora, con enfoque en rentabilidad sostenible.' },
    { year: '2015', text: 'Reestructuración eficiente para enfocarse en el negocio principal y optimizar costos operativos.' },
    { year: '2014', text: 'Innovación en fuentes de financiamiento y expansión de servicios para mayor inclusión financiera.' },
    { year: '2013', text: '20 años de historia. Consolidación de operaciones y fortalecimiento de la presencia en el mercado.' },
    { year: '2012', text: 'Cambio estratégico clave: priorizar la calidad y solidez sobre el tamaño, con políticas de riesgo estrictas.' }
  ];

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);  // 重命名：scrollLeft -> scrollPosition
  const [velocity, setVelocity] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const requestRef = useRef();
  const lastTimeRef = useRef();

  // --- 拖拽逻辑 ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollPosition(scrollContainerRef.current.scrollLeft);
    setVelocity(0);
    lastTimeRef.current = performance.now();
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollPosition(scrollContainerRef.current.scrollLeft);
    setVelocity(0);
    lastTimeRef.current = performance.now();
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    lastTimeRef.current = performance.now();
    requestRef.current = requestAnimationFrame(animateScroll);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    lastTimeRef.current = performance.now();
    requestRef.current = requestAnimationFrame(animateScroll);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) setVelocity(walk / dt);
    scrollContainerRef.current.scrollLeft = scrollPosition - walk;
    lastTimeRef.current = now;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) setVelocity(walk / dt);
    scrollContainerRef.current.scrollLeft = scrollPosition - walk;
    lastTimeRef.current = now;
  };

  const animateScroll = () => {
    if (Math.abs(velocity) < 0.1) {
      setVelocity(0);
      return;
    }
    const newScrollLeft = scrollContainerRef.current.scrollLeft - velocity * 15;
    const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
    
    if (newScrollLeft >= 0 && newScrollLeft <= maxScroll) {
      scrollContainerRef.current.scrollLeft = newScrollLeft;
      setVelocity(velocity * 0.95);
      requestRef.current = requestAnimationFrame(animateScroll);
    } else {
      setVelocity(0);
    }
  };

  // 检查滚动状态
  const checkScrollStatus = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // 滚动控制函数 - 重命名避免冲突
  const handleScrollLeft = () => {  // 重命名：scrollLeft -> handleScrollLeft
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
      setTimeout(checkScrollStatus, 500);
    }
  };

  const handleScrollRight = () => {  // 重命名：scrollRight -> handleScrollRight
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
      setTimeout(checkScrollStatus, 500);
    }
  };

  useEffect(() => {
    checkScrollStatus();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollStatus);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (container) {
        container.removeEventListener('scroll', checkScrollStatus);
      }
    };
  }, []);

  // --- 样式定义 ---
  const styles = {
    section: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: '60px 0',
      fontFamily: "'Inter', sans-serif",
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    },
    header: {
      maxWidth: '1400px',
      margin: '0 auto 30px',
      padding: '0 40px',
      boxSizing: 'border-box',
      textAlign: 'center',
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#1A2332',
      margin: '0 0 8px 0',
      letterSpacing: '-0.5px',
    },
    subtitle: {
      fontSize: '15px',
      color: '#5A697F',
      margin: 0,
    },
    // 时间线容器
    timelineWrapper: {
      position: 'relative',
      padding: '40px 40px 60px',
      overflow: 'hidden',
    },
    // 滚动轨道
    trackContainer: {
      width: '100%',
      overflowX: 'auto',
      overflowY: 'visible',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      cursor: isDragging ? 'grabbing' : 'grab',
      padding: '20px 0 40px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    hideScrollbar: `
      .timeline-track-container::-webkit-scrollbar {
        display: none;
      }
    `,
    // 时间线主轴
    timelineAxis: {
      position: 'absolute',
      top: '50%',
      left: '0',
      right: '0',
      height: '3px',
      backgroundColor: '#E8E8E8',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
    timelineAxisProgress: {
      position: 'absolute',
      top: '50%',
      left: '40px',
      height: '3px',
      backgroundColor: '#D4B16A',
      transform: 'translateY(-50%)',
      zIndex: 2,
      transition: 'width 0.3s ease',
    },
    // 时间线轨道
    track: {
      display: 'flex',
      gap: '40px',
      paddingLeft: '40px',
      paddingRight: '40px',
      position: 'relative',
      zIndex: 3,
      minHeight: '280px',
    },
    // 时间节点项
    timelineItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      flexShrink: 0,
      width: '280px',
    },
    // 节点标记
    nodeMarker: {
      width: '16px',
      height: '16px',
      backgroundColor: '#FFFFFF',
      border: '3px solid #D4B16A',
      borderRadius: '50%',
      zIndex: 4,
      position: 'relative',
      boxShadow: '0 0 0 4px rgba(212, 177, 106, 0.15)',
      transition: 'all 0.3s ease',
    },
    nodeMarkerActive: {
      transform: 'scale(1.2)',
      boxShadow: '0 0 0 6px rgba(212, 177, 106, 0.25)',
    },
    // 连接线
    connectorLine: {
      width: '2px',
      height: '24px',
      backgroundColor: '#E0E0E0',
      margin: '8px 0',
    },
    // 内容卡片
    card: {
      width: '100%',
      backgroundColor: '#F7F8FA',
      border: '1px solid #E0E0E0',
      borderRadius: '4px',
      padding: '20px 24px',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    cardHover: {
      transform: 'translateY(-3px)',
      borderColor: '#D4B16A',
      boxShadow: '0 8px 25px rgba(26, 35, 50, 0.1)',
    },
    // 卡片小三角指示器
    cardArrow: {
      position: 'absolute',
      top: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '0',
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderBottom: '8px solid #E0E0E0',
    },
    cardArrowInner: {
      position: 'absolute',
      top: '1px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '0',
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      borderBottom: '7px solid #F7F8FA',
    },
    yearLabel: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1A2332',
      marginBottom: '8px',
      letterSpacing: '-0.5px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    yearDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#D4B16A',
      borderRadius: '50%',
      flexShrink: 0,
    },
    text: {
      fontSize: '14px',
      lineHeight: '1.6',
      color: '#4A5568',
      margin: 0,
      textAlign: 'center',
      fontWeight: '400',
    },
    // 时间流向指示
    flowIndicator: {
      position: 'absolute',
      right: '50px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '12px',
      color: '#999999',
      pointerEvents: 'none',
      opacity: isDragging ? 0 : 1,
      transition: 'opacity 0.3s',
      zIndex: 5,
    },
    flowArrow: {
      display: 'inline-flex',
      animation: 'pulse 2s infinite',
    },
    // 起始/结束标记
    endpointMarker: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '12px',
      height: '12px',
      backgroundColor: '#D4B16A',
      borderRadius: '50%',
      zIndex: 3,
      boxShadow: '0 0 0 3px rgba(212, 177, 106, 0.3)',
    },
    startMarker: { left: '34px' },
    endMarker: { right: '34px' },
    // 年份标签在轴线上
    axisYearLabel: {
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '11px',
      fontWeight: '600',
      color: '#888888',
      backgroundColor: '#FFFFFF',
      padding: '2px 8px',
      borderRadius: '10px',
      border: '1px solid #E8E8E8',
      whiteSpace: 'nowrap',
      zIndex: 3,
    },
    // 导航按钮容器
    navigationContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      marginTop: '40px',
    },
    // 导航按钮
    navButton: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: '#FFFFFF',
      border: '2px solid #E0E0E0',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px rgba(26, 35, 50, 0.08)',
    },
    navButtonEnabled: {
      borderColor: '#D4B16A',
      backgroundColor: '#1A2332',
    },
    navButtonDisabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      borderColor: '#E0E0E0',
    },
    navIcon: {
      width: '20px',
      height: '20px',
      fill: '#D4B16A',
    },
    navIconEnabled: {
      fill: '#FFFFFF',
    },
  };

  // 关键帧动画
  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 0.6; transform: translateX(0); }
      50% { opacity: 1; transform: translateX(3px); }
    }
  `;

  return (
    <section style={styles.section}>
      <style>{styles.hideScrollbar + keyframes}</style>
      
      <div style={styles.timelineWrapper}>
        {/* 时间线主轴 */}
        <div style={styles.timelineAxis}></div>
        
        {/* 起点和终点标记 */}
        <div style={{...styles.endpointMarker, ...styles.startMarker}} title="2012"></div>
        <div style={{...styles.endpointMarker, ...styles.endMarker}} title="2025"></div>

        <div 
          ref={scrollContainerRef}
          className="timeline-track-container"
          style={styles.trackContainer}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div style={styles.track}>
            {data.map((item, index) => {
             
              return (
                <div key={index} style={styles.timelineItem}>
                  {/* 节点标记 */}
                  <div 
                    style={{
                      ...styles.nodeMarker,
                      ...(isDragging ? {} : styles.nodeMarkerActive)
                    }}
                  />
                  
                  {/* 连接线 */}
                  <div style={styles.connectorLine}></div>
                  
                  {/* 内容卡片 */}
                  <div 
                    style={styles.card}
                    onMouseEnter={(e) => {
                      if(!isDragging) {
                        Object.assign(e.currentTarget.style, {
                          transform: 'translateY(-3px)',
                          borderColor: '#D4B16A',
                          boxShadow: '0 8px 25px rgba(26, 35, 50, 0.1)'
                        });
                      }
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.currentTarget.style, {
                        transform: 'translateY(0)',
                        borderColor: '#E0E0E0',
                        boxShadow: 'none'
                      });
                    }}
                  >
                    {/* 卡片小三角 */}
                    <div style={styles.cardArrow}></div>
                    <div style={styles.cardArrowInner}></div>
                    
                    {/* 年份标签 */}
                    <div style={styles.yearLabel}>
                      <span style={styles.yearDot}></span>
                      {item.year}
                    </div>
                    
                    {/* 内容文本 */}
                    <p style={styles.text}>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 导航按钮 */}
        <div style={styles.navigationContainer}>
          {/* 左箭头按钮 */}
          <button
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            style={{
              ...styles.navButton,
              ...(canScrollLeft ? styles.navButtonEnabled : styles.navButtonDisabled)
            }}
            onMouseOver={(e) => {
              if (canScrollLeft) {
                e.target.style.backgroundColor = '#D4B16A';
                e.target.style.borderColor = '#D4B16A';
              }
            }}
            onMouseOut={(e) => {
              if (canScrollLeft) {
                e.target.style.backgroundColor = '#1A2332';
                e.target.style.borderColor = '#D4B16A';
              }
            }}
          >
            <svg style={{
              ...styles.navIcon,
              ...(canScrollLeft ? styles.navIconEnabled : {})
            }} viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          {/* 右箭头按钮 */}
          <button
            onClick={handleScrollRight}
            disabled={!canScrollRight}
            style={{
              ...styles.navButton,
              ...(canScrollRight ? styles.navButtonEnabled : styles.navButtonDisabled)
            }}
            onMouseOver={(e) => {
              if (canScrollRight) {
                e.target.style.backgroundColor = '#D4B16A';
                e.target.style.borderColor = '#D4B16A';
              }
            }}
            onMouseOut={(e) => {
              if (canScrollRight) {
                e.target.style.backgroundColor = '#1A2332';
                e.target.style.borderColor = '#D4B16A';
              }
            }}
          >
            <svg style={{
              ...styles.navIcon,
              ...(canScrollRight ? styles.navIconEnabled : {})
            }} viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusinessInkGoldTimeline;