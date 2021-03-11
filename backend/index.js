const express = require('express');
const app = express();
const cors = require('cors');

const messagesRouter = require('./routes/messages');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

// routes
app.use('/api/messages', messagesRouter);

// error handler
app.use((err, req, res, next) => {
  console.log('Error: ', err.message);

  switch (err.message) {
    default:
      res.status(400).send();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
