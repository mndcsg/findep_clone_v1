import React from 'react';

const BusinessInkGoldFooter = () => {
  const styles = {
    footer: {
      width: '100%',
      backgroundColor: '#1A2332',
      color: '#F7F8FA',
      padding: '60px 0px 30px',
      fontFamily: "'Inter', sans-serif",
      boxSizing: 'border-box',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      justifyContent: 'space-between',
    },
    column: {
      flex: '1 1 200px',
      minWidth: '200px',
    },
    title: {
      fontSize: '14px',
      fontWeight: '700',
      color: '#D4B16A',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '24px',
      marginTop: '0',
      borderBottom: '1px solid rgba(212, 177, 106, 0.3)',
      paddingBottom: '10px',
      display: 'inline-block',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      marginBottom: '12px',
    },
    link: {
      color: '#F7F8FA',
      textDecoration: 'none',
      fontSize: '14px',
      lineHeight: '1.6',
      opacity: 0.8,
      transition: 'opacity 0.2s',
    },
    addressText: {
      fontSize: '14px',
      lineHeight: '1.6',
      color: '#F7F8FA',
      opacity: 0.7,
      margin: '0 0 12px 0',
    },
    button: {
      display: 'inline-block',
      marginTop: '16px',
      padding: '10px 20px',
      backgroundColor: 'transparent',
      border: '1px solid #D4B16A',
      color: '#D4B16A',
      fontSize: '13px',
      fontWeight: '600',
      borderRadius: '2px',
      cursor: 'pointer',
      textTransform: 'uppercase',
    },
    bottomBar: {
      maxWidth: '1200px',
      margin: '40px auto 0',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      color: '#5A697F',
      flexWrap: 'wrap',
    }
  };
  const footerNavItems = [
    { label: "Conoce la Empresa", url: "#/corporativa/historia" },
    { label: "Estructura Directiva", url: "#/gobierno/equipo-directivo" },
    { label: "Mercado de Capitales", url: "#/accion/grafica-historica" },
    { label: "Compromiso Social", url: "#/responsabilidad-social" }
  ];
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Col 1 */}
       
      <div style={styles.column}>
        <h6 style={styles.title}>Navegación</h6>
        <ul style={styles.list}>
          {footerNavItems.map((item, i) => (
            <li key={i} style={styles.listItem}>
              <a href={item.url} style={styles.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
        {/* Col 3 */}
        <div style={styles.column}>
          <h6 style={styles.title}>Contáctanos</h6>
          <p style={styles.addressText}>Av. Alvaro Obregon 1298 sur , interior 206, Colonia Guadalupe, C.P. 80220, Culiacán, Sinaloa</p>
        </div>
      </div>
      
      <div style={styles.bottomBar}>
        <span>© 2026 Caprepa Evolution, S.A.P.I. de C.V., SOFOM, E.N.R. All Rights Reserved.</span>
     
      </div>
    </footer>
  );
};

export default BusinessInkGoldFooter;