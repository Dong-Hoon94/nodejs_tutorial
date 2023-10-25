const express = require('express');
const router = express.Router();

router.get('/',(res,req)=> {
  res.send('<p>안녕<p>')
})


module.exports = router;