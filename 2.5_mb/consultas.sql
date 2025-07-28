USE mati;

-- 1.- Mostrar todos los usuarios de tipo Cliente
SELECT u.username, u.email, t.nombre_tipo
FROM usuarios u
JOIN tipo_usuarios t ON u.id_tipo_usuario = t.id_tipo
WHERE t.nombre_tipo = 'Cliente';

-- 2.- Mostrar Personas nacidas después del año 1990
SELECT p.nombre_completo, p.fecha_nac, u.username
FROM personas p
JOIN usuarios u ON p.id_usuario = u.id_usuario
WHERE p.fecha_nac > '1990-12-31';

-- 3.- Seleccionar nombres de personas que comiencen con la letra A
SELECT p.nombre_completo, u.email
FROM personas p
JOIN usuarios u ON p.id_usuario = u.id_usuario
WHERE p.nombre_completo LIKE 'A%';

-- 4.- Mostrar usuarios cuyos dominios de correo sean mail.com
SELECT username, email
FROM usuarios
WHERE email LIKE '%@mail.com';

-- 5.- Personas que no viven en Valparaíso
SELECT p.nombre_completo, u.username, c.nombre_ciudad
FROM personas p
JOIN ciudad c ON p.id_ciudad = c.id_ciudad
JOIN usuarios u ON p.id_usuario = u.id_usuario
WHERE c.id_ciudad <> 2;

-- 6.- Mostrar usuarios con más de 7 caracteres de longitud en el username
SELECT username
FROM usuarios
WHERE CHAR_LENGTH(username) > 7;

-- 7.- Personas nacidas entre 1990 y 1995
SELECT u.username
FROM personas p
JOIN usuarios u ON p.id_usuario = u.id_usuario
WHERE p.fecha_nac BETWEEN '1990-01-01' AND '1995-12-31';
