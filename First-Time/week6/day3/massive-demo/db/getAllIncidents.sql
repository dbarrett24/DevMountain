select
    incidents.id,
    incidents.us_state,
    injuries.name as injury_name,
    affected_areas.name as affected_area_name,
    causes.name as cause_name
from incidents
join injuries on injuries.id = incidents.injury_id
join affected_areas on injuries.affected_area_id = affected_areas.id
join causes on causes.id = incidents.cause_id
where us_state = $1 and causes.name = $2 --means the FIRST argument