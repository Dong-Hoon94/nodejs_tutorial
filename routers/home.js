const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("<div>안녕하세요</div>");
});





module.exports = router;