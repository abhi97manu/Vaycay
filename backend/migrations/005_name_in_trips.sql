ALTER TABLE trips
add COLUMN name VARCHAR(255),
MODIFY COLUMN activities_id INT ;

Alter TABLE vacay_db.itenary
drop foreign key itenary_ibfk_1,
rename COLUMN departure_id TO trip_id,
add COLUMN activity_id INT,
add COLUMN meal_provided ENUM('Breakfast', 'Lunch', 'Dinner','None') NOT NULL Default 'None',
add constraint fk_activity_id FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
add constraint fk_trip_id FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE

;
