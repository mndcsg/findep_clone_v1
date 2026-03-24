import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BusinessInkGoldHeader = () => {
  // 模拟菜单数据，包含实际跳转链接
  const menuItems = [
    {
      label: "Conoce la Empresa",
      links: [
        { name: "Trayectoria", url: "#/corporativa/historia" },
        { name: "Perfil Institucional", url: "#/corporativa/perfil" }
      ]
    },
    {
      label: "Estructura Directiva",
      links: [
        { name: "Alta Dirección", url: "#/gobierno/equipo-directivo" },
      ]
    },
    {
      label: "Mercado de Capitales",
      links: [
        { name: "Gráfica Histórica", url: "#/accion/grafica-historica" },
        { name: "Información de Dividendos", url: "#/accion/precios-historicos" },
        { name: "Cobertura de Analistas", url: "#/accion/analistas" }
      ]
    },
    {
      label: "Compromiso Social",
      links: [
        { name: "Responsabilidad Social", url: "#/responsabilidad-social" }
      ]
    }
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  // 设计规范变量
  const colors = {
    primary: '#1A2332',
    bg: '#F7F8FA',
    gold: '#D4B16A',
    textDark: '#333333',
    textLight: '#FFFFFF',
    textMuted: '#5A697F'
  };

  const styles = {
    container: {
      width: '100%',
      height: '80px',
      backgroundColor: colors.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 80px',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    logo: {
      fontSize: '24px',
      fontWeight: '700',
      color: colors.textLight,
      textDecoration: 'none',
      letterSpacing: '1px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    logoPlaceholder: {
      width: '120px',
      height: '40px',
      backgroundColor: colors.gold,
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.primary,
      fontWeight: 'bold',
      fontSize: '14px'
    },
    nav: {
      display: 'flex',
      gap: '30px',
      height: '100%',
      alignItems: 'center'
    },
    navItem: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer'
    },
    navLink: {
      color: 'rgba(255,255,255,0.8)',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      paddingBottom: '4px',
      borderBottom: '2px solid transparent'
    },
    navLinkActive: {
      color: colors.textLight,
      borderBottom: `2px solid ${colors.gold}`
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: colors.bg,
      minWidth: '240px',
      padding: '20px 0',
      borderRadius: '0 0 2px 2px',
      boxShadow: '0 10px 30px rgba(26, 35, 50, 0.15)',
      borderTop: `3px solid ${colors.gold}`,
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(10px)',
      transition: 'all 0.3s ease'
    },
    dropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)'
    },
    dropdownItem: {
      padding: '10px 24px',
      display: 'block',
      color: colors.textDark,
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'background 0.2s',
      borderLeft: '3px solid transparent'
    }
  };

  return (
    <header style={styles.container}>
      {/* Logo Area */}
      <Link to="/" style={styles.logo}>
      <img 
    src="./logo.jpg" 
    alt="Caprepa Evolution Logo"
    style={{
      width: '250px',
      height: '50px',
      objectFit: 'contain'
    }}
  />
        <span>Caprepa Evolution, S.A.P.I. de C.V., SOFOM, E.N.R.</span>
      </Link>

      {/* Navigation */}
      <nav style={styles.nav}>
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            style={styles.navItem}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
          <button 
            type="button"
            style={{
              ...styles.navLink,
              ...(activeDropdown === index ? styles.navLinkActive : {}),
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              font: 'inherit'
            }}
          >
            {item.label}
          </button>

            {/* Dropdown Menu */}
            {item.links && (
              <div style={{
                ...styles.dropdown,
                ...(activeDropdown === index ? styles.dropdownVisible : {})
              }}>
                {item.links.map((link, lIndex) => (
                  <a 
                    key={lIndex} 
                    href={link.url}
                    style={styles.dropdownItem}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.color = colors.primary;
                      e.target.style.borderLeftColor = colors.gold;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = colors.textDark;
                      e.target.style.borderLeftColor = 'transparent';
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default BusinessInkGoldHeader;