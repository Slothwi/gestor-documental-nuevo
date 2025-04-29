'use client';

import React from 'react';
import './styles.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-container">
          <Image
            src="/images/australogo.png"
            alt="Austranet Logo"
            width={140}
            height={140}
            priority
          />
        </div>
        <button className="upload-button">⬆ Subir archivo</button>
        <nav className="nav">
          <a href="#">📑 Solicitudes</a>
          <a href="#">📚 Documentos</a>
          <a href="#">📁 Carpetas</a>
          <a href="#">📊 Reportes</a>
          <a href="#">📦 Mis archivos</a>
          <a href="#">⚙️ Configuraciones</a>
          <a href="#">🚪 Cerrar sesión</a>
        </nav>
        <div className="help-box">
          <p>¿Necesitas ayuda?<br />Puedes escribirnos para que te ayudemos en la navegación en el sitio</p>
          <button className="contact-button">Contactar</button>
        </div>
      </div>

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
