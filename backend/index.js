const express = require('express');
const app = express();
const cors = require('cors');

const messagesRouter = require('./routes/messages');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

// routes
app.use('/api/messages', messagesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
