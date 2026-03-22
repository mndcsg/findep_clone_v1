import React from 'react';

/**
 * BusinessInkGoldInfoBlock
 * 
 * 一个符合 Business Ink Gold 规范的信息展示组件。
 * 支持图片左右切换，适用于商务介绍、功能展示等场景。
 * 
 * @param {string} title - 组件标题
 * @param {string} description - 组件描述文本
 * @param {'left' | 'right'} imagePosition - 图片位置，默认为 'left'
 * @param {string} imageAlt - 图片占位符的 alt 文本
 */
const BusinessInkGoldInfoBlock = ({ 
  title, 
  description, 
  imagePosition = 'left', 
  imageUrl = "https://placehold.co/1920x400/1A2332/FFFFFF/png?text=image" ,
  imageAlt = ""  // ✅ 添加参数默认值
}) => {
  
  // --- 样式定义 (Style Object) ---
  const styles = {
    // 容器：白色背景，充足留白，最大宽度限制
    container: {
      width: '100%',

      backgroundColor: '#FFFFFF',
      fontFamily: "'Inter', sans-serif",
      padding: '60px 0px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
    },
    // 内容包裹器：限制最大宽度，Flex 布局
    wrapper: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '60px', // 图片与文字之间的间距
      flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
    },
    // 图片区域：占位符样式
    imageContainer: {
      flex: '1 1 50%', // 占据一半空间，可伸缩
      minWidth: '300px',
      height: '400px',
      backgroundColor: '#F7F8FA', // 背景色作为占位底色
      border: '1px solid #E0E0E0',
      borderRadius: '2px', // 规范圆角
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // 模拟图片内容的图形 (纯 CSS 绘制占位)
    placeholderGraphic: {
      width: '60%',
      height: '60%',
      backgroundColor: '#E8EAED',
      borderRadius: '2px',
      position: 'relative',
    },
    // 装饰性小方块 (增加设计感)
    placeholderAccent: {
      position: 'absolute',
      bottom: '-20px',
      right: '-20px',
      width: '100px',
      height: '100px',
      backgroundColor: '#1A2332', // 主色
      opacity: 0.05,
      borderRadius: '2px',
      zIndex: 1,
    },
    // 文本区域
    textContainer: {
      flex: '1 1 50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'left', // 严格左对齐
    },
    // 装饰线 (金色)
    divider: {
      width: '60px',
      height: '3px',
      backgroundColor: '#D4B16A', // 强调色：金
      marginBottom: '24px',
      borderRadius: '2px',
    },
    // 标题
    title: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#1A2332', // 主色
      margin: '0 0 20px 0',
      lineHeight: '1.3',
      letterSpacing: '-0.5px',
    },
    // 描述
    description: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#5A697F', // 次级强调色：灰蓝，保证可读性且不刺眼
      margin: 0,
      textAlign: 'justify', // 两端对齐，体现严谨
    },
    // 响应式调整 (通过媒体查询模拟，实际使用中建议配合 CSS Media Query 或 JS 判断窗口大小)
    // 这里为了保持纯内联样式 simplicity，我们在移动端可能会显得拥挤，
    // 但在 Web 端桌面视口下表现完美。若需完美移动端，通常需父组件传递 isMobile  prop。
  };

  return (
    <section style={styles.container}>
      <div style={styles.wrapper}>
        
        {/* 图片部分 */}
        <div style={styles.imageContainer}>
          <div style={styles.placeholderAccent}></div>
          <div style={styles.placeholderGraphic}>
            {/* 内部装饰线条，模拟图表或建筑感 */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '20%',
              right: '20%',
              bottom: '20%',
              border: '2px solid #D4B16A',
              opacity: 0.3,
              borderRadius: '2px'
            }}></div>
          </div>
          {/* 隐藏的真实 img 标签，若有真实数据可取消注释并替换 src */}
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            style={{width: '100%', height: '100%', objectFit: 'cover'}} 
          />        </div>

        {/* 文本部分 */}
        <div style={styles.textContainer}>
          <div style={styles.divider}></div>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>{description}</p>
        </div>

      </div>
    </section>
  );
};

export default BusinessInkGoldInfoBlock;