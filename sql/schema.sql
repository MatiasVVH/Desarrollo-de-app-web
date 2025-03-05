-- Crea la base de datos y la usa
CREATE DATABASE ClinicaMedica;
USE ClinicaMedica;

-- Tabla de Tipos de Usuario
CREATE TABLE TipoUsuario (
    idTipoUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla de Usuarios
CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    idTipoUsuario INT NOT NULL,
    FOREIGN KEY (idTipoUsuario) REFERENCES TipoUsuario(idTipoUsuario)
);

-- Tabla de Pacientes
CREATE TABLE Paciente (
    idPaciente INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    fechaNacimiento DATE,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

-- Tabla de Médicos
CREATE TABLE Medico (
    idMedico INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    especialidad VARCHAR(100),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

-- Tabla de Citas
CREATE TABLE Cita (
    idCita INT AUTO_INCREMENT PRIMARY KEY,
    idPaciente INT NOT NULL,
    idMedico INT NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    estado ENUM('Pendiente', 'Aprobada', 'Rechazada') NOT NULL,
    FOREIGN KEY (idPaciente) REFERENCES Paciente(idPaciente),
    FOREIGN KEY (idMedico) REFERENCES Medico(idMedico)
);

-- Tabla de Consultas Médicas
CREATE TABLE Consulta (
    idConsulta INT AUTO_INCREMENT PRIMARY KEY,
    idCita INT NOT NULL,
    motivo TEXT NOT NULL,
    diagnostico TEXT,
    FOREIGN KEY (idCita) REFERENCES Cita(idCita)
);

-- Tabla de Tratamientos
CREATE TABLE Tratamiento (
    idTratamiento INT AUTO_INCREMENT PRIMARY KEY,
    descripcion TEXT NOT NULL
);

-- Tabla intermedia entre Consultas y Tratamientos
CREATE TABLE ConsultaTratamiento (
    idConsulta INT NOT NULL,
    idTratamiento INT NOT NULL,
    PRIMARY KEY (idConsulta, idTratamiento),
    FOREIGN KEY (idConsulta) REFERENCES Consulta(idConsulta),
    FOREIGN KEY (idTratamiento) REFERENCES Tratamiento(idTratamiento)
);
