-- Inserciones TipoUsuario
INSERT INTO TipoUsuario (nombre_tipo) VALUES 
('Cliente'),
('Proveedor'),
('Administrador');

-- Inserciones Usuario
INSERT INTO Usuario (nombre_usuario, correo, contraseña, fecha_registro, id_tipo_usuario) VALUES 
('Juan Pérez', 'juan@example.com', '123456', '2025-03-01', 1),
('María López', 'maria@example.com', 'abcdef', '2025-03-02', 1),
('Proveedor Tech', 'tech@example.com', 'provpass', '2025-03-03', 2);

-- Inserciones Categoría
INSERT INTO Categoria (nombre_categoria) VALUES 
('Electrónica'),
('Ropa'),
('Hogar');

-- Inserciones Proveedor
INSERT INTO Proveedor (nombre_proveedor, rut_proveedor, direccion, telefono) VALUES 
('Tech Supplier', '12345678-9', 'Calle 123, Ciudad', '123456789'),
('Fashion Co.', '87654321-0', 'Avenida 456, Ciudad', '987654321');

-- Inserciones Producto
INSERT INTO Producto (nombre_producto, descripcion, precio, stock, id_categoria, id_proveedor) VALUES 
('Smartphone', 'Último modelo con pantalla OLED', 799.99, 50, 1, 1),
('Camisa Casual', 'Camisa de algodón azul', 29.99, 100, 2, 2),
('Sofa Moderno', 'Sofa de 3 plazas, color gris', 399.99, 30, 3, 2);

-- Inserciones Promoción
INSERT INTO Promocion (nombre_promocion, descuento, fecha_inicio, fecha_fin) VALUES 
('Descuento de Primavera', 10.00, '2025-03-01', '2025-03-15'),
('Promoción Verano', 15.00, '2025-06-01', '2025-06-30');

-- Inserciones Producto_Promocion (Relación N:M entre Producto y Promoción)
INSERT INTO Producto_Promocion (id_producto, id_promocion) VALUES 
(1, 1), -- Smartphone con Descuento de Primavera
(2, 2), -- Camisa Casual con Promoción Verano
(3, 1); -- Sofa Moderno con Descuento de Primavera

-- Inserciones Pedido
INSERT INTO Pedido (id_cliente, fecha_pedido, estado_pedido, total) VALUES 
(1, '2025-03-05', 'En proceso', 829.98),
(2, '2025-03-06', 'En proceso', 429.99);

-- Inserciones DetallePedido
INSERT INTO DetallePedido (id_pedido, id_producto, cantidad, precio_unitario) VALUES 
(1, 1, 1, 799.99),
(1, 2, 1, 29.99),
(2, 2, 1, 29.99);

-- Inserciones Pago
INSERT INTO Pago (id_pedido, metodo_pago, monto_pagado, fecha_pago) VALUES 
(1, 'Tarjeta de Crédito', 829.98, '2025-03-06'),
(2, 'Transferencia Bancaria', 29.99, '2025-03-07');

-- Inserciones Despacho
INSERT INTO Despacho (id_pedido, direccion_entrega, fecha_envio, transportista, estado_despacho) VALUES 
(1, 'Calle Ficticia 123, Ciudad', '2025-03-07', 'Transportes Rápidos S.A.', 'Enviado'),
(2, 'Avenida Sol 456, Ciudad', '2025-03-08', 'Logística Express', 'Pendiente');

-- Inserciones Reseña
INSERT INTO Reseña (id_usuario, id_producto, calificacion, comentario, fecha_reseña) VALUES 
(1, 1, 5, 'Excelente producto, muy rápido y con gran calidad', '2025-03-07'),
(2, 2, 4, 'Buen producto, pero la talla es un poco pequeña', '2025-03-08');
