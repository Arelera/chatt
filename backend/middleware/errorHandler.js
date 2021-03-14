module.exports = (err, req, res, next) => {
  console.log('Error: ', err.message);

  switch (err.message) {
    default:
      res.status(400).send();
  }
};
