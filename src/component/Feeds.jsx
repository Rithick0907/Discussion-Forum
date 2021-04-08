import React from "react";
import { Container } from "react-bootstrap";
import Post from "./Post";
import "../css/Feeds.css";

const Feeds = () => (
  <Container className="feeds">
    <Post />
  </Container>
);

export default Feeds;
