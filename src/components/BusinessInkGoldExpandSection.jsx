import React, { useState } from 'react';

const BusinessInkGoldExpandSection = ({ teamData: propTeamData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Default team data - at least one member
  const defaultTeamData = [
    {
      name: "Eduardo Messmacher Henríquez",
      role: "Director General",
      desc: "Eduardo Messmacher es un reconocido ejecutivo con más de 21 años de experiencia en el sector financiero en México, Argentina y Brasil, en importantes instituciones como HSBC y McKinsey and Co. Tiene una Ingeniería en Mecánica Eléctrica por el ITESM y una Maestría en Ciencias en Investigación de Operaciones por el MIT."
    }
  ];

  // Use prop data if provided, otherwise use default
  const teamData = propTeamData && propTeamData.length > 0 ? propTeamData : defaultTeamData;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 静态样式对象 (不包含依赖 isOpen 的动态值)
  const styles = {
    section: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      fontFamily: "'Inter', sans-serif",
      padding: '60px 0px',
      boxSizing: 'border-box',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '24px',
      margin: '0 auto',
    },
    itemBase: {
      backgroundColor: '#FFFFFF',
      border: '1px solid #E0E0E0',
      borderRadius: '2px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(26, 35, 50, 0.04)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    headerBase: {
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      minHeight: '140px',
      transition: 'background-color 0.3s, padding 0.3s',
    },
    headerActive: {
      backgroundColor: '#1A2332',
      paddingBottom: '16px',
    },
    nameBase: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#1A2332',
      margin: '0 0 8px 0',
      lineHeight: '1.3',
    },
    nameActive: {
      color: '#D4B16A',
    },
    roleBase: {
      fontSize: '13px',
      color: '#5A697F',
      margin: 0,
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    roleActive: {
      color: '#F7F8FA',
      opacity: 0.9,
    },
    iconContainerBase: {
      alignSelf: 'flex-end',
      marginTop: '12px',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#F7F8FA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s',
    },
    iconContainerActive: {
      backgroundColor: '#D4B16A',
    },
    iconBase: {
      fontSize: '18px',
      color: '#D4B16A',
      fontWeight: '300',
      lineHeight: 1,
    },
    iconActive: {
      color: '#1A2332',
    },
    contentWrapperBase: {
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease-in-out',
      backgroundColor: '#FFFFFF',
    },
    contentOpen: {
      maxHeight: '500px',
    },
    contentInner: {
      padding: '0 24px 24px 24px',
      borderTop: '1px solid #F0F0F0',
      marginTop: '0',
    },
    description: {
      fontSize: '14px',
      lineHeight: '1.7',
      color: '#333333',
      margin: '16px 0 0 0',
      textAlign: 'left',
      fontWeight: '400',
    },
    responsiveStyles: `
      @media (max-width: 1200px) {
        .biz-grid-container {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 768px) {
        .biz-grid-container {
          grid-template-columns: 1fr !important;
        }
      }
      .biz-item:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(26, 35, 50, 0.08);
        border-color: #D4B16A !important;
      }
    `
  };

  return (
    <section style={styles.section}>
      <style>{styles.responsiveStyles}</style>
      
      <div className="biz-grid-container" style={styles.gridContainer}>
        {teamData.map((person, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className="biz-item"
              style={{
                ...styles.itemBase,
                borderColor: isOpen ? '#D4B16A' : '#E0E0E0'
              }}
              onClick={() => handleToggle(index)}
            >
              {/* 头部区域 */}
              <div style={{
                ...styles.headerBase,
                ...(isOpen ? styles.headerActive : {})
              }}>
                <h3 style={{
                  ...styles.nameBase,
                  ...(isOpen ? styles.nameActive : {})
                }}>
                  {person.name}
                </h3>
                <p style={{
                  ...styles.roleBase,
                  ...(isOpen ? styles.roleActive : {})
                }}>
                  {person.role}
                </p>
                
                {/* 图标按钮 - 动态样式在此处计算 */}
                <div style={{
                  ...styles.iconContainerBase,
                  ...(isOpen ? styles.iconContainerActive : {})
                }}>
                  <span style={{
                    ...styles.iconBase,
                    ...(isOpen ? styles.iconActive : {})
                  }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
              </div>

              {/* 内容区域 */}
              <div style={{
                ...styles.contentWrapperBase,
                ...(isOpen ? styles.contentOpen : {})
              }}>
                <div style={styles.contentInner}>
                  <p style={styles.description}>{person.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Default props fallback
BusinessInkGoldExpandSection.defaultProps = {
  teamData: null
};

export default BusinessInkGoldExpandSection;