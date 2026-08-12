CREATE DATABASE IF NOT EXISTS divinely_strange;
USE divinely_strange;

CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category ENUM('earrings', 'necklaces', 'rings') NOT NULL,
  isNew BOOLEAN NOT NULL DEFAULT FALSE,
  stock INT NOT NULL DEFAULT 0,
  material VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, category, isNew, stock, material, description)
VALUES
  ('Grave Bloom Hoops', 48.00, 'earrings', TRUE, 6, 'Oxidised silver', 'Slim hoops with thornwork casting and midnight pearl drops.'),
  ('Cathedral Fang Studs', 36.00, 'earrings', FALSE, 9, 'Sterling silver', 'Tiny gothic fangs with a stone-set black zircon center.'),
  ('Saint Ash Pendant', 72.00, 'necklaces', TRUE, 5, 'Silver and onyx', 'Long pendant necklace with cross detailing and heavy chain.'),
  ('Ritual Relic Chain', 68.00, 'necklaces', FALSE, 4, 'Gunmetal steel', 'Layering chain with antique clasp and charm cluster.'),
  ('Nocturne Signet', 54.00, 'rings', TRUE, 7, 'Sterling silver', 'Solid signet ring engraved with crescent iconography.'),
  ('Widow Thorn Band', 42.00, 'rings', FALSE, 11, 'Blackened brass', 'Slim band ring with repeating thorn relief around the shank.');
