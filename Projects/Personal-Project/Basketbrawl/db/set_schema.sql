DROP TABLE IF EXISTS teams, players;

-- teams
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    logo text
);

INSERT INTO teams(name, logo)
VALUES
('Atlanta Hawks', '../public/images/TeamLogos-Edited/Roster-Size/hawks.svg'),
('Boston Celtics', '../public/images/TeamLogos-Edited/Roster-Size/celtics.svg'),
('Brooklyn Nets', '../public/images/TeamLogos-Edited/Roster-Size/nets.svg'),
('Charlotte Hornets', '../public/images/TeamLogos-Edited/Roster-Size/hornets.svg'),
('Chicago Bulls', '../public/images/TeamLogos-Edited/Roster-Size/bulls.svg'),
('Cleveland Cavaliers', '../public/images/TeamLogos-Edited/Roster-Size/cavs.svg'),
('Dallas Mavericks', '../public/images/TeamLogos-Edited/Roster-Size/mavs.svg'),
('Denver Nuggets', '../public/images/TeamLogos-Edited/Roster-Size/nuggets.svg'),
('Detroit Pistons', '../public/images/TeamLogos-Edited/Roster-Size/pistons.svg'),
('Golden State Warriors', '../public/images/TeamLogos-Edited/Roster-Size/warriors.svg'),
('Houston Rockets', '../public/images/TeamLogos-Edited/Roster-Size/rockets.svg'),
('Indiana Pacers', '../public/images/TeamLogos-Edited/Roster-Size/pacers.svg'),
('LA Clippers', '../public/images/TeamLogos-Edited/Roster-Size/clippers.svg'),
('Los Angeles Lakers', '../public/images/TeamLogos-Edited/Roster-Size/lakers.svg'),
('Memphis Grizzlies', '../public/images/TeamLogos-Edited/Roster-Size/grizzlies.svg'),
('Miami Heat', '../public/images/TeamLogos-Edited/Roster-Size/heat.svg'),
('Milwaukee Bucks', '../public/images/TeamLogos-Edited/Roster-Size/bucks.svg'),
('Minnesota Timberwolves', '../public/images/TeamLogos-Edited/Roster-Size/wolves.svg'),
('New Orleans Pelicans', '../public/images/TeamLogos-Edited/Roster-Size/pelicans.svg'),
('New York Knicks', '../public/images/TeamLogos-Edited/Roster-Size/knicks.svg'),
('Oklahoma City Thunder', '../public/images/TeamLogos-Edited/Roster-Size/thunder.svg'),
('Orlando Magic', '../public/images/TeamLogos-Edited/Roster-Size/magic.svg'),
('Philadelphia 76ers', '../public/images/TeamLogos-Edited/Roster-Size/sixers.svg'),
('Phoenix Suns', '../public/images/TeamLogos-Edited/Roster-Size/suns.svg'),
('Portland Trail Blazers', '../public/images/TeamLogos-Edited/Roster-Size/trailblazers.svg'),
('Sacramento Kings', '../public/images/TeamLogos-Edited/Roster-Size/kings.svg'),
('San Antonio Spurs', '../public/images/TeamLogos-Edited/Roster-Size/spurs.svg'),
('Toronto Raptors', '../public/images/TeamLogos-Edited/Roster-Size/raptors.svg'),
('Utah Jazz', '../public/images/TeamLogos-Edited/Roster-Size/jazz.svg'),
('Washington Wizards', '../public/images/TeamLogos-Edited/Roster-Size/wizards.svg');


-- players
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    teamId INTEGER REFERENCES teams(id),
    name VARCHAR(255),
    headImg text,
    restImg text,
    winImg text,
    loseImg text
);

INSERT INTO players(teamId, name, headImg, restImg, winImg, loseImg) VALUES
(1, 'Carmelo', 'a','a','a','a');
