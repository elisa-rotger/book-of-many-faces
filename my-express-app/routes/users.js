var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello hello!');
});

//general helper function to make life easier
function getNPCs(req, res) {
  db(`SELECT * FROM npcs ORDER BY id ASC;`)
  .then(results => {
      res.send(results.data)
  })
  .catch(err => res.status(500).send({ error: err.message }))
}

router.get("/mvp", (req, res) => {
  getNPCs(req, res);
})

router.get("/mvp/:id", (req, res) => {
  db(`SELECT * FROM npcs WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send({ error: err.message }));
})

router.post("/mvp/", async (req, res) => {
  await db(`INSERT INTO npcs (
    firstname, 
    lastname, 
    age, 
    race, 
    class, 
    gender, 
    residence, 
    description, 
    notes,
    image,
    game_id
    )  
  VALUES (
    '${req.body.firstname}',
    '${req.body.lastname}',
    '${req.body.age}',
    '${req.body.race}',
    '${req.body.class}',
    '${req.body.gender}',
    '${req.body.residence}',
    '${req.body.description}',
    '${req.body.notes}',
    '${req.body.image}',
    '${req.body.game_id}'
  )`);
  getNPCs(req, res);
})

router.delete("/mvp/:id", async (req, res) => {
  await db(`DELETE FROM npcs WHERE id = ${req.params.id}`);
  getNPCs(req, res);
})

module.exports = router;
