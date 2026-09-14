


CREATE TABLE IF NOT EXISTS destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    state_id INT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (state_id) REFERENCES States(id) ON DELETE CASCADE

)ENGINE=InnoDB 
  DEFAULT CHARSET= utf8mb4
  COLLATE=utf8mb4_unicode_ci; 


  CREATE TABLE IF NOT EXISTS trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    destination_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    starting_point VARCHAR(255) NOT NULL,
    ending_point VARCHAR(255) NOT NULL,
    activities_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
  ) ENGINE=InnoDB
  DEFAULT CHARSET= utf8mb4  
   COLLATE=utf8mb4_unicode_ci; 


CREATE TABLE IF NOT EXISTS packages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    destination_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
)ENGINE=InnoDB 
  DEFAULT CHARSET= utf8mb4
  COLLATE=utf8mb4_unicode_ci; 