

CREATE DATABASE smartbot;

USE smartbot;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(255)
);

CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255)
);


CREATE TABLE pregunta(
    id INT AUTO_INCREMENT PRIMARY KEY,
    pregunta VARCHAR(500) NOT NULL,
    respuesta TEXT NOT NULL,
    categoria_id INT NOT NULL,

    CONSTRAINT fk_categoria
        FOREIGN KEY(categoria_id)
        REFERENCES categoria(id)
);



CREATE TABLE configuracion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telegram_chat_id VARCHAR(100)
);



CREATE TABLE consulta(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_telegram VARCHAR(100),
    consulta TEXT,
    respuesta TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
);




INSERT INTO usuario(username,password)
VALUES(
'IA1-User',
'IA1-password@_new'
);


INSERT INTO categoria(nombre,descripcion)
VALUES
('Horarios','Información de horarios'),
('Inscripciones','Procesos de inscripción'),
('Pagos','Pagos y cuotas');


INSERT INTO pregunta(pregunta,respuesta,categoria_id)
VALUES
('¿Cuál es el horario de atención?','Lunes a viernes de 8:00 a 17:00',1),

('¿Atienden sábados?','No se atiende los sábados',1),

('¿Cuál es el horario de soporte?','El soporte está disponible de 8 AM a 5 PM',1),

('¿A qué hora abre la oficina?','La oficina abre a las 8 AM',1),

('¿A qué hora cierra la oficina?','La oficina cierra a las 5 PM',1),

('¿Cómo puedo inscribirme?','Debe completar el formulario de inscripción',2),

('¿Qué documentos necesito para inscribirme?','DPI y certificado correspondiente',2),

('¿Dónde realizo la inscripción?','Puede realizarla desde el portal web',2),

('¿Cuándo inician las inscripciones?','Las inscripciones inician en enero',2),

('¿Puedo inscribirme en línea?','Sí, el proceso es completamente en línea',2),

('¿Cuál es el costo de inscripción?','El costo es de Q100',3),

('¿Dónde puedo realizar el pago?','En bancos autorizados',3),

('¿Aceptan tarjeta de crédito?','Sí, aceptamos tarjetas de crédito y débito',3),

('¿Cómo obtengo mi recibo?','Puede descargarlo desde el portal',3),

('¿Qué pasa si pago fuera de fecha?','Se aplicarán recargos',3),

('¿Dónde encuentro el calendario académico?','En el sitio oficial de la institución',1),

('¿Cómo contacto soporte?','Por correo o teléfono institucional',1),

('¿Puedo actualizar mis datos?','Sí, desde el portal estudiantil',2),

('¿Cómo recupero mi contraseña?','Utilice la opción recuperar contraseña',2),

('¿Existe atención virtual?','Sí, mediante videollamada programada',1);


INSERT INTO configuracion(
telegram_chat_id
)
VALUES(
''
);