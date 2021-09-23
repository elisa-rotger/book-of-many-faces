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


module.exports = router;
