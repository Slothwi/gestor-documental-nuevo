"use client";

import React, { useState } from "react";

export default function Solicitudes() {
  const [filtroEstado, setFiltroEstado] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const solicitudes = [
    {
      id: 1,
      titulo: "Solicitud de Contrato",
      fecha: "2025-08-10",
      estado: "Pendiente",
    },
    {
      id: 2,
      titulo: "Solicitud de Factura",
      fecha: "2025-08-08",
      estado: "Aprobada",
    },
    {
      id: 3,
      titulo: "Solicitud de Informe",
      fecha: "2025-08-07",
      estado: "Rechazada",
    },
  ];

  // Filtrar solicitudes por estado y búsqueda
  const solicitudesFiltradas = solicitudes.filter((sol) => {
    const matchEstado = filtroEstado ? sol.estado === filtroEstado : true;
    const matchBusqueda = sol.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return matchEstado && matchBusqueda;
  });

  return (
    <div className="main-content">
      <header className="header">
        <h1>Solicitudes</h1>
        <button className="upload-button">Nueva Solicitud</button>
      </header>

      <div className="filtros">
        <input
          type="search"
          placeholder="Buscar solicitudes..."
          className="search-input"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          className="search-input"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Aprobada">Aprobada</option>
          <option value="Rechazada">Rechazada</option>
        </select>
      </div>

      <section className="solicitudes-lista">
        {solicitudesFiltradas.length === 0 ? (
          <p>No hay solicitudes que mostrar.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Documento</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {solicitudesFiltradas.map((sol) => (
                <tr key={sol.id}>
                  <td>{sol.titulo}</td>
                  <td>{sol.fecha}</td>
                  <td>
                    <span
                      className={`estado estado-${sol.estado.toLowerCase()}`}
                    >
                      {sol.estado}
                    </span>
                  </td>
                  <td>
                    <button className="btn-ver">Ver</button>
                    <button className="btn-aprobar">Aprobar</button>
                    <button className="btn-rechazar">Rechazar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
