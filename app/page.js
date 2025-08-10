'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <main className="main-content">
        <header className="header">
          <h1>Gestor Documental</h1>
          <input type="search" placeholder="Buscar..." className="search-input" />
        </header>

        <section className="areas">
          <div className="area rrhh">RRHH <span>Recursos humanos</span></div>
          <div className="area proveedores">Proveedores <span>Servicios y bienes</span></div>
          <div className="area protocolos">Protocolos <span>Reglamentos</span></div>
          <div className="area clientes">Clientes <span>Externos</span></div>
          <div className="area finanzas">Finanzas <span>Externos</span></div>
          <div className="area tecnologia">Tecnología <span>Reglamentos</span></div>
          <div className="area admin">Admin <span>Servicios y bienes</span></div>
          <div className="area productos">Productos <span>Recursos humanos</span></div>
        </section>

        <div className="widgets">
          <div className="widget">📊 Objetivo vs Realidad</div>
          <div className="widget">📈 Importación documentos</div>
          <div className="widget">💾 Almacenamiento</div>
          <div className="widget">👥 Cantidad de usuarios</div>
          <div className="widget">📋 Tipos de documentos</div>
        </div>
      </main>
    </div>
  );
}
