// BusinessInkGoldTitle.js
import React from 'react';

const BusinessInkGoldTitle = ({ title = '32 años de trayectoria en micro finanzas' }) => {
  const styles = {
    wrapper: {
      width: '100%',

      fontFamily: "'Inter', sans-serif",
      boxSizing: 'border-box',
    },
    title: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#1A2332',
  
      letterSpacing: '-0.5px',
      textAlign: 'left',
 
      margin: '0 auto',
      borderLeft: '4px solid #D4B16A',
      paddingLeft: '20px',
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>{title}</h2>
    </div>
  );
};

export default BusinessInkGoldTitle;