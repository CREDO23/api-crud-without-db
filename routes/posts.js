const router = require("express").Router();
const postControllers = require("../controllers/posts");

router.get("/", postControllers.getPosts);

router.post("/", postControllers.addPost);

module.exports = router;
