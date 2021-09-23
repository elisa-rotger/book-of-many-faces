# NPC index

## Home page

The user should be able to create a campaign where they will create and add custom NPCs.

There should be buttons to access campaigns created and a form to a new campaign.
Adding a new campaign should create a new table in the database, the name of the table should be the input from the form.

## Game

The default campaign page should be like a portfolio grid showing the images and names of previously created characters for that game.

At the top, there should be a button that toggles the showing of the form, on top of the first images of the grid, with the inputs necessary to create a new NPC.

When clicking on an NPC, it should show & toggle their full information right below their line on the grid - like a featured img but with flexible display? god help me with css

### Information on NPCs

Every NPC should have the following information:

- Image
- First name, last name
- Age
- Race
- Gender
- City
- Description
- DM notes

### Calls to API needed

- GET: both general & by ID
- POST: adding new npcs to db
- DELETE: deleting an NPC by ID

### Optional features to add

An option to delete a whole campaign from the main menu.

A query to edit the information of a particular NPC

- PUT: maybe. edit information, also by ID

A sorting system, or filter, in the portfolio, either by name or city would be great.

Creation of handouts:

An export system? to generate a downloadable image (jpg, png) of a particular NPC. Ideally, the user should be able to choose the information they want to generate on the image.

Creating new folders inside of the portfolio of characters and the ability to drag or send npcs inside of it.