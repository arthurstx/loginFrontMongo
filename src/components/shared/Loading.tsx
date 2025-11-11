// src/components/Shared/Loading.tsx
import React from 'react';

// Você pode usar uma animação mais complexa (como um spinner CSS),
// mas este é um bom ponto de partida funcional.

export const Loading: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '20px',
      flexDirection: 'column',
      gap: '10px'
    }}>
      <div className="spinner">
        {/* Você pode adicionar um spinner CSS aqui, por exemplo: */}
        <p>🔄 Carregando...</p>
      </div>
      <p>Aguarde, processando sua requisição.</p>
    </div>
  );
};

