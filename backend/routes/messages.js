const router = require('express').Router();
const client = require('../client');

// get all messages
router.get('/', async (req, res) => {
  const response = await client.query(
    `
    SELECT * FROM messages;
    `
  );
  res.json(response.rows);
});

// sending a message
router.post('/', async (req, res) => {
  const { msg } = req.body;

  await client.query(
    `
    INSERT INTO messages (content)
    VALUES ($1);
  `,
    [msg]
  );
  res.status(201).send();
});

module.exports = router;
