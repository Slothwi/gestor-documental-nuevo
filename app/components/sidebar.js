"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <Link href="/">
          <Image
            src="/images/australogo.png"
            alt="Austranet Logo"
            width={140}
            height={140}
            priority
          />
        </Link>
      </div>
      <Link href="/views/subir_archivo" className="upload-button">
        ⬆️ Subir archivo
      </Link>
      <nav className="nav">
        <Link href="/views/documentos">📚 Documentos</Link>
        <Link href="/views/solicitudes">📑 Solicitudes</Link>
        <Link href="/views/carpetas">📁 Carpetas</Link>
        <Link href="/views/reportes">📊 Reportes</Link>
        <Link href="/views/mis_archivos">📦 Mis archivos</Link>
        <Link href="/views/configuraciones">⚙️ Configuraciones</Link>
        <Link href="/logout">🚪 Cerrar sesión</Link>
      </nav>
      <div className="help-box">
        <p>
          ¿Necesitas ayuda?
          <br />
          Puedes escribirnos para que te ayudemos en la navegación en el sitio
        </p>
        <button className="contact-button">Contactar</button>
      </div>
    </aside>
  );
}
