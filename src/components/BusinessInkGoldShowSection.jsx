import React from 'react';

const BusinessInkGoldShowSection = () => {
  // 格式化数据 - 使用主色的亮度变体
  const statsData = [
    {
      icon: 'path-to-credit-icon',
      number: 7915,
      desc: 'Millones en activos crediticios',
      bgColor: '#253045'  // 主色浅10% (亮度提高)
    },
    {
      icon: 'path-to-clients-icon',
      number: 275656,
      desc: 'Usuarios activos',
      bgColor: '#3A4A64'  // 原始主色
    },
    {
      icon: 'path-to-branches-icon',
      number: 360,
      desc: 'Sucursales en México y EE.UU.',
      bgColor: '#4A5A74'  // 主色浅20% (亮度降低，更深)
    }
  ];

  const styles = {
    section: {
      // backgroundColor: '#0A0F15',  // 使用主色的更深变体作为整体背景
      padding: '80px 20px',
      fontFamily: "'Inter', sans-serif",
      color: '#FFFFFF',
      width: '100%',
      boxSizing: 'border-box',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '24px',
    },
    column: {
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '40px 32px',
      borderRadius: '2px',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
    },
    iconPlaceholder: {
      width: '48px',
      height: '48px',
      backgroundColor: '#D4B16A',  // 金色背景
      marginBottom: '24px',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: '24px',
      height: '24px',
      fill: '#1A2332'  // 金色图标
    },
    number: {
      fontSize: '48px',
      fontWeight: '600',
      lineHeight: '1.2',
      color: '#FFFFFF',  // 白色数字
      margin: '0 0 12px 0',
      letterSpacing: '-0.5px',
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: 'rgba(255, 255, 255, 0.8)',  // 白色透明度80%
      margin: 0,
      maxWidth: '350px'
    }
  };

  // 格式化数字显示
  const formatNumber = (num) => {
    return num.toLocaleString('es-MX');
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {statsData.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.column,
              backgroundColor: item.bgColor,
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(210, 177, 106, 0.3)'  // 金色阴影
              }
            }}
          >
            {/* Icon */}
            <div style={styles.iconPlaceholder} aria-hidden="true">
              <img
                src={item.icon}
                alt=""
                style={styles.icon}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Number */}
            <span style={styles.number}>
              {formatNumber(item.number)}
            </span>

            {/* Description */}
            <p style={styles.description}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessInkGoldShowSection;
