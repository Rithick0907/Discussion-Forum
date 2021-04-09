import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

const PostStyles = styled.div`
  border-radius: 5px;
  border: 1px solid lightgray;
  color: gray;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    border: 1px solid gray;
  }

  .post__header {
    display: inline-block;
    padding: 15px 0 0 10px;
  }
  .post__body {
    font-weight: bold;
    margin-top: 10px;
  }
`;

const Post = () => (
  <PostStyles>
    <FaUserCircle size="2rem" />
    <h5 className="post__header">Username</h5>
    <p className="post__body">What is your Question?</p>
  </PostStyles>
);

export default Post;
