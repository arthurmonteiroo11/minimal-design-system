import React, { useState } from 'react';
import '../style.css';
import { Button } from './components/Button.jsx';
import { ApiSettings } from './ApiSettings.jsx';
import { CashFlow } from './CashFlow.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('cashflow');

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid var(--border-subtle)' }}>
        <Button 
          style={{ background: activeTab === 'cashflow' ? 'var(--surface-hover)' : 'transparent', borderColor: activeTab === 'cashflow' ? 'var(--border-highlight)' : 'transparent', color: activeTab === 'cashflow' ? 'var(--text-main)' : 'var(--text-muted)' }} 
          onClick={() => setActiveTab('cashflow')}
        >
          Gestão Financeira
        </Button>
        <Button 
          style={{ background: activeTab === 'api' ? 'var(--surface-hover)' : 'transparent', borderColor: activeTab === 'api' ? 'var(--border-highlight)' : 'transparent', color: activeTab === 'api' ? 'var(--text-main)' : 'var(--text-muted)' }} 
          onClick={() => setActiveTab('api')}
        >
          Configurações de API
        </Button>
      </nav>

      {activeTab === 'cashflow' ? <CashFlow /> : <ApiSettings />}
    </div>
  );
}