import React from "react";
import "./Home.css";
import frida from "../images/frida.jpg";
import PostList from "./PostList";
import posts from "../Helpers/posts";

const Home = () => {
  const style = {
    backgroundImage: `url(${frida})`,
  };
  return (
    <div className="home_wrapper">
      <div className="container" style={style}>
        <div className="img_title">
          <h2>My Good Spring Days</h2>
          <p>
            It is a paradisematic country, in which roasted parts of sentences.
          </p>
        </div>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
