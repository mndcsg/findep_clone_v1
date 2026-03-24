// Timeline.js
import React from 'react';

// 设计令牌
const designTokens = {
  colors: {
    primary: '#1A2332',
    background: '#F7F8FA',
    accentGold: '#D4B16A',
    accentDark: '#333333',
    accentGray: '#5A697F',
    white: '#FFFFFF',
  },
  borderRadius: '2px',
  spacing: 8,
  fonts: {
    family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
};

// 默认时间线数据
const defaultData = [
  { year: '2025', text: 'Impulso definitivo de la inteligencia artificial en riesgo y atención al cliente.' },
  { year: '2024', text: 'Mejores resultados de rentabilidad y solidez en la década.' },
  { year: '2023', text: '31 años de trayectoria. Reestructuración financiera exitosa.' },
  { year: '2022', text: 'Expansión a nuevos mercados locales y lanzamiento de créditos 100% digitales.' },
  { year: '2021', text: 'Implementación de sistema antifraude avanzado.' },
  { year: '2020', text: 'Estrategia sólida ante la pandemia. Consolidación del negocio core.' },
  { year: '2019', text: 'Centralización operativa para elevar la eficiencia.' },
  { year: '2018', text: '25 años de servicio. Lanzamiento del modelo empresarial unificado.' },
  { year: '2017', text: 'Migración tecnológica a la nube y refinanciación estratégica.' },
  { year: '2016', text: 'Logro de cartera de mayor calidad y reducción histórica de mora.' },
  { year: '2015', text: 'Reestructuración eficiente para enfocarse en el negocio principal.' },
  { year: '2014', text: 'Innovación en fuentes de financiamiento y expansión de servicios.' },
  { year: '2013', text: '20 años de historia. Consolidación de operaciones.' },
  { year: '2012', text: 'Cambio estratégico clave: priorizar la calidad y solidez.' },
];

const Timeline = ({ 
  data = defaultData, 
  itemsPerRow = 4,
  title = ''
}) => {
  // 将数据按行分组
  const rows = [];
  for (let i = 0; i < data.length; i += itemsPerRow) {
    rows.push(data.slice(i, i + itemsPerRow));
  }

  // 容器样式
  const containerStyle = {
    fontFamily: designTokens.fonts.family,
    backgroundColor: designTokens.colors.background,
    padding: `${designTokens.spacing * 6}px`,
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box',
  };

  // 标题样式
  const titleStyle = {
    color: designTokens.colors.primary,
    fontSize: '32px',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: `${designTokens.spacing * 6}px`,
    letterSpacing: '-0.5px',
    margin: '0 0 48px 0',
  };

  // 包装器样式
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${designTokens.spacing * 3}px`,
  };

  // 行样式
  const getRowStyle = (isReverse) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: `${designTokens.spacing * 2}px`,
    padding: `${designTokens.spacing * 2}px 0`,
    flexDirection: isReverse ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
  });

  // 项目样式
  const itemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: `${designTokens.spacing * 2}px`,
    flex: '1',
    minWidth: '200px',
  };

  // 卡片样式
  const cardStyle = {
    background: designTokens.colors.white,
    border: `1px solid ${designTokens.colors.primary}1A`,
    borderRadius: designTokens.borderRadius,
    padding: `${designTokens.spacing * 2}px`,
    flex: '1',
    transition: 'box-shadow 0.2s ease',
    boxShadow: '0 1px 3px rgba(26, 35, 50, 0.05)',
  };

  // 年份样式
  const yearStyle = {
    color: designTokens.colors.primary,
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: `${designTokens.spacing * 1}px`,
    lineHeight: 1.2,
  };

  // 文本样式
  const textStyle = {
    color: designTokens.colors.accentDark,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.6,
    textAlign: 'left',
  };

  // 行内箭头样式
  const arrowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: `${designTokens.spacing * 3}px`,
    minWidth: '24px',
  };

  // 向下箭头样式（与行内箭头保持一致）
  const downArrowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${designTokens.spacing * 1}px 0`,
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      {/* 动态加载 Inter 字体 */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`}
      </style>
      
      <h1 style={titleStyle}>{title}</h1>
      
      <div style={wrapperStyle}>
        {rows.map((row, rowIndex) => {
          // 偶数行从左到右，奇数行从右到左
          const isReverse = rowIndex % 2 === 1;
          const displayRow = isReverse ? [...row].reverse() : row;
          const isLastRow = rowIndex === rows.length - 1;
          
          return (
            <React.Fragment key={rowIndex}>
              <div style={getRowStyle(isReverse)}>
                {displayRow.map((item, itemIndex) => {
                  const isLastInRow = itemIndex === displayRow.length - 1;
                  // 偶数行：第一个卡片显示向下箭头；奇数行：最后一个卡片显示向下箭头
                  // 由于 displayRow 已经根据 isReverse 反转，所以始终检查第一个元素
                  const showDownArrow = itemIndex === 0 && !isLastRow;
                  
                  return (
                    <div key={item.year} style={itemStyle}>
                      <div style={cardStyle}>
                        <div style={yearStyle}>{item.year}</div>
                        <div style={textStyle}>{item.text}</div>
                      </div>
                      
                      {/* 行内箭头（除每行最后一个） */}
                      {!isLastInRow && (
                        <div style={arrowStyle}>
                          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                            <path 
                              d={isReverse 
                                ? "M24 6H4M4 6L10 1M4 6L10 11" 
                                : "M0 6H20M20 6L14 1M20 6L14 11"
                              } 
                              stroke={designTokens.colors.accentGold} 
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                      
                      {/* 向下箭头（每行最左侧卡片，除最后一行） */}
                      {showDownArrow && (
                        <div style={downArrowStyle}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path 
                              d="M12 4V20M12 20L6 14M12 20L18 14" 
                              stroke={designTokens.colors.accentGold} 
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

// Default props
Timeline.defaultProps = {
  data: defaultData,
  itemsPerRow: 4,
  title: 'Business Timeline 2012–2025'
};

export default Timeline;