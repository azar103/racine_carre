import React from "react";
import Post from "./Post";
import "./PostList.css";

const PostList = ({ posts }) => {
  return (
    <div className="posts">
      <div className="container">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
