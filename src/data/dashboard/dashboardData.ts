export const fraudTrendData = [
  { month: 'Jan', detections: 45, resolved: 38 },
  { month: 'Fév', detections: 52, resolved: 45 },
  { month: 'Mar', detections: 48, resolved: 42 },
  { month: 'Avr', detections: 55, resolved: 48 },
  { month: 'Mai', detections: 58, resolved: 52 },
  { month: 'Juin', detections: 62, resolved: 55 },
];

export const fraudTypeData = [
  { name: 'Fraude documentaire', value: 35, color: '#93C5FD' },
  { name: 'Fraude à l\'identité', value: 25, color: '#6EE7B7' },
  { name: 'Fraude au paiement', value: 20, color: '#FCD34D' },
  { name: 'Fraude au crédit', value: 15, color: '#FCA5A5' },
  { name: 'Autres', value: 5, color: '#C4B5FD' },
];

export const chartStyles = {
  lineChart: {
    grid: {
      stroke: '#E2E8F0',
      strokeOpacity: 0.5,
      strokeDasharray: '4 4',
    },
    axis: {
      stroke: '#64748B',
    },
    detections: {
      stroke: '#93C5FD',
      strokeWidth: 2,
      dot: {
        r: 4,
        activeDot: {
          r: 6,
        },
      },
    },
    resolved: {
      stroke: '#6EE7B7',
      strokeWidth: 2,
      dot: {
        r: 4,
        activeDot: {
          r: 6,
        },
      },
    },
  },
  pieChart: {
    outerRadius: 80,
    innerRadius: 45,
    stroke: '#FFFFFF',
    strokeWidth: 2,
  },
}; 