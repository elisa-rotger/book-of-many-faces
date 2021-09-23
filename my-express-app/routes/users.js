var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello hello!');
});

router.get("/mvp", (req, res) => {
    db(`SELECT * FROM npcs ORDER BY id ASC;`)
        .then(results => {
            res.send(results.data)
        })
        .catch(err => res.status(500).send({ error: err.message }))
})



module.exports = router;
