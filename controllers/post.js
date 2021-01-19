const Post = require("../models/post");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(404).send({ error });
  }
};
exports.createPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body });
    await post.save();
    return res.status(201).send({ msg: "post created!" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
exports.modifyPost = async (req, res) => {
  try {
    const { _id } = req.params;
    await Post.updateOne({ _id }, { $set: { ...req.body } });
    return res.status(200).send({ msg: "post updated!" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const { _id } = req.params;
    await Post.deleteOne({ _id });
    return res.status(200).send({ msg: "post deleted!" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
exports.getOnePost = async (req, res) => {
  try {
    const { _id } = req.params;
    let post = await Post.findOne({ _id });
    return res.status(200).send(post);
  } catch (error) {
    return res.status(404).send({ error });
  }
};
