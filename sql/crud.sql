USE ClinicaMedica;

-- 1️⃣ Leer todos los usuarios
SELECT * FROM Usuario;

-- 2️⃣ Agregar un nuevo paciente
INSERT INTO Usuario (nombre, correo, telefono, idTipoUsuario) VALUES 
('Ana Torres', 'ana@example.com', '444555666', 1);

INSERT INTO Paciente (idUsuario, fechaNacimiento) VALUES (LAST_INSERT_ID(), '1985-08-20');

-- 3️⃣ Actualizar el estado de una cita
UPDATE Cita SET estado = 'Aprobada' WHERE idCita = 1;

-- 4️⃣ Eliminar un paciente (solo de prueba)
DELETE FROM Paciente WHERE idPaciente = 1;
