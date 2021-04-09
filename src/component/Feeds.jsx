import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Post from "./Post";

const FeedStyles = styled.div`
  .container {
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;

const Feeds = () => (
  <FeedStyles>
    <Container>
      <Post />
    </Container>
  </FeedStyles>
);

export default Feeds;
