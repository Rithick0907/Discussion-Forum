import { selectQuestionId, setQuestionInfo } from "../store/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Avatar from "./Avatar";
import Button from "./CustomButtons";
import { Card } from "react-bootstrap";
import Modal from "./AnswerModal";
import { firestore } from "../service/firebase.utils";

const Post = ({ id: Id, question, image, timestamp, user }) => {
  let profilePhoto = user.photo ? user.photo : "";
  let profileName = user.name ? user.name : user.email;
  const [show, setShow] = useState(false);
  const [getAnswers, setGetAnswers] = useState([]);
  const questionId = useSelector(selectQuestionId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (questionId) {
      firestore
        .collection("questions")
        .doc(questionId)
        .collection("answers")
        .orderBy("timestamp", "desc")
        .onSnapshot((reference) =>
          setGetAnswers(
            reference.docs.map((doc) => ({
              id: doc.id,
              answers: doc.data(),
            }))
          )
        );
    }
  }, [questionId]);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <Card
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: question,
          })
        )
      }
    >
      <Card.Header>
        <Avatar src={profilePhoto} size="3rem" />
        <h5 className="m-3">{profileName}</h5>
        <small className="mt-3">
          {new Date(timestamp?.toDate()).toLocaleString()}
        </small>
      </Card.Header>
      <Card.Body className="post">
        <div className="post__question d-flex">
          <p className="post__question__content">{question}</p>
          <Button onClick={handleShow} title="Answer" answerButton />
          <Modal
            question={question}
            user={user}
            timestamp={timestamp}
            show={show}
            onHide={handleClose}
          />
        </div>
        <div className="post__answer">
          {getAnswers.map(({ id, answers }) => (
            <p id={id}>
              {Id === answers.questionId ? (
                <span className="d-flex justify-content-between">
                  {answers.answer}
                  <span>
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.email} on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
        {image ? <img className="card__image" src={image} alt="" /> : null}
      </Card.Body>
    </Card>
  );
};

export default Post;
