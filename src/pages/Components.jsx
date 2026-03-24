import React from 'react';

// Business Ink Gold Components
import BusinessInkGoldBanner from '../components/BusinessInkGoldBanner';
import BusinessInkGoldHeader from '../components/BusinessInkGoldHeader';
import BusinessInkGoldHeroSlider from '../components/BusinessInkGoldHeroSlider';
import BusinessInkGoldTitle from '../components/BusinessInkGoldTitle';
import BusinessInkGoldShowSection from '../components/BusinessInkGoldShowSection';
import BusinessInkGoldTextCard from '../components/BusinessInkGoldTextCard';
import BusinessInkGoldTimeline from '../components/BusinessInkGoldTimeline';
import BusinessInkGoldExpandSection from '../components/BusinessInkGoldExpandSection';
import BusinessInkGoldToggleSection from '../components/BusinessInkGoldToggleSection';
import BusinessInkGoldPlotSection from '../components/BusinessInkGoldPlotSection';
import BusinessInkGoldTable from '../components/BusinessInkGoldTable';
import BusinessInkGoldFooter from '../components/BusinessInkGoldFooter';
import Timeline from '../components/Timeline';
const Components = () => {
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    section: {
      marginBottom: '80px',
    },
    themeHeader: {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#1A2332',
      color: '#FFFFFF',
    },
    themeTitle: {
      fontSize: '32px',
      fontWeight: '700',
      margin: '0 0 10px 0',
    },
    themeSubtitle: {
      fontSize: '16px',
      opacity: '0.8',
      margin: 0,
    },
    componentBlock: {
      marginBottom: '40px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    componentLabel: {
      padding: '12px 20px',
      backgroundColor: '#F7F8FA',
      borderBottom: '1px solid #E0E0E0',
      fontSize: '14px',
      fontWeight: '600',
      color: '#5A697F',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    divider: {
      height: '60px',
      backgroundColor: '#E0E0E0',
      margin: '40px 0',
    },
    themeDivider: {
      height: '100px',
      backgroundColor: '#2D343A',
      margin: '80px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      fontSize: '24px',
      fontWeight: '700',
    }
  };

  const ComponentBlock = ({ label, children }) => (
    <div style={styles.componentBlock}>
      <div style={styles.componentLabel}>{label}</div>
      {children}
    </div>
  );

  return (
    <div style={styles.container}>

      {/* ==================== Business Ink Gold Theme ==================== */}
      <div style={styles.themeHeader}>
        <h1 style={styles.themeTitle}>Business Ink Gold</h1>
        <p style={styles.themeSubtitle}>Premium dark theme with gold accents</p>
      </div>

      <div style={{ padding: '20px' }}>
        <ComponentBlock label="Header">
          <BusinessInkGoldHeader />
        </ComponentBlock>
        <ComponentBlock label="Header">
          <Timeline />
        </ComponentBlock>
        <ComponentBlock label="Banner">
          <BusinessInkGoldBanner />
        </ComponentBlock>

        <ComponentBlock label="Hero Slider">
          <BusinessInkGoldHeroSlider />
        </ComponentBlock>

        <ComponentBlock label="Title Section">
          <BusinessInkGoldTitle />
        </ComponentBlock>

        <ComponentBlock label="Show Section (Stats)">
          <BusinessInkGoldShowSection />
        </ComponentBlock>

        <ComponentBlock label="Text Cards (Values)">
          <BusinessInkGoldTextCard />
        </ComponentBlock>

        <ComponentBlock label="Timeline">
          <BusinessInkGoldTimeline />
        </ComponentBlock>

        <ComponentBlock label="Expand Section (Team)">
          <BusinessInkGoldExpandSection />
        </ComponentBlock>

        <ComponentBlock label="Toggle Section (Sidebar)">
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <BusinessInkGoldToggleSection />
          </div>
        </ComponentBlock>

        <ComponentBlock label="Plot Section (Stock Chart)">
          <BusinessInkGoldPlotSection />
        </ComponentBlock>

        <ComponentBlock label="Table (Stock Data)">
          <BusinessInkGoldTable />
        </ComponentBlock>

        <ComponentBlock label="Footer">
          <BusinessInkGoldFooter />
        </ComponentBlock>
      </div>

  


    </div>
  );
}

export default Components;