import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from "./CustomButtons";
import { StyledModal } from "./QuestionModal";
import { userSelector } from "../store/auth";

const AnswerModal = ({ title, show, onHide }) => {
  const user = useSelector(userSelector);

  const handleQuestion = (e) => {
    e.preventDefault();
    onHide();
  };
  return (
    <StyledModal centered size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton />
      <Modal.Body className="px-5">
        <div className="text-center">
          <div>{title}</div>
          <small>
            asked by
            <span className="font-weight-bold">{user.email} </span>
            on
            <span className="font-weight-bold">timestamp</span>
          </small>
        </div>
        <Form className="my-4">
          <Form.Control
            style={{ fontSize: "1.5rem" }}
            as="textarea"
            rows={10}
            placeholder="Enter Your Answer"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button answerButton onClick={handleQuestion}>
          Add Answer
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default AnswerModal;
