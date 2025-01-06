option = {

    polar: {
      radius: [45, '80%'],
      axisTick: {
        show: false // 隐藏角度轴的刻度线
      },
    },
    radiusAxis: {
      max: 0.11,
      axisLabel: {
        show: false // 隐藏半径轴上的刻度标签
      }
    },
    angleAxis: {
      type: 'category',
      data: ['Roadway\nType', 'Work\nZone', 'BAC', 'Vulnerable\nUser', 'Driver\nBehavior'],
      startAngle: 75,
      axisLabel: {
        fontSize: 25, // 调大角度轴标签的字体大小,
        color: '#FFFFF'
      },
      axisTick: {
        show: false // 隐藏角度轴的刻度线
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed', // 设置为虚线
          color: '#999'   // 设置虚线颜色
        }
      }
    },
    tooltip: {
        textStyle: {
        fontSize: 12 // 调整提示框字体大小
      }
    },
    series: {
      type: 'bar',
      data: [
        { value: 0.1015, itemStyle: { color: '#eda388' } }, // Red
        { value:-0.0003, itemStyle: { color: '#afba71' } }, // Green
        { value: 0.0925, itemStyle: { color: '#eccc79' } }, // Blue
        { value: 0.0366, itemStyle: { color: '#7c9bbf' } },  // Yellow
        { value: 0.0598, itemStyle: { color: '#de9cad' } }, 
        // { value: 1-, itemStyle: { color: '#4BA3C3' } }, 
      ],
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle',
        formatter: '{c}',
        fontSize: 25
      }
    },
    animation: false
  };