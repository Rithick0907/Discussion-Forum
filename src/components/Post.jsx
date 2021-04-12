import { Card } from "react-bootstrap";
import {
  MdAccountCircle,
  MdArrowUpward,
  MdArrowDownward,
  MdChatBubbleOutline,
  MdMoreHoriz,
  MdRepeat,
  MdShare,
} from "react-icons/md";
import styled from "styled-components";
import Button from "./CustomButtons";

const StyledCard = styled(Card)`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  color: gray;
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

  .card-footer {
    background-color: inherit;
    display: flex;
    justify-content: space-around;
  }

  .card-footer > svg {
    cursor: pointer;
  }
`;

const question = "What is this meant by store in Redux?";
const answer = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sint
          illum corporis iste et? Numquam consequuntur fuga pariatur accusantium
          culpa suscipit atque, odio autem eos.`;

const Post1 = () => (
  <StyledCard>
    <Card.Header>
      <MdAccountCircle size="3rem" />
      <h5 className="m-3">Username</h5>
      <small className="ml-auto m-2">Timestamp</small>
    </Card.Header>
    <Card.Body>
      <div className="post-question d-flex">
        <p className="d-inline-block">{question}</p>
        <Button answerButton>Answer</Button>
      </div>
      <div className="post-answer">
        <p>{answer}</p>
      </div>
      <img
        src="https://media.comicbook.com/2016/02/batman-v-superman-bvs-header-168595.png"
        alt="TCS image"
      />
    </Card.Body>
    <Card.Footer>
      <MdArrowUpward size="3rem" />
      <MdArrowDownward size="3rem" />
      <MdChatBubbleOutline size="3rem" />
      <MdMoreHoriz size="3rem" />
      <MdRepeat size="3rem" />
      <MdShare size="3rem" />
    </Card.Footer>
  </StyledCard>
);

export default Post1;
