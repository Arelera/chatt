const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Heyo');
});

module.exports = router;
