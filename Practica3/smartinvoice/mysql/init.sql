
CREATE DATABASE smartinvoice;
use smartinvoice;

CREATE TABLE usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password_hash TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE proveedores(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    nit VARCHAR(30),
    direccion TEXT
);

CREATE TABLE IF NOT EXISTS facturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_factura VARCHAR(100) NOT NULL,
    fecha DATE,
    nit VARCHAR(50),
    subtotal FLOAT,
    impuestos FLOAT,
    total FLOAT,
    estado VARCHAR(50) DEFAULT 'Pendiente',
    archivo VARCHAR(255),
    proveedor_id INT,
    usuario_id INT,

    CONSTRAINT fk_factura_proveedor
        FOREIGN KEY (proveedor_id)
        REFERENCES proveedores(id),

    CONSTRAINT fk_factura_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id)
);

CREATE TABLE bitacora(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    factura_id INT,
    fecha_proceso DATETIME,
    estado VARCHAR(50),
    resultado TEXT
);

CREATE TABLE reportes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_archivo VARCHAR(255),
    fecha_generacion DATETIME
);