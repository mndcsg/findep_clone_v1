import React from 'react';

const BusinessInkGoldTextCard = ({ 
  values = [
    { title: 'Colaboración', desc: 'Aceptamos y promovemos las nuevas ideas y entendemos el éxito como responsabilidad de todos.' },
    { title: 'Compromiso', desc: 'Asumimos nuestros retos buscando siempre la excelencia, cumplimos nuestras promesas.' },
    { title: 'Honestidad', desc: 'Decimos la verdad y actuamos con honradez y rectitud en todo momento.' },
    { title: 'Respeto', desc: 'Tratamos al otro con dignidad y equidad, sin importar diferencias.' },
    { title: 'Servicio de calidad', desc: 'Asumimos el servicio como una forma de vida, base de nuestra ruta hacia el éxito.' }
  ],
  title = 'Nuestros Valores'
}) => {
  const styles = {
    wrapper: {
      width: '100%',
      padding: '60px 0px',
      backgroundColor: '#FFFFFF',
      fontFamily: "'Inter', sans-serif",
      boxSizing: 'border-box',
    },
    container: {
      margin: '0 auto',
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#1A2332',
      marginBottom: '40px',
      textAlign: 'left',
      position: 'relative',
      paddingLeft: '20px',
      borderLeft: '4px solid #D4B16A',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    card: {
      backgroundColor: '#F7F8FA',
      padding: '30px',
      borderRadius: '2px',
      border: '1px solid #EEEEEE',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1A2332',
      marginBottom: '12px',
    },
    cardText: {
      fontSize: '15px',
      lineHeight: '1.6',
      color: '#5A697F',
      margin: 0,
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>{title}</h2>
        <div style={styles.grid}>
          {values.map((v, i) => (
            <div key={i} style={styles.card}>
              <h3 style={styles.cardTitle}>{v.title}</h3>
              <p style={styles.cardText}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessInkGoldTextCard;