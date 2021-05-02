import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
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

  .post__answer {
    margin: 10px 0;
    padding: 0 10px;
  }

  .post__answer span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .card-body > img {
    cursor: pointer;
    object-fit: contain;
    width: 100%;
  }
`;
