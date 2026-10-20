import React, { useState } from 'react';
import '../style.css';
import { Button } from './components/Button';
import { GlassCard } from './components/GlassCard';
import { Input } from './components/Input';
import { Badge } from './components/Badge';
import { Modal } from './components/Modal';
import { DataTable } from './components/DataTable';

export const CashFlow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableColumns = ['Data', 'Descrição', 'Categoria', 'Status', 'Valor'];
  const tableData = [
    ['20 Out', 'Fechamento de Caixa - Festa Junina', 'Receita', <Badge status="success">Conciliado</Badge>, 'R$ 4.250,00'],
    ['19 Out', 'Nota Fiscal 042 - Suprimentos', 'Despesa', <Badge status="neutral">ERP Senior</Badge>, '- R$ 380,00'],
    ['18 Out', 'Comprovante - Prestação de Contas', 'Despesa', <Badge status="neutral">Pendente Scanner</Badge>, '- R$ 145,00'],
    ['15 Out', 'Repasse Institucional SJT', 'Receita', <Badge status="success">Conciliado</Badge>, 'R$ 1.500,00'],
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>Gestão de Fluxo de Caixa</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>Controle de notas fiscais, comprovantes e fechamentos.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Novo Lançamento</Button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <GlassCard title="Entradas" description="Mês atual"><div style={{ fontSize: '28px', fontWeight: '600', marginTop: '8px', color: '#10b981' }}>R$ 5.750,00</div></GlassCard>
        <GlassCard title="Saídas" description="Mês atual"><div style={{ fontSize: '28px', fontWeight: '600', marginTop: '8px', color: 'var(--text-main)' }}>R$ 525,00</div></GlassCard>
        <GlassCard title="Pendências" description="Aguardando scanner"><div style={{ fontSize: '28px', fontWeight: '600', marginTop: '8px', color: 'var(--text-muted)' }}>12 notas</div></GlassCard>
      </div>

      <GlassCard title="Lançamentos Recentes" description="Últimos registros e status de sincronização.">
        <div style={{ display: 'flex', gap: '16px', marginTop: '20px', marginBottom: '20px' }}>
          <Input placeholder="Buscar por descrição ou número da nota..." style={{ flex: 1 }} />
          <Button style={{ background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-main)' }}>Filtrar</Button>
        </div>
        <DataTable columns={tableColumns} data={tableData} />
      </GlassCard>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Inserir Documento">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <Input label="Descrição do Documento" placeholder="ex: Nota Fiscal 102 - Gráfica" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input label="Valor (R$)" placeholder="0,00" />
            <Input label="Data" placeholder="DD/MM/AAAA" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <Button style={{ background: 'transparent', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }} onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button onClick={() => setIsModalOpen(false)}>Salvar Registro</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};