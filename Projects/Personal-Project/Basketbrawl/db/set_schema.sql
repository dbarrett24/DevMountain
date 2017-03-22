DROP TABLE IF EXISTS teams, players;

-- teams
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    logo text
);

INSERT INTO teams(name, logo)
VALUES
('Denver Nuggets', 'logo');


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
