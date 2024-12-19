import PostModel from '../models/Post.js';

export const getLastTags = async (req, res) => {
  try {
    const posts = await PostModel.find().limit(5).exec();
    const tags = posts.map((post) => post.tags)

    res.json(Array.from(new Set(tags.flat())));

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to get tags"
    });
  };
}

export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find().populate("user").exec();

    res.json(posts);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to get posts"
    });
  };
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findByIdAndUpdate(
      { _id: postId },
      { $inc: { viewsCount: 1 } },
      { returnDocument: "after" })
      .then(doc => res.json(doc))
      .catch(error => res.status(500).json({ message: "can't find post" }))

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to get post"
    });
  };
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findByIdAndDelete(
      { _id: postId })
      .then(doc => res.json({ success: true }))
      .catch(error => res.status(500).json({ message: "can't delete post" }));

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to delete post"
    });
  };
};

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: (req.body.tags).split(","),
      user: req.userId
    });
    const post = await doc.save();

    res.json(post);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to create post"
    });
  };
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      { _id: postId },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags,
        user: req.userId
      }
    );

    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to update post"
    });
  };
};