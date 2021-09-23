DROP TABLE IF EXISTS npcs; 
 
CREATE TABLE npcs ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    firstname VARCHAR(20), 
    lastname VARCHAR(20),
    age INT,
    race VARCHAR(20),
    class VARCHAR(20),
    gender VARCHAR(20),
    residence VARCHAR(20),
    description VARCHAR(200),
    notes VARCHAR(200)
); 


INSERT INTO npcs (firstname, lastname, age, race, class, gender, residence, description, notes)  
    VALUES (
        'Percy', 
        'Jackson',
        '21',
        'half-orc',
        'paladin',
        'male',
        'Vassleheim',
        'A driven, young man, born of bread-makers. Works for the city guard, and is honest to fault.',
        'Irish accent, secretly in love with boss, barely knows how to read.'); 

INSERT INTO npcs (firstname, lastname, age, race, class, gender, residence, description, notes)  
    VALUES (
        "Baru",
        "Cormorant",
        32,
        "air genasi",
        "warlock",
        "other",
        "Neverwinter",
        "Ruthless and stoic, has a toxic dependancy to their patron. Antagonistic, combative and dangerous.",
        "They work for the thief guild, is trying to keep an eye on the players. Slight french accent."
    }