var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.put(`/mvp/:id`, async (req, res) => {
  await db(`UPDATE npcs SET folder_id = '${req.body.folder_id}' WHERE id = ${req.params.id}`);
  db("SELECT * FROM npcs ORDER BY id ASC")
  .then(results => {
    res.send(results.data)
  })
  .catch(err => res.status(500).send({ error: err.message }))
})

module.exports = router;