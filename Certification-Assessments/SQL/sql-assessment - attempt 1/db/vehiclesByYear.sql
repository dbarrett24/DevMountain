SELECT users.name, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id FROM vehicles
JOIN users ON owner_id = users.id
WHERE year > 2000
ORDER BY year DESC;