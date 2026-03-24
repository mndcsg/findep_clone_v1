// BusinessInkGoldToggleSection.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BusinessInkGoldToggleSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 菜单项配置：名称 + 路由路径
  const menuItems = [
    { label: "Gráfica Histórica", path: "/accion/grafica-historica" },
    { label: "Información de Dividendos", path: "/accion/precios-historicos" },
    { label: "Cobertura de Analistas", path: "/accion/analistas" }
  ];

  // 根据当前路由确定激活状态
  const getActiveIndex = () => {
    const currentIndex = menuItems.findIndex(item => 
      location.pathname === item.path
    );
    return currentIndex >= 0 ? currentIndex : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex());

  const styles = {
    sidebar: {
      width: '100%',
      maxWidth: '300px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #EEEEEE',
      borderRadius: '2px',
      fontFamily: "'Inter', sans-serif",
      boxSizing: 'border-box',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      borderBottom: '1px solid #F7F8FA',
    },
    button: (isActive) => ({
      width: '100%',
      textAlign: 'left',
      padding: '16px 20px',
      backgroundColor: isActive ? '#1A2332' : '#FFFFFF',
      color: isActive ? '#D4B16A' : '#333333',
      border: 'none',
      fontSize: '15px',
      fontWeight: isActive ? '600' : '400',
      cursor: 'pointer',
      transition: 'all 0.2s',
      borderRadius: '2px',
      display: 'block',
      textDecoration: 'none',
      boxSizing: 'border-box',
    })
  };

  const handleItemClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <div style={styles.sidebar}>
      <ul style={styles.list}>
        {menuItems.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <button 
              style={styles.button(activeIndex === index)}
              onClick={() => handleItemClick(index, item.path)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessInkGoldToggleSection;