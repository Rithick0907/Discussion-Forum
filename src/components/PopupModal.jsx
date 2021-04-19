import { useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { BsLink45Deg } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import styled from "styled-components";
import Button from "../components/CustomButtons";

const StyledModal = styled(Modal)`
  font-size: 1.7rem;

  span {
    margin-left: 10px;
  }

  .modal-body {
    margin-bottom: 150px;
    padding: 10px 20px;
  }

  .form-control {
    border: 0;
    border-bottom: 1px solid gray;
    padding: 5px;
    height: 40px;
    font-weight: 200;
    font-size: 1.4rem;
    margin: 14px 0;
    transition: all 0.3s ease;
  }

  .form-control:active,
  .form-control:focus {
    box-shadow: none;
    outline: none;
  }

  button.close > span {
    font-size: 25px;
    margin-right: 10px;
  }

  span.input-group-text {
    background-color: white;
    border: 0;
    height: 40px;
    margin: 14px 0 0 0;
    padding: 5px;
  }
`;

const PopupModel = ({ title, show, onHide }) => {
  const [question, setQuestion] = useState("");
  const [link, setLink] = useState("");

  return (
    <StyledModal centered size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MdAccountCircle size="3rem" />
        <span>email id</span>
        <Form>
          <Form.Control
            autoComplete="off"
            onChange={(e) => setQuestion(e.currentTarget.value)}
            placeholder="Add Question"
            type="text"
            value={question}
          />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <BsLink45Deg size="25px" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              autoComplete="off"
              className="border-0"
              onChange={(e) => setLink(e.currentTarget.value)}
              placeholder="Optionally add Link that gives context"
              type="url"
              value={link}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button answerButton onClick={onHide}>
          Add Question
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default PopupModel;
