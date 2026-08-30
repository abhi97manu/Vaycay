
Use vaycay_db;


CREATE TABLE IF NOT EXISTS activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCAHR(255) UNIQUE NOT NULL,
    price DECIMAL(10, 2) NOT NULL  
)ENGINE=InnoDB 
  DEFAULT CHARSET= utf8mb4
  COLLATE=utf8mb4_unicode_ci; 


CREATE TABLE IF NOT EXISTS trip_activities (
      id INT AUTO_INCREMENT PRIMARY KEY, 
      trip_id INT NOT NULL,
      activities_id INT NOT NULL,
      FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE,
      FOREIGN KEY (activities_id) REFERENCES Activities(id) ON DELETE CASCADE,
)ENGINE=InnoDB 
  DEFAULT CHARSET= utf8mb4
  COLLATE=utf8mb4_unicode_ci; 