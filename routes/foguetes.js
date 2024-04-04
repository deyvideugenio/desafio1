var express = require('express');
var router = express.Router();

/* GET foguetes listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource GET');
});

/* PUT foguetes listing. */
router.put('/', function(req, res, next) {
    res.send('respond with a resource PUT');
  });

  /* POST foguetes listing. */
router.post('/', function(req, res, next) {
    res.send('respond with a resource POST');
  });

  /* DELETE foguetes listing. */
router.delete('/', function(req, res, next) {
    res.send('respond with a resource DELETE');
  });
      
module.exports = router;
