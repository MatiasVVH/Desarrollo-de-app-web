USE ClinicaMedica;

-- Insertar tipos de usuario
INSERT INTO TipoUsuario (nombre) VALUES ('Paciente'), ('Médico'), ('Administrativo');

-- Insertar usuarios
INSERT INTO Usuario (nombre, correo, telefono, idTipoUsuario) VALUES
('Juan Pérez', 'juan@example.com', '123456789', 1),
('Dra. Rodríguez', 'rodriguez@example.com', '987654321', 2),
('Carlos López', 'admin@example.com', '111222333', 3);

-- Insertar pacientes
INSERT INTO Paciente (idUsuario, fechaNacimiento) VALUES (1, '1990-05-10');

-- Insertar médicos
INSERT INTO Medico (idUsuario, especialidad) VALUES (2, 'Cardiología');

-- Insertar citas
INSERT INTO Cita (idPaciente, idMedico, fecha, hora, estado) VALUES (1, 1, '2024-03-10', '10:00:00', 'Pendiente');

-- Insertar consultas médicas
INSERT INTO Consulta (idCita, motivo, diagnostico) VALUES (1, 'Dolor de pecho', 'Posible angina de pecho');

-- Insertar tratamientos
INSERT INTO Tratamiento (descripcion) VALUES ('Medicamento para el corazón');

-- Relacionar consulta con tratamiento
INSERT INTO ConsultaTratamiento (idConsulta, idTratamiento) VALUES (1, 1);
