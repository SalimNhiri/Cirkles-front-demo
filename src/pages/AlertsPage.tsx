import React from 'react';
import { Card, Typography, Space, Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface Alert {
  type: string;
  time: string;
  amount: string;
  status: 'En cours' | 'Résolu';
}

const alerts: Alert[] = [
  {
    type: 'Fraude documentaire',
    time: 'Il y a 2h',
    amount: '12,450€',
    status: 'En cours'
  },
  {
    type: 'Usurpation d\'identité',
    time: 'Il y a 4h',
    amount: '8,750€',
    status: 'Résolu'
  },
  {
    type: 'Transaction suspecte',
    time: 'Il y a 5h',
    amount: '5,200€',
    status: 'En cours'
  }
];

export function AlertsPage() {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Alertes récentes</Title>
      <Text type="secondary">Dernières alertes détectées</Text>
      
      <Space direction="vertical" size="middle" style={{ width: '100%', marginTop: '24px' }}>
        {alerts.map((alert, index) => (
          <Card key={index} hoverable>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title level={4} style={{ margin: 0 }}>{alert.type}</Title>
                <Tag color={alert.status === 'En cours' ? 'processing' : 'success'}>
                  {alert.status}
                </Tag>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Space>
                  <ClockCircleOutlined />
                  <Text type="secondary">{alert.time}</Text>
                </Space>
                <Text strong style={{ fontSize: '18px' }}>{alert.amount}</Text>
              </div>
            </Space>
          </Card>
        ))}
      </Space>
    </div>
  );
} 