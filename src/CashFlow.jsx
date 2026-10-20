import React, { useState } from 'react';
import '../style.css';
import { Button } from './components/Button.jsx';
import { GlassCard } from './components/GlassCard.jsx';
import { Input } from './components/Input.jsx';
import { Badge } from './components/Badge.jsx';
import { Modal } from './components/Modal.jsx';
import { DataTable } from './components/DataTable.jsx';

export const CashFlow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [dataDoc, setDataDoc] = useState('');

  const tableColumns = ['Data', 'Descrição', 'Categoria', 'Status', 'Valor'];
  const [tableData, setTableData] = useState([
    ['20 Out', 'Fechamento de Caixa - Festa Junina', 'Receita', <Badge status="success">Conciliado</Badge>, 'R$ 4.250,00'],
    ['19 Out', 'Nota Fiscal 042 - Suprimentos', 'Despesa', <Badge status="neutral">ERP Senior</Badge>, '- R$ 380,00'],
    ['18 Out', 'Comprovante - Prestação de Contas', 'Despesa', <Badge status="neutral">Pendente Scanner</Badge>, '- R$ 145,00'],
    ['15 Out', 'Repasse Institucional SJT', 'Receita', <Badge status="success">Conciliado</Badge>, 'R$ 1.500,00']
  ]);

  const handleSalvar = () => {
    if (!descricao || !valor) return;

    const novoRegistro = [
      dataDoc || 'Hoje',
      descricao,
      'A Classificar', 
      <Badge status="neutral">Em Análise</Badge>,
      `R$ ${valor}`
    ];

    setTableData([novoRegistro, ...tableData]);
    setDescricao('');
    setValor('');
    setDataDoc('');
    setIsModalOpen(false);
  };

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
          <div style={{ flex: 1 }}>
            <Input placeholder="Buscar por descrição ou número da nota..." />
          </div>
          <Button style={{ background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-main)' }}>Filtrar</Button>
        </div>
        <DataTable columns={tableColumns} data={tableData} />
      </GlassCard>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Inserir Documento">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <Input label="Descrição do Documento" placeholder="ex: Nota Fiscal 102 - Gráfica" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input label="Valor (R$)" placeholder="0,00" value={valor} onChange={(e) => setValor(e.target.value)} />
            <Input label="Data" placeholder="DD/MM/AAAA" value={dataDoc} onChange={(e) => setDataDoc(e.target.value)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <Button style={{ background: 'transparent', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }} onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button onClick={handleSalvar}>Salvar Registro</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};