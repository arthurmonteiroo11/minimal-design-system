import React, { useState } from 'react';
import '../style.css';
import { Button } from './components/Button';
import { GlassCard } from './components/GlassCard';
import { Input } from './components/Input';
import { Badge } from './components/Badge';
import { Modal } from './components/Modal';
import { DataTable } from './components/DataTable';

export const ApiSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableColumns = ['Data/Hora', 'Endpoint', 'Status', 'Latência'];
  const tableData = [
    ['Hoje, 10:42', 'GET /v3/search', '200 OK', '18ms'],
    ['Hoje, 10:38', 'POST /v3/videos', '201 Created', '42ms'],
    ['Hoje, 10:15', 'GET /v3/channels', '200 OK', '24ms'],
    ['Hoje, 09:59', 'DELETE /v3/playlists', '403 Forbidden', '12ms'],
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '-0.02em' }}>System Settings</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>Gerencie credenciais e acessos da plataforma.</p>
        </div>
        <Badge status="success">Operational</Badge>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        <GlassCard title="Autenticação da API" description="Chaves de acesso para integração de sistemas externos.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            <Input label="Nome da Aplicação" placeholder="ex: Youtube API" />
            <Input label="Chave Secreta" type="password" value="sk_live_992183120391" readOnly />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
              <Button style={{ background: 'transparent', borderColor: 'transparent', color: 'var(--text-muted)' }}>Cancelar</Button>
              <Button onClick={() => setIsModalOpen(true)}>Gerar Nova Chave</Button>
            </div>
          </div>
        </GlassCard>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <GlassCard title="Requisições/min" description="Média das últimas 24 horas">
            <div style={{ fontSize: '28px', fontWeight: '600', marginTop: '12px' }}>1,420 <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '400' }}>/sec</span></div>
          </GlassCard>
          <GlassCard title="Latência Global" description="Tempo de resposta médio do servidor">
            <div style={{ fontSize: '28px', fontWeight: '600', marginTop: '12px' }}>24ms</div>
          </GlassCard>
        </div>

        <GlassCard title="Logs de Auditoria" description="Últimas requisições processadas pela API.">
          <div style={{ marginTop: '20px' }}>
            <DataTable columns={tableColumns} data={tableData} />
          </div>
        </GlassCard>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirmar Geração de Chave">
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px', lineHeight: '1.5' }}>
          Esta ação revogará a chave de API atual. Tem certeza de que deseja continuar?
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <Button style={{ background: 'transparent', borderColor: 'var(--border-subtle)' }} onClick={() => setIsModalOpen(false)}>Cancelar</Button>
          <Button onClick={() => setIsModalOpen(false)}>Confirmar</Button>
        </div>
      </Modal>
    </div>
  );
};