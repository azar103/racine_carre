const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");

router.get("/", postCtrl.getAllPosts);
router.post("/", postCtrl.createPost);
router.put("/:_id", postCtrl.modifyPost);
router.delete("/:_id", postCtrl.deletePost);
router.get("/:_id", postCtrl.getOnePost);

module.exports = router;
