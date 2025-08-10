'use client';

import React, { useState } from 'react';

export default function SubirArchivo() {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [archivo, setArchivo] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const tiposPermitidos = ['PDF', 'DOCX', 'XLSX', 'PNG', 'JPG'];

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !tipo || !archivo) {
        setMensaje({ texto: 'Por favor completa todos los campos.', tipo: 'error' });
        return;
    }

    if (!tiposPermitidos.includes(tipo.toUpperCase())) {
        setMensaje({ texto: `Tipo inválido. Usa: ${tiposPermitidos.join(', ')}`, tipo: 'error' });
        return;
    }

    setMensaje({ texto: `Archivo "${nombre}" (${tipo}) listo para subir. 🟢`, tipo: 'exito' });
    // Reset
    setNombre('');
    setTipo('');
    setArchivo(null);
    e.target.reset();
    };

    return (
    <div className="subir-archivo-container">
        <h2>Subir Archivo</h2>
        <form onSubmit={handleSubmit}>
        <label>
            Nombre del archivo:
            <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre descriptivo"
            required
            />
        </label>

        <label>
            Tipo de archivo:
            <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            placeholder="Ejemplo: PDF, DOCX"
            required
            />
        </label>

        <label>
            Seleccionar archivo:
            <input
            type="file"
            onChange={(e) => setArchivo(e.target.files[0])}
            required
            />
        </label>

        <button type="submit">Subir</button>
        </form>

        {mensaje && (
        <p className={`mensaje ${mensaje.tipo === 'error' ? 'error' : 'exito'}`}>
          { mensaje.texto}
        </p>
        )}
    </div>
    );
}
