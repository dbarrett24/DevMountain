SELECT vehicle_id, make, model, year, owner_id FROM users
JOIN vehicles ON vehicles.owner_id = users.user_id
WHERE users.email = $1;