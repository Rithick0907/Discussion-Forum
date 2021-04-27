import { useEffect, useState } from "react";
import Post from "./Post";
import { firestore } from "../service/firebase.utils";

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firestore
      .collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((reference) =>
        setPosts(
          reference.docs.map((doc) => ({
            id: doc.id,
            question: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <>
      {posts.map(({ id, question }) => (
        <Post
          key={id}
          id={id}
          image={question.imageURL}
          question={question.question}
          timestamp={question.timestamp}
          user={question.user}
        />
      ))}
    </>
  );
};

export default Feeds;
