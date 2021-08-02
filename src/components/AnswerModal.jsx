import * as Yup from "yup";

import { FormContainer, FormField } from "./form";
import firebase, { firestore } from "../service/firebase.utils";

import Button from "./CustomButtons";
import { Modal } from "react-bootstrap";
import { StyledModal } from "../styles/Modal.styles";
import { selectQuestionId } from "../store/questionSlice";
import { useSelector } from "react-redux";
import { userSelector } from "../store/auth";

const initialValues = {
  answer: "",
};

const validationSchema = Yup.object().shape({
  answer: Yup.string().required("Answer must be added"),
});

const AnswerModal = ({
  question,
  show,
  timestamp,
  user: questionedUser,
  onHide,
}) => {
  const user = useSelector(userSelector);
  const questionId = useSelector(selectQuestionId);

  const handleQuestion = ({ answer }) => {
    onHide();
    if (questionId) {
      firestore
        .collection("questions")
        .doc(questionId)
        .collection("answers")
        .add({
          questionId,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          answer,
          user,
        });
    }
  };

  return (
    <StyledModal centered size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton />
      <Modal.Body className="px-4">
        <div>
          <div>{question}</div>
          <small>
            asked by
            <span className="font-weight-bold">
              {` ${
                questionedUser.name ? questionedUser.name : questionedUser.email
              } `}
            </span>
            on
            <span className="font-weight-bold">
              {` ${new Date(timestamp?.toDate()).toLocaleString()}`}
            </span>
          </small>
        </div>
        <FormContainer
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleQuestion}
        >
          <FormField name="answer" placeholder="Enter Your Answer" />
          <div className="mt-5 pt-3 border-top text-right">
            <Button type="submit" answerButton>
              Add Answer
            </Button>
          </div>
        </FormContainer>
      </Modal.Body>
    </StyledModal>
  );
};

export default AnswerModal;
