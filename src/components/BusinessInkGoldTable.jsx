import React from 'react';

const BusinessInkGoldTable = ({ tableHeaders, tableData, tableWidth = '100%'  }) => {
  // Default table headers
  const defaultHeaders = [
    { key: 'date', label: 'Fecha', subLabel: null },
    { key: 'open', label: 'Apertura', subLabel: null },
    { key: 'high', label: 'Máximo', subLabel: null },
    { key: 'low', label: 'Mínimo', subLabel: null },
    { key: 'close', label: 'Cierre', subLabel: null },
    { key: 'vol', label: 'Volumen', subLabel: 'En Miles', align: 'center' }
  ];

  // Default table data
  const defaultData = [
    { date: '2026/03/13', open: '8.76', high: '8.76', low: '8.76', close: '8.76', vol: '183' },
    { date: '2026/03/12', open: '8.76', high: '8.76', low: '8.76', close: '8.76', vol: '61' },
    { date: '2026/03/11', open: '8.76', high: '8.76', low: '8.76', close: '8.76', vol: '31' },
    { date: '2026/03/10', open: '8.76', high: '8.76', low: '8.76', close: '8.76', vol: '124' },
    { date: '2026/03/09', open: '8.76', high: '8.76', low: '8.76', close: '8.76', vol: '139' },
    { date: '2026/03/06', open: '8.76', high: '8.76', low: '8.76', close: '8.76', vol: '214' },
  ];

  // Use props or fallback to defaults
  const headers = tableHeaders && tableHeaders.length > 0 ? tableHeaders : defaultHeaders;
  const data = tableData && tableData.length > 0 ? tableData : defaultData;

  const styles = {
    wrapper: {
      width: '100%',
      margin: '0 auto',
      fontFamily: "'Inter', sans-serif",
      padding: '40px 0px',
      boxSizing: 'border-box',
      overflowX: 'auto'
    },
    table: {
      width: tableWidth,
      borderCollapse: 'collapse',
      backgroundColor: '#FFFFFF',
      borderRadius: '2px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(26, 35, 50, 0.05)',
      minWidth: '600px'
    },
    th: {
      backgroundColor: '#1A2332',
      color: '#D4B16A',
      padding: '16px 12px',
      textAlign: 'left',
      fontSize: '13px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderBottom: '2px solid #D4B16A'
    },
    td: {
      padding: '14px 12px',
      fontSize: '18px',
      color: '#333333',
      borderBottom: '1px solid #F0F0F0',
      textAlign: 'left'
    },
    trEven: {
      backgroundColor: '#FFFFFF'
    },
    trOdd: {
      backgroundColor: '#FAFAFA'
    },
    subHeader: {
      fontSize: '11px',
      color: '#D4B16A',
      fontWeight: '600',
      display: 'block',
      marginTop: '4px',
      textTransform: 'uppercase'
    }
  };

  return (
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                style={{
                  ...styles.th,
                  textAlign: header.align || 'left'
                }}
              >
                {header.label}
                {header.subLabel && (
                  <span style={styles.subHeader}>{header.subLabel}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex % 2 === 0 ? styles.trEven : styles.trOdd}>
              {headers.map((header, colIndex) => (
                <td 
                  key={colIndex} 
                  style={{
                    ...styles.td,
                    textAlign: header.align || 'left',
                    fontWeight: header.key === 'close' ? '600' : '400',
                    color: header.key === 'close' ? '#1A2332' : (header.key === 'vol' ? '#5A697F' : '#333333')
                  }}
                >
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Default props fallback
BusinessInkGoldTable.defaultProps = {
  tableHeaders: null,
  tableData: null
};

export default BusinessInkGoldTable;