var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET folders listing. */
router.get('/', function(req, res, next) {
    res.send('FOLDERS');
});

function getFolders(req, res) {
    db(`SELECT * FROM folders ORDER BY id ASC;`)
    .then(results => {
        res.send(results.data)
    })
    .catch(err => res.status(500).send({ error: err.message }))
}

router.get("/mvp", (req, res) => {
    getFolders(req, res);
})

router.get("/mvp/:id", (req, res) => {
db(`SELECT * FROM folders WHERE id = ${req.params.id}`)
    .then(results => {
    res.send(results.data);
    })
    .catch(err => res.status(500).send({ error: err.message }));
})

router.post("/mvp", async (req, res) => {
    await db(`INSERT INTO folders (folder, image, game_id) VALUES ('${req.body.folder}', '${req.body.image}', '${req.body.game_id}')`);
    getFolders(req, res);
})

router.put("/mvp/:id", async (req, res) => {
    await db(`UPDATE folders SET folder = '${req.body.folder}' WHERE id = ${req.params.id}`);
    getFolders(req, res);
})

router.delete("/mvp/:id", async (req, res) => {
    await db(`DELETE FROM folders WHERE id = ${req.params.id}`);
    getFolders(req, res);
})

module.exports = router;