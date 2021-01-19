import React from "react";
import "./Post.css";
const Post = ({ post: { url, title, description } }) => {
  return (
    <div className="post">
      <img src={url} alt="image" />
      <div className="body">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default Post;
