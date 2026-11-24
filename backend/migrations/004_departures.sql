CREATE TABLE IF NOT EXISTS departures (
  id INT AUTO_INCREMENT PRIMARY KEY,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  total_seats INT NOT NULL,
  available_seats INT NOT NULL,
  trip_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS itinerary_days (
  id INT AUTO_INCREMENT PRIMARY KEY,
  trip_id INT NOT NULL,
  day_number INT NOT NULL,
  description TEXT,
  activity VARCHAR(255),
  meal VARCHAR(100) NOT NULL DEFAULT 'None',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE,
  UNIQUE KEY unique_trip_day (trip_id, day_number)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
