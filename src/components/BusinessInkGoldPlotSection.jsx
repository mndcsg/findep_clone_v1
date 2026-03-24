// BusinessInkGoldPlotSection.js
import React, { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush
} from 'recharts';

const BusinessInkGoldStockChart = () => {
  // --- 1. 生成伪造数据 ---
  const generateData = () => {
    const data = [];
    let basePrice = 8.50;
    const startDate = new Date('2026-01-01');
    
    for (let i = 0; i < 90; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      
      if (date.getDay() === 0 || date.getDay() === 6) continue;

      const volatility = 0.15;
      const change = (Math.random() - 0.48) * volatility;
      const open = basePrice;
      const close = basePrice + change;
      const high = Math.max(open, close) + Math.random() * 0.05;
      const low = Math.min(open, close) - Math.random() * 0.05;
      const volume = Math.floor(Math.random() * 2000) + 100;

      data.push({
        date: date.toISOString().split('T')[0],
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        volume: volume,
        displayDate: `${date.getDate()}/${date.getMonth() + 1}`
      });

      basePrice = close;
    }
    return data;
  };

  const data = useMemo(() => generateData(), []);

  const latest = data[data.length - 1];
  const previous = data[data.length - 2];
  const variation = latest && previous ? (latest.close - previous.close).toFixed(2) : "0.00";
  const variationPercent = latest && previous ? ((variation / previous.close) * 100).toFixed(2) : "0.00";
  const isPositive = variation >= 0;

  // --- 2. 样式定义 ---
  const styles = {
    container: {
      width: '100%',
      margin: '0 auto',
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#FFFFFF',
      padding: '40px 80px',
      boxSizing: 'border-box',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '30px',
      gap: '20px',
      flexWrap: 'wrap',
    },
    titleGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1A2332',
      margin: 0,
      letterSpacing: '-0.5px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#5A697F',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    priceGroup: {
      textAlign: 'right',
    },
    currentPrice: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#1A2332',
      lineHeight: '1',
      marginBottom: '4px',
    },
    variation: {
      fontSize: '14px',
      fontWeight: '600',
      color: isPositive ? '#1A2332' : '#C0372D',
      backgroundColor: isPositive ? 'rgba(26, 35, 50, 0.05)' : 'rgba(192, 55, 45, 0.05)',
      padding: '4px 8px',
      borderRadius: '2px',
      display: 'inline-block',
    },
    // 上下布局
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      marginTop: '20px',
    },
    chartSection: {
      width: '100%',
    },
    tableSection: {
      width: '100%',
      borderTop: '2px solid #F7F8FA',
      paddingTop: '40px',
    },
    chartContainer: {
      width: '100%',
      height: '400px',
      position: 'relative',
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    table: {
      width: '50%',
      borderCollapse: 'collapse',
    },
    th: {
      textAlign: 'left',
      padding: '10px 12px',
      fontSize: '11px',
      fontWeight: '700',
      color: '#5A697F',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderBottom: '1px solid #E0E0E0',
    },
    td: {
      padding: '10px 12px',
      fontSize: '13px',
      color: '#333333',
      borderBottom: '1px solid #F0F0F0',
      fontFamily: "'Inter', sans-serif",
    },
    tableTitle: {
      fontSize: '14px',
      color: '#1A2332',
      marginBottom: '16px',
      fontWeight: '600',
    },
    source: {
      marginTop: '30px',
      paddingTop: '20px',
      borderTop: '1px solid #F0F0F0',
      fontSize: '12px',
      color: '#999999',
      textAlign: 'right',
      fontStyle: 'italic',
    },
    customTooltip: {
      backgroundColor: '#1A2332',
      color: '#FFFFFF',
      padding: '12px 16px',
      borderRadius: '2px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      border: '1px solid #D4B16A',
    },
    tooltipLabel: {
      marginBottom: '8px',
      fontSize: '13px',
      fontWeight: '600',
      color: '#D4B16A',
    },
    tooltipItem: {
      fontSize: '13px',
      margin: '4px 0',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div style={styles.customTooltip}>
          <div style={styles.tooltipLabel}>{d.date}</div>
          <div style={styles.tooltipItem}>
            <span>Cierre:</span>
            <span style={{fontWeight: '700'}}>${d.close.toFixed(2)}</span>
          </div>
          <div style={styles.tooltipItem}>
            <span>Máximo:</span>
            <span>${d.high.toFixed(2)}</span>
          </div>
          <div style={styles.tooltipItem}>
            <span>Mínimo:</span>
            <span>${d.low.toFixed(2)}</span>
          </div>
          <div style={styles.tooltipItem}>
            <span>Volumen:</span>
            <span>{d.volume.toLocaleString()}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={styles.container}>
      {/* 头部信息 */}
      <div style={styles.header}>
        <div style={styles.titleGroup}>
          <h2 style={styles.title}>Caprepa Evolution, S.A.P.I. de C.V., SOFOM, E.N.R.</h2>
          <p style={styles.subtitle}>
            <span style={{width: '8px', height: '8px', backgroundColor: '#D4B16A', borderRadius: '50%', display: 'inline-block'}}></span>
            Bolsa Mexicana de Valores &nbsp;|&nbsp; Retraso de 20 min
          </p>
        </div>
        <div style={styles.priceGroup}>
          <div style={styles.currentPrice}>${latest ? latest.close.toFixed(2) : '0.00'}</div>
          <div style={styles.variation}>
            {isPositive ? '+' : ''}{variation} ({isPositive ? '+' : ''}{variationPercent}%)
          </div>
        </div>
      </div>

      {/* 上下布局：图表 + 表格 */}
      <div style={styles.contentContainer}>
        {/* 上方 - 图表区域 */}
        <div style={styles.chartSection}>
          <div style={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4B16A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4B16A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                <XAxis 
                  dataKey="displayDate" 
                  tick={{fontSize: 12, fill: '#5A697F'}} 
                  axisLine={{stroke: '#E0E0E0'}}
                  tickLine={false}
                  minTickGap={30}
                />
                <YAxis 
                  domain={['auto', 'auto']} 
                  tick={{fontSize: 12, fill: '#5A697F'}} 
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(val) => `$${val}`}
                  width={50}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#D4B16A', strokeWidth: 1, strokeDasharray: '4 4' }} />
                
                <Area 
                  type="monotone" 
                  dataKey="close" 
                  stroke="#D4B16A" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                  animationDuration={1500}
                />
                
                <Brush 
                  dataKey="displayDate" 
                  height={30} 
                  stroke="#1A2332" 
                  fill="#F7F8FA"
                  travellerWidth={10}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 下方 - 数据表格 */}
        <div style={styles.tableSection}>
          <h3 style={styles.tableTitle}>Historial Reciente</h3>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Fecha</th>
                  <th style={styles.th}>Cierre</th>
                  <th style={{...styles.th, textAlign: 'right'}}>Vol</th>
                </tr>
              </thead>
              <tbody>
                {[...data].reverse().slice(0, 15).map((row, index) => (
                  <tr key={index} style={{backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFAFA'}}>
                    <td style={styles.td}>{row.displayDate}</td>
                    <td style={{...styles.td, fontWeight: '600', color: '#1A2332'}}>${row.close.toFixed(2)}</td>
                    <td style={{...styles.td, textAlign: 'right', color: '#5A697F'}}>{row.volume.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={styles.source}>
        Fuente: Datos simulados con fines de demostración de diseño (Original: Economatica)
      </div>
    </div>
  );
};

export default BusinessInkGoldStockChart;