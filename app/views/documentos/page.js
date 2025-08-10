'use client';

import { useState } from 'react';
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileAlt } from 'react-icons/fa';

export default function Documents() {
  const [documents] = useState([
    { id: 1, title: 'Contrato de Arrendamiento.pdf', type: 'PDF', uploadDate: '2025-08-01' },
    { id: 2, title: 'Informe Anual.docx', type: 'Word', uploadDate: '2025-07-15' },
    { id: 3, title: 'Planificación 2025.xlsx', type: 'Excel', uploadDate: '2025-06-30' },
    { id: 4, title: 'Notas.txt', type: 'Texto', uploadDate: '2025-08-05' },
  ]);

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FaFilePdf color="#E53E3E" size={48} />;
      case 'word':
        return <FaFileWord color="#3182CE" size={48} />;
      case 'excel':
        return <FaFileExcel color="#38A169" size={48} />;
      case 'texto':
        return <FaFileAlt color="#718096" size={48} />;
      default:
        return <FaFileAlt color="#A0AEC0" size={48} />;
    }
  };

  return (
    <div className="container">
      <main className="main-content">
        <header className="header">
          <h1>Documentos</h1>
          <input
            type="search"
            placeholder="Buscar documentos..."
            className="search-input"
          />
        </header>

        <section
          className="documents-list"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          {documents.map((doc) => (
            <article
              key={doc.id}
              className="area"
              style={{
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1rem',
                gap: '0.5rem',
              }}
            >
              <div>{getIcon(doc.type)}</div>
              <h3 style={{ fontWeight: 'bold', margin: '0' }}>{doc.title}</h3>
              <p style={{ fontWeight: 'normal', margin: '0' }}>Tipo: {doc.type}</p>
              <p style={{ fontWeight: 'normal', margin: '0' }}>Fecha de subida: {doc.uploadDate}</p>
              <div style={{ marginTop: '0.5rem' }}>
                <button style={{ marginRight: '0.5rem' }}>Ver</button>
                <button style={{ marginRight: '0.5rem' }}>Descargar</button>
                <button>Eliminar</button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
