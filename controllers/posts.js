const pool = require("../config/db");

const getPosts = (req, res) => {
  pool.query("SELECT * FROM posts", (err, resultat) => {
    if (err) console.log(err);

    res.status(200).json(resultat.rows);
  });
};

const addPost = (req, res) => {
  const { name, email, address } = req.body;
  pool.query(
    `INSERT INTO posts (name, email, address) VALUES ($1, $2, $3)`,
    [name, email, address],
    (err, result) => {
      if (err) console.log(err);
      res.status(200).json({
        message: "Post added successfully",
      });
    }
  );
};

module.exports = {
  getPosts,
  addPost,
};
