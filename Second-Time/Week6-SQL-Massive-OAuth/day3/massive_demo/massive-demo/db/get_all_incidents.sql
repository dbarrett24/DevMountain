SELECT incidents.id,
incidents.us_state,
injuries.name as injury_name,
affected_areas.name as affected_area_name,
causes.name as causes_name
FROM incidents
JOIN injuries ON incidents.injury_id = injuries.id
JOIN affected_areas ON affected_areas.id = injuries.affected_area_id
JOIN causes on causes.id = incidents.cause_id