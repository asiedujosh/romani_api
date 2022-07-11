const Home = async (req, res) => {
  try {
    res.status(201).send("Welcome to Rhemi Api");
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = Home;
