export const fraudTrendData = [
  { month: 'Jan', detections: 32, amount: 1200000, resolved: 28 },
  { month: 'Fév', detections: 45, amount: 1850000, resolved: 38 },
  { month: 'Mar', detections: 38, amount: 1650000, resolved: 35 },
  { month: 'Avr', detections: 52, amount: 2100000, resolved: 45 },
  { month: 'Mai', detections: 41, amount: 1900000, resolved: 39 },
  { month: 'Juin', detections: 47, amount: 2850000, resolved: 42 }
];

export const fraudTypeData = [
  { name: 'Falsification documents', value: 35, color: '#f1c2c2' },
  { name: 'Usurpation identité', value: 28, color: '#f5d5b8' },
  { name: 'Transactions suspectes', value: 22, color: '#f9e79f' },
  { name: 'Blanchiment argent', value: 15, color: '#a8d8ea' }
];

export const chartStyles = {
  lineChart: {
    detections: {
      stroke: '#cbd5e1',
      strokeWidth: 3,
      dot: {
        r: 4,
        fill: '#fff',
        stroke: '#cbd5e1',
        strokeWidth: 2,
        activeDot: { 
          r: 6,
          fill: '#fff',
          stroke: '#cbd5e1',
          strokeWidth: 2
        }
      }
    },
    resolved: {
      stroke: '#a1d9c7',
      strokeWidth: 3,
      dot: {
        r: 4,
        fill: '#fff',
        stroke: '#a1d9c7',
        strokeWidth: 2,
        activeDot: { 
          r: 6,
          fill: '#fff',
          stroke: '#a1d9c7',
          strokeWidth: 2
        }
      }
    },
    grid: {
      stroke: '#e2e8f0',
      strokeOpacity: 0.6,
      strokeDasharray: '3 3'
    },
    axis: {
      stroke: '#64748b'
    }
  },
  pieChart: {
    width: '100%',
    height: 320,
    outerRadius: 90,
    stroke: 'rgba(255, 255, 255, 0.8)',
    strokeWidth: 2
  }
}; 