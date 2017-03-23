DROP TABLE IF EXISTS teams, players;

-- teams
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    logo text
);

INSERT INTO teams(name, logo)
VALUES
('Atlanta Hawks', '../images/TeamLogos-Edited/Roster-Size/hawks.svg'),
('Boston Celtics', '../images/TeamLogos-Edited/Roster-Size/celtics.svg'),
('Brooklyn Nets', '../images/TeamLogos-Edited/Roster-Size/nets.svg'),
('Charlotte Hornets', '../images/TeamLogos-Edited/Roster-Size/hornets.svg'),
('Chicago Bulls', '../images/TeamLogos-Edited/Roster-Size/bulls.svg'),
('Cleveland Cavaliers', '../images/TeamLogos-Edited/Roster-Size/cavs.svg'),
('Dallas Mavericks', '../images/TeamLogos-Edited/Roster-Size/mavs.svg'),
('Denver Nuggets', '../images/TeamLogos-Edited/Roster-Size/nuggets.svg'),
('Detroit Pistons', '../images/TeamLogos-Edited/Roster-Size/pistons.svg'),
('Golden State Warriors', '../images/TeamLogos-Edited/Roster-Size/warriors.svg'),
('Houston Rockets', '../images/TeamLogos-Edited/Roster-Size/rockets.svg'),
('Indiana Pacers', '../images/TeamLogos-Edited/Roster-Size/pacers.svg'),
('LA Clippers', '../images/TeamLogos-Edited/Roster-Size/clippers.svg'),
('Los Angeles Lakers', '../images/TeamLogos-Edited/Roster-Size/lakers.svg'),
('Memphis Grizzlies', '../images/TeamLogos-Edited/Roster-Size/grizzlies.svg'),
('Miami Heat', '../images/TeamLogos-Edited/Roster-Size/heat.svg'),
('Milwaukee Bucks', '../images/TeamLogos-Edited/Roster-Size/bucks.svg'),
('Minnesota Timberwolves', '../images/TeamLogos-Edited/Roster-Size/wolves.svg'),
('New Orleans Pelicans', '../images/TeamLogos-Edited/Roster-Size/pelicans.svg'),
('New York Knicks', '../images/TeamLogos-Edited/Roster-Size/knicks.svg'),
('Oklahoma City Thunder', '../images/TeamLogos-Edited/Roster-Size/thunder.svg'),
('Orlando Magic', '../images/TeamLogos-Edited/Roster-Size/magic.svg'),
('Philadelphia 76ers', '../images/TeamLogos-Edited/Roster-Size/sixers.svg'),
('Phoenix Suns', '../images/TeamLogos-Edited/Roster-Size/suns.svg'),
('Portland Trail Blazers', '../images/TeamLogos-Edited/Roster-Size/trailblazers.svg'),
('Sacramento Kings', '../images/TeamLogos-Edited/Roster-Size/kings.svg'),
('San Antonio Spurs', '../images/TeamLogos-Edited/Roster-Size/spurs.svg'),
('Toronto Raptors', '../images/TeamLogos-Edited/Roster-Size/raptors.svg'),
('Utah Jazz', '../images/TeamLogos-Edited/Roster-Size/jazz.svg'),
('Washington Wizards', '../images/TeamLogos-Edited/Roster-Size/wizards.svg'),


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
