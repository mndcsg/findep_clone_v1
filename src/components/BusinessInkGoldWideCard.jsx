import React from 'react';

/**
 * BusinessInkGoldWideCard
 * 
 * 宽幅信息卡片，支持行内文本强调。
 * 强调部分仅通过颜色和微阴影区分，无背景框。
 * 
 * @param {string} title - 卡片标题
 * @param {Array} content - 内容数组。
 *        每个元素可以是一个字符串，或者一个包含 segments 的数组。
 *        Segment 格式：{ text: string, highlight?: boolean }
 */
const BusinessInkGoldWideCard = ({ title, content }) => {
  
  const styles = {
    // 宽幅容器
    container: {
      width: '100%',
      margin: '0 auto',
      marginTop: '30px',  // 新增：上方间隔 10px

      backgroundColor: '#FFFFFF',
      fontFamily: "'Inter', sans-serif",
      // padding: '60px 80px', // 增加左右留白以匹配宽幅
      boxSizing: 'border-box',
      // borderRadius: '2px',
      // border: '1px solid #E0E0E0',
      // boxShadow: '0 4px 20px rgba(26, 35, 50, 0.05)',
      display: 'flex',
      flexDirection: 'column',
    },
    // 顶部装饰线
    divider: {
      width: '80px', // 稍长一点的线以匹配宽幅
      height: '3px',
      backgroundColor: '#D4B16A',
      marginBottom: '32px',
      borderRadius: '2px',
      alignSelf: 'flex-start',
    },
    // 标题
    title: {
      fontSize: '36px', // 大标题匹配宽幅
      fontWeight: '700',
      color: '#1A2332',
      margin: '0 0 40px 0',
      lineHeight: '1.2',
      letterSpacing: '-0.5px',
    },
    // 段落容器
    paragraph: {
      fontSize: '18px', // 稍大的字号以适应宽屏阅读
      lineHeight: '1.8',
      color: '#5A697F',
      marginBottom: '24px',
      textAlign: 'left',
      margin: '0 0 24px 0',
    },
    // 普通文本片段
    textSpan: {
      color: '#5A697F',
      fontWeight: '400',
      transition: 'color 0.2s',
    },
    // 强调文本片段 (核心修改)
    highlightSpan: {
      color: '#1A2332', // 变为主色深蓝
      fontWeight: '600', // 加粗
      textDecoration: 'none',
      // 微妙的文字阴影，增加立体感但不炫彩
      textShadow: '0 2px 4px rgba(26, 35, 50, 0.15)', 
      position: 'relative',
      zIndex: 1,
    },
  };

  // 渲染单个段落（处理行内混合高亮）
  const renderParagraph = (segmentData, index) => {
    // 如果传入的是纯字符串，直接渲染
    if (typeof segmentData === 'string') {
      return <p key={index} style={styles.paragraph}>{segmentData}</p>;
    }

    // 如果传入的是对象数组 (segments)，遍历渲染
    if (Array.isArray(segmentData)) {
      return (
        <p key={index} style={styles.paragraph}>
          {segmentData.map((segment, segIndex) => (
            <span
              key={segIndex}
              style={segment.highlight ? styles.highlightSpan : styles.textSpan}
            >
              {segment.text}
            </span>
          ))}
        </p>
      );
    }
    
    return null;
  };

  return (
    <div style={styles.container}>
      {/* 金色装饰线 */}
      <div style={styles.divider}></div>
      
      {/* 标题 */}
      <h2 style={styles.title}>{title}</h2>
      
      {/* 内容区域 */}
      <div>
        {content.map((item, index) => renderParagraph(item, index))}
      </div>
    </div>
  );
};

export default BusinessInkGoldWideCard;