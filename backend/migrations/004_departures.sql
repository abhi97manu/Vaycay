Use vaycay_db;

CREATE TABLE IF NOT EXISTS departures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_date TIMESTAMP NOT NULL ,
    end_date TIMESTAMP NOT NULL,
    total_seats INT NOT NULL,
    available_seats INT,
    trip_id INT,
    destintaion_id INT,
    FOREIGN KEY (trip_id) REFERENCES trip (id) ON DELETE CASCADE
)

CREATE TABLE IF NOT EXISTS itenary (\
id INT AUTO_INCREMENT PRIMARY KEY,
departure_id INT NOT NULL,
itenary_days INT NOT NULL,
description VARCHAR(255) NOT NULL,
FOREIGN KEY (departure_id) REFERENCES departures(id) ON DELETE CASCADE

)