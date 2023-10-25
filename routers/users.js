const express = require('express');
const router = express.Router();
// /users/:id
const QUERY_KEY= 'age'
router.get('/',(req, res) =>{
  res.send('<p>안녕</p>');
})
// /users/:id
router.get('/:id',(req,res) => {
  const userdb = 
  [
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
  ]
  
  console.log(req.params.id)
  console.log(req.query[QUERY_KEY]) //?name=이동훈 => { name: '이동훈' }
  res.send(userdb)
})

module.exports= router;