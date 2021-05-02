import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import Avatar from "./Avatar";
import Button from "./CustomButtons";
import Modal from "./AnswerModal";
import { selectQuestionId, setQuestionInfo } from "../store/questionSlice";
import { firestore } from "../service/firebase.utils";
import { StyledCard } from "../styles/Post.styles";

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
    <StyledCard
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
      <Card.Body>
        <div className="post-question d-flex">
          <p className="d-inline-block">{question}</p>
          <Button onClick={handleShow} answerButton>
            Answer
          </Button>
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
                <span>
                  {answers.answer}
                  <br />
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
        <img src={image} alt="TCS image" />
      </Card.Body>
    </StyledCard>
  );
};

export default Post;
