import * as Yup from "yup";

import { FormContainer, FormField } from "./form";
import { InputGroup, Modal } from "react-bootstrap";
import firebase, { firestore } from "../service/firebase.utils";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "./Avatar";
import { BsLink45Deg } from "react-icons/bs";
import Button from "./CustomButtons";
import FormInputGroup from "./form/FormInputGroup";
import { StyledModal } from "../styles/Modal.styles";
import { toast } from "react-toastify";
import { updatePosts } from "../store/postSlice";
import { userSelector } from "../store/auth";

const initialValues = {
  question: "",
  link: "",
};

const validationSchema = Yup.object().shape({
  question: Yup.string().required("Question must be added"),
  link: Yup.string().notRequired(),
});

const QuestionModal = ({ title, show, onHide }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const handleQuestion = async ({ question, link }) => {
    onHide();

    try {
      const docRef = await firestore.collection("questions").add({
        user,
        question,
        imageURL: link,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), //Add Timestamp after question posted to firebase
      });
      const result = await docRef.get();
      dispatch(
        updatePosts({
          id: docRef.id,
          question: result.data(),
        })
      );
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
  return (
    <StyledModal centered size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Avatar src={user.photo} size="4rem" />
        <span>{user.email}</span>
        <FormContainer
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleQuestion}
        >
          <FormField
            autoComplete="off"
            placeholder="Add Question"
            name="question"
          />
          <FormInputGroup
            autoComplete="off"
            name="link"
            placeholder="Optionally add Link that gives context"
            prepend={<BsLink45Deg size="25px" />}
          />
          <div className="mt-5 pt-3 border-top text-right">
            <Button type="submit" answerButton>
              Add Question
            </Button>
          </div>
        </FormContainer>
      </Modal.Body>
    </StyledModal>
  );
};

export default QuestionModal;
