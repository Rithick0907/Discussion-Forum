import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase, { firestore } from "../service/firebase.utils";
import { userSelector } from "../store/auth";
import { selectQuestionId, selectQuestionName } from "../store/questionSlice";
import Button from "./CustomButtons";
import { StyledModal } from "./QuestionModal";

const AnswerModal = ({
  question,
  show,
  timestamp,
  user: questionedUser,
  onHide,
}) => {
  const [answer, setAnswer] = useState("");
  const user = useSelector(userSelector);
  const questionId = useSelector(selectQuestionId);

  const handleQuestion = (e) => {
    e.preventDefault();
    onHide();
    if (questionId) {
      firestore
        .collection("questions")
        .doc(questionId)
        .collection("answers")
        .add({
          questionId: questionId,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          answer: answer,
          user: user,
        });
    }
  };

  return (
    <StyledModal centered size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton />
      <Modal.Body className="px-5">
        <div>
          <div>{question}</div>
          <small>
            asked by
            <span className="font-weight-bold">
              {`${
                questionedUser.name ? questionedUser.name : questionedUser.email
              } `}
            </span>
            on
            <span className="font-weight-bold">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </span>
          </small>
        </div>
        <Form className="my-4">
          <Form.Control
            style={{ fontSize: "1.5rem" }}
            as="textarea"
            rows={10}
            placeholder="Enter Your Answer"
            value={answer}
            onChange={({ currentTarget }) => setAnswer(currentTarget.value)}
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
