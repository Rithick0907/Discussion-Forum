import { Form, InputGroup, Modal } from "react-bootstrap";
import firebase, { firestore } from "../service/firebase.utils";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "./Avatar";
import { BsLink45Deg } from "react-icons/bs";
import Button from "./CustomButtons";
import { StyledModal } from "../styles/Modal.styles";
import { toast } from "react-toastify";
import { updatePosts } from "../store/postSlice";
import { useState } from "react";
import { userSelector } from "../store/auth";

const QuestionModal = ({ title, show, onHide }) => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [link, setLink] = useState("");
  const user = useSelector(userSelector);

  const handleQuestion = async (e) => {
    e.preventDefault();
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

    setQuestion("");
    setLink("");
  };
  return (
    <StyledModal centered size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mb-5 px-4 py-5">
        <Avatar src={user.photo} size="4rem" />
        <span>{user.email}</span>
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
        <Button answerButton onClick={handleQuestion}>
          Add Question
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default QuestionModal;
