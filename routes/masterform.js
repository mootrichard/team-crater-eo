var express = require('express');
var router = express.Router();

router.post("/", (req, res, next)=>{
  res.json(req.body)
});

module.exports = router;
