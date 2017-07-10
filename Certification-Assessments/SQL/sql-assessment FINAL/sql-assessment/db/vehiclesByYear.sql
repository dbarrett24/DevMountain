SELECT users.name, make, model, year, owner_id FROM vehicles
JOIN users ON owner_id = users.id
WHERE year > 2000
ORDER BY year DESC;