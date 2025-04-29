CREATE DATABASE gestor_documental;

USE gestor_documental;

CREATE TABLE Usuarios (
    ID INT PRIMARY KEY IDENTITY(1,1), -- Define la columna como autoincremental
    Nombre VARCHAR(100) NOT NULL, -- Nombre del usuario
    Email VARCHAR(100) NOT NULL, -- Correo electrónico
    CONSTRAINT UNQ_Email UNIQUE (Email) -- Asegura que no haya correos duplicados
);
ALTER TABLE Usuarios
ADD Contrasena VARCHAR(255) NOT NULL,
    FechaRegistro DATETIME DEFAULT GETDATE();

CREATE TABLE Archivos (
    ID INT PRIMARY KEY IDENTITY(1,1), -- Identificador único
    NombreArchivo VARCHAR(255) NOT NULL, -- Nombre del archivo
    TipoArchivo VARCHAR(50) NOT NULL, -- Tipo MIME del archivo
    TamanioArchivo INT NOT NULL, -- Tamaño en bytes
    RutaArchivo VARCHAR(255) NOT NULL, -- Ruta donde está guardado en el servidor
    FechaSubida DATETIME DEFAULT GETDATE() -- Fecha de subida
);
