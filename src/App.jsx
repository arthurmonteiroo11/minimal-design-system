import React from 'react';
import '../style.css';
import { Button } from './components/Button';
import { GlassCard } from './components/GlassCard';
import { Input } from './components/Input';
import { Badge } from './components/Badge';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Cabeçalho */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '-0.02em' }}>
            System Settings
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
            Gerencie as credenciais e acessos da plataforma.
          </p>
        </div>
        <Badge status="success">Operational</Badge>
      </header>

      {/* Formulário / Dashboard Grid */}
      <main style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        
        <GlassCard title="Autenticação da API" description="Chaves de acesso para integração de sistemas externos.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            <Input label="Nome da Aplicação" placeholder="ex: Gaucho Express API" />
            <Input label="Chave Secreta" type="password" value="sk_live_992183120391" readOnly />
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
              <Button style={{ background: 'transparent', borderColor: 'transparent', color: 'var(--text-muted)' }}>
                Cancelar
              </Button>
              <Button>Gerar Nova Chave</Button>
            </div>
          </div>
        </GlassCard>

        {/* Card Secundário */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <GlassCard title="Requisições/min" description="Média das últimas 24 horas">
            <div style={{ fontSize: '28px', fontWeight: '600', marginTop: '12px', color: 'var(--text-main)' }}>
              1,420 <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '400' }}>/sec</span>
            </div>
          </GlassCard>

          <GlassCard title="Latência Global" description="Tempo de resposta médio do servidor">
            <div style={{ fontSize: '28px', fontWeight: '600', marginTop: '12px', color: 'var(--text-main)' }}>
              24ms
            </div>
          </GlassCard>
        </div>

      </main>
    </div>
  );
}