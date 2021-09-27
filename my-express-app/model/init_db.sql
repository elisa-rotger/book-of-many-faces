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
    notes VARCHAR(200),
    image VARCHAR(200)
); 


INSERT INTO npcs (firstname, lastname, age, race, class, gender, residence, description, notes, image)  
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
        "https://i.pinimg.com/originals/78/d5/68/78d56837c65dd199791a76dc0a5a6558.jpg"); 

INSERT INTO npcs (firstname, lastname, age, race, class, gender, residence, description, notes, image)  
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
        "https://i.pinimg.com/originals/ed/2a/63/ed2a63727bf63da1b4c6d2449282e9ac.png");
    