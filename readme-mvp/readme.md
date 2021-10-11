# NPC index

## Home page

The user should be able to create a campaign where they will create and add custom NPCs.

There should be buttons to access campaigns created and a form to a new campaign.
Adding a new campaign should create a new table in the database, the name of the table should be the input from the form.

Each game button should also have the EDIT and DELETE options.

## Game

The default campaign page should be like a portfolio grid showing the images and names of previously created characters for that game.

At the top, there should be a button that toggles the showing of the form, on top of the first images of the grid, with the inputs necessary to create a new NPC.

Over the portfolio, there should be a search bar (filters by name) and a create new folder function.

When clicking on an NPC, it should show & toggle their full information on a popup window. In this window, there should be an EDIT button/function.

On every image, there should be various buttons for each npc: 
- DELETE: remove that npc from database
- FAVOURITE: marks that npc visually and moves it at the top of the page
- KILL: marks that npc as dead (cross, red overlay, etc)
- MOVE TO: move that npc to created folders

### Information on NPCs

Every NPC should have the following information:

- Image
- First name, last name
- Age
- Race
- Class
- Gender
- Residence
- Description
- Notes

### Calls to API needed

- GET: both (npcs, games and folders) general & by ID
- POST: adding NPC to npcs table, adding GAME to games table, adding FOLDER to folders table
- DELETE: deleting an NPC by ID, deleting GAME by ID (also cascading and deleting NPCS and FOLDERS with their gameID), deleting FOLDER by ID (cascading and deleting the NPCS with their folderID)
- PUT: edit NPC by ID, edit GAME by ID, edit FOLDER by ID

### TODO features

Favourite and kill buttons. Edit the name of the created games, edit the name of the folders. Delete a folder. Filter system on portfolio.

Creation of handouts:

An export system? to generate a downloadable image (jpg, png) of a particular NPC. Ideally, the user should be able to choose the information they want to generate on the image.

Honestly, this is a wild thing I have no idea how or if it can be done. No pressure.
