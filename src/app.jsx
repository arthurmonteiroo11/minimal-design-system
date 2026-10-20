import React from 'react';
import '../style.css';
import { Button } from './components/Button';
import { GlassCard } from './components/GlassCard';

export default function App() {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      <header style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px' }}>
          Minimal Design System
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
          Ambiente de testes para os componentes construídos em React.
        </p>
      </header>

      <main>
        <GlassCard 
          title="Painel de Controle" 
          description="Exemplo de como o GlassCard organiza o conteúdo mantendo o fundo translúcido e a hierarquia visual sem o uso de sombras."
        >
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <Button>
              Ação Principal
            </Button>
            
            <Button style={{ background: 'transparent', borderColor: 'var(--text-muted)', color: 'var(--text-muted)' }}>
              Cancelar
            </Button>
          </div>
        </GlassCard>
      </main>

    </div>
  );
}