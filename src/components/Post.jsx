import { useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Avatar from "./Avatar";
import Button from "./CustomButtons";
import Modal from "./AnswerModal";

const StyledCard = styled(Card)`
  background-color: var(--bg-color-secondary);
  border-radius: 5px;
  color: var(--font-color);
  margin-bottom: 20px;

  & > .card-header {
    background-color: inherit;
    display: flex;
    font-weight: bold;
  }

  .post-question > p:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .card-body > img {
    cursor: pointer;
    object-fit: contain;
    width: 100%;
  }
`;

const answer = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sint
          illum corporis iste et? Numquam consequuntur fuga pariatur accusantium
          culpa suscipit atque, odio autem eos.`;

const Post = ({ id, question, image, timestamp, user }) => {
  let profilePhoto = user.photo ? user.photo : "";
  let profileName = user.name ? user.name : user.email;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <StyledCard>
      <Card.Header>
        <Avatar src={profilePhoto} size="3rem" />
        <h5 className="m-3">{profileName}</h5>
        <small className="mt-3">
          {new Date(timestamp?.toDate()).toLocaleString()}
        </small>
      </Card.Header>
      <Card.Body>
        <div className="post-question d-flex">
          <p className="d-inline-block">{question}</p>
          <Button onClick={handleShow} answerButton>
            Answer
          </Button>
          <Modal show={show} title="Question" onHide={handleClose} />
        </div>

        <img src={image} alt="TCS image" />
      </Card.Body>
    </StyledCard>
  );
};

export default Post;
