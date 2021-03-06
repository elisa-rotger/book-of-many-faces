var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET games listing. */
router.get('/', function(req, res, next) {
    res.send('GAMES');
});

function getGames(req, res) {
db(`SELECT * FROM games ORDER BY id ASC;`)
.then(results => {
    res.send(results.data)
})
.catch(err => res.status(500).send({ error: err.message }))
}

router.get("/mvp", (req, res) => {
getGames(req, res);
})

router.get("/mvp/:id", (req, res) => {
db(`SELECT * FROM games WHERE id = ${req.params.id}`)
    .then(results => {
    res.send(results.data);
    })
    .catch(err => res.status(500).send({ error: err.message }));
})

router.post("/mvp", async (req, res) => {
    await db(`INSERT INTO games (game) VALUES ('${req.body.game}')`);
    getGames(req, res);
})

router.delete("/mvp/:id", async (req, res) => {
await db(`DELETE FROM games WHERE id = ${req.params.id}`);
getGames(req, res);
})

router.put("/mvp/:id", async (req, res) => {
    await db(`UPDATE games SET 
    game = '${req.body.game}'
    WHERE id = ${req.params.id}`);
    getGames(req, res);
})

module.exports = router;