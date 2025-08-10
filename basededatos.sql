CREATE DATABASE gestor_documental;

USE gestor_documental;

CREATE TABLE Usuarios (
    ID INT PRIMARY KEY IDENTITY(1,1), 
    Nombre VARCHAR(100) NOT NULL, 
    Email VARCHAR(100) NOT NULL, 
    CONSTRAINT UNQ_Email UNIQUE (Email) 
);
ALTER TABLE Usuarios
ADD Contrasena VARCHAR(255) NOT NULL,
    FechaRegistro DATETIME DEFAULT GETDATE();

CREATE TABLE Archivos (
    ID INT PRIMARY KEY IDENTITY(1,1), 
    NombreArchivo VARCHAR(255) NOT NULL, 
    TipoArchivo VARCHAR(50) NOT NULL, 
    TamanioArchivo INT NOT NULL, 
    RutaArchivo VARCHAR(255) NOT NULL, 
    FechaSubida DATETIME DEFAULT GETDATE() 
);
