DROP TABLE IF EXISTS npcs; 
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS folders;

CREATE TABLE games (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    game VARCHAR(50)
);

CREATE TABLE folders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    folder VARCHAR(30),
    image VARCHAR(200)
);
 
CREATE TABLE npcs ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    firstname VARCHAR(20), 
    lastname VARCHAR(20),
    age INT,
    race VARCHAR(20),
    class VARCHAR(20),
    gender VARCHAR(20),
    residence VARCHAR(20),
    description VARCHAR(500),
    notes VARCHAR(500),
    image VARCHAR(200),
    game_id INT NOT NULL,
    folder_id INT,
    FOREIGN KEY (game_id) references games(id) ON DELETE CASCADE,
    FOREIGN KEY (folder_id) references folders(id) ON DELETE CASCADE
); 

INSERT INTO games (game) VALUES ('Tanaia');
INSERT INTO games (game) VALUES ('Wrath of the righteous');

INSERT INTO folders (folder, image) VALUES (
    "default",
    "https://www.lovethispic.com/uploaded_images/95268-Please-Lord.jpg"
);

INSERT INTO npcs (firstname, lastname, age, race, class, gender, residence, description, notes, image, game_ID, folder_id)  
    VALUES (
        'Percy', 
        'Jackson',
        '21',
        'half-orc',
        'paladin',
        'male',
        'Vassleheim',
        'A driven, young man, born of bread-makers. Works for the city guard, and is honest to fault.',
        'Irish accent, secretly in love with boss, barely knows how to read.',
        "https://i.pinimg.com/originals/78/d5/68/78d56837c65dd199791a76dc0a5a6558.jpg",
        '1',
        '1');

INSERT INTO npcs (firstname, lastname, age, race, class, gender, residence, description, notes, image, game_ID, folder_id)  
    VALUES (
        "Baru",
        "Cormorant",
        "32",
        "air genasi",
        "warlock",
        "other",
        "Neverwinter",
        "Ruthless and stoic, has a toxic dependancy to their patron. Antagonistic, combative and dangerous.",
        "They work for the thief guild, is trying to keep an eye on the players. Slight french accent.",
        "https://i.pinimg.com/originals/ed/2a/63/ed2a63727bf63da1b4c6d2449282e9ac.png",
        '1',
        '1');

        INSERT INTO npcs (firstname, lastname, age, race, class, gender, residence, description, notes, image, game_ID, folder_id)  
    VALUES (
        "Victoria",
        "Valantine",
        "19",
        "faunus",
        "dervish dancer",
        "female",
        "Beacon",
        "Vivi is calm, cool and colected. Elegant and sarcastic, wants to leave the world better thank she found it. She wears a suit with a purple vest, has a long braid of blondish hair with both sides shaved, and has blue eyes.",
        "She is always angry. At the injust world, her too permissive superiors and ignorant peers, even herself most of the time.",
        "https://i.pinimg.com/originals/6b/eb/98/6beb9842c40c7f61090696da96afb7ac.png",
        '2',
        '1');