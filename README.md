# CodeOp MVP - Book of Many Faces

## Overview

This portfolio is designed so tabletop roleplaying fans can create, customize, keep and organize all the different secondary characters that they create for their games.

RPG home games can actually last for a very long time - I've been playing one for around 4 years. When they get to a point of being this long, the world you play in actually becomes extremely big and populated, and not only by your player characters.

In situations like this, it becomes exponentially difficult to keep track of all the voices in your head - and even for shorter, smaller games, this tool should help to keep a neat track of everything you need to know about them.

## Features

### Must have

* Ability to create games and access them
* Form to add new characters to a specific game
* Portfolio main page displaying all the characters
* Ability to edit and delete a character's information
* Search bar in portfolio to look for a specific character

### Should have

* Authentication
* Translation 
* Description of images

### Could have

* Ability to create folders inside of games and move characters inside them
* Export function to create an easy handout for your players
* Mark characters as favourites - move them to the top of the portfolio page
* Mark characters as dead
* TODO - Rewrite using React Router

## Pages

### Home page

Landing page. Display of created games and form to add new ones (if authentication were implemented - login page).

#### Features

* Header with logo and home button
* Display of created games
* Input form to add new ones
* Footer

### Portfolio page

Main page. Display of created characters in a grid like fashion. Clicking on them opens a pop up with their information and details.

#### Features

* Accordion with form to add new characters to the game - key details include:
  * Name, surname
  * City of residence
  * Age, race and gender
  * Description and GM notes
  * Profile picture (url)
* Display of character's profile pictures
* Pop up for each of them, detailing their information
* Edit form in the pop up
* Search bar to look for a specific character
* Add a new folder button - adds a placeholder folder with customisable name
* Ability to delete and move a character to a specific folder
* Ability to delete a folder and their characters in it (TBD)
* Ability to generate a handout of a specific character, excluding GM notes (TBD)

### Folder page

Same as the portfolio page, but with the specific characters you send to it.

* Display of characters, with added button to send them back to the portfolio
* Button to go back to main portfolio

## Wireframes TODO

## Database

### Games table

| Name | Data Type | Description |

| id (primary key) | INT | 001 |
| game | VARCHAR(50) | name of the game |

### Folders table

| Name | Data Type | Description |

| id (primary key) | INT | 001 |
| folder | VARCHAR(30) | name of the folder |
| image | VARCHAR(200) | url - default picture of a folder |
| game_id (foreign key) | INT | 001 |

### NPCs table

| Name | Data Type | Description |

| id (primary key) | INT | 001 |
| firstname | VARCHAR(20) | first name of the caracter |
| lastname | VARCHAR(20) | last name of the caracter |
| age | INT | age of the character (TBD - make it a text so "immortal" or "unknown" can be added)
| race | VARCHAR(20) | e.g. elf, goliath, faun, etc. |
| class | VARCHAR(20) | e.g. paladin, cleric, investigator, etc. |
| gender | VARCHAR(20) | selector - male, female, other |
| residence | VARCHAR(20) | where they live - city, country, unknown |
| description | VARCHAR(500) | phisical description and general attitude of character |
| notes | VARCHAR(500) | GM notes about the character - accent, thoughts on player characters, motivations, etc. |
| image | VARCHAR(500) | URL to set a profile picture (TBD - add a way to actually upload locally stored images) |
| game_id (foreign key) | INT | 001 |
| folder_id (foreign key) | INT | 001 |


## Routes

### Routes pointed to games table

* Get all
* Get all by user (TBD)
* Post
* Delete
* Put (TBD - edit name of the game)

### Routes pointed to npcs table

* Get all by game_id
* Get by id
* Post
* Delete
* Put (edit character information)
* Put (move to a folder - change folder_id)

### Routes pointed to folders table

* Get by game_id
* Post
* Put (customisable name)
* Delete (TBD)

## APIs and libraries

React Bootstrap + Bootstrap

TBD - React Router

## Installation

`npm install` and `yarn` should install everything needed

The command `npm install react-bootstrap bootstrap` should install the appropriate package in case of difficulties 
