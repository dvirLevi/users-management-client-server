const express = require('express');
const router = express.Router();
const postClass = require('../classes/postClass');

router.post('/', (req, res) => {
  try {
    let pass = req.body;
    let post = new postClass(pass);
    post.checkPassLogin(res);
  } catch (err) {
    res.status(400).send()
  }
})

module.exports = router;