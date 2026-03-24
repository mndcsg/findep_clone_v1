import React from 'react';

const BusinessInkGoldBanner = ({ 
  image = 'https://placehold.co/1920x400/1A2332/FFFFFF/png?text=Corporate+Banner',
  title = 'Consejo de Administración',
  description = 'Gobierno Corporativo',
  overlayColor = 'rgba(26, 35, 50, 0.85)',
  height = '400px'
}) => {
  const colors = {
    primary: '#1A2332',
    gold: '#D4B16A',
    textLight: '#FFFFFF'
  };

  const styles = {
    section: {
      width: '100%',
      position: 'relative',
      height: height,
      backgroundColor: colors.primary,
      fontFamily: "'Inter', sans-serif",
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    },
    bgImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '400px',
      backgroundImage: `url("${image}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: overlayColor,
      zIndex: 2,
    },
    container: {
      position: 'relative',
      zIndex: 3,
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',

      boxSizing: 'border-box',
    },
    content: {
   
      borderLeft: `2px solid ${colors.gold}`,
      paddingLeft: '24px',
    },
    h1: {
      fontSize: '42px',
      fontWeight: '700',
      color: colors.textLight,
      margin: '0 0 12px 0',
      lineHeight: '1.2',
    },
    p: {
      fontSize: '16px',
      color: colors.gold,
      margin: 0,
      fontWeight: '500',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.bgImage} />
      <div style={styles.overlay} />
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.h1}>{title}</h1>
          <p style={styles.p}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessInkGoldBanner;