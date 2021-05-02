import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import Post from "./Post";
import { firestore } from "../service/firebase.utils";
import { addPosts, postSelector, loaderSelector } from "../store/postSlice";

const Feeds = () => {
  const posts = useSelector(postSelector);
  const loader = useSelector(loaderSelector);
  const dispatch = useDispatch();
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    firestore
      .collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((reference) => {
        dispatch(
          addPosts({
            posts: reference.docs.map((doc) => ({
              id: doc.id,
              question: doc.data(),
            })),
          })
        );
      });
  }, []);

  return (
    <>
      {loader ? (
        <div className="text-center">
          <Spinner animation="grow" />
        </div>
      ) : (
        posts.map(({ id, question }) => (
          <animated.div key={id} style={fade}>
            <Post
              id={id}
              image={question.imageURL}
              question={question.question}
              timestamp={question.timestamp}
              user={question.user}
            />
          </animated.div>
        ))
      )}
    </>
  );
};

export default Feeds;
