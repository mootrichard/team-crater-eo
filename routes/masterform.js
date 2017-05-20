var express = require('express');
var router = express.Router();

router.post("/", (req, res, next)=>{
  res.json(req.body)
});

router.get("/", (req, res, next)=>{
  res.redirect("/");
})

module.exports = router;
