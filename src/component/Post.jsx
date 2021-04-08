import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../css/Post.css";

const Post = () => (
  <div className="post">
    <FaUserCircle size="2rem" />
    <h5 className="post__header">Username</h5>
    <p className="post__body">What is your Question?</p>
  </div>
);

export default Post;
