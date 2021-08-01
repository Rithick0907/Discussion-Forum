import { addPosts, postSelector } from "../store/postSlice";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "./Post";
import { Spinner } from "react-bootstrap";
import { firestore } from "../service/firebase.utils";

const Feeds = () => {
  const [lastDocs, setLastDocs] = useState(null);
  const posts = useSelector(postSelector);
  const dispatch = useDispatch();
  const loaderRef = useRef(null);
  const [isCompleted, setCompleted] = useState(false);
  const query = useMemo(
    () =>
      firestore.collection("questions").orderBy("timestamp", "desc").limit(2),
    []
  );

  const updatePosts = useCallback(
    (collection) => {
      if (collection.size > 0) {
        const lastFetchedDocs = collection.docs[collection.docs.length - 1];
        dispatch(
          addPosts({
            posts: collection.docs.map((doc) => ({
              id: doc.id,
              question: doc.data(),
            })),
          })
        );
        setLastDocs(lastFetchedDocs);
      } else {
        setCompleted(true);
      }
    },
    [dispatch]
  );

  const fetchMore = useCallback(
    (lastDocs) => {
      query
        .startAfter(lastDocs)
        .get()
        .then((collection) => updatePosts(collection));
    },
    [updatePosts, query]
  );

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (lastDocs && target.isIntersecting) fetchMore(lastDocs);
    },
    [lastDocs, fetchMore]
  );

  useEffect(() => {
    const options = {
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const currentElement = loaderRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => observer.unobserve(currentElement);
  }, [handleObserver]);

  useEffect(() => {
    query.get().then((collection) => updatePosts(collection));
  }, [updatePosts, query]);

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
      {!isCompleted && (
        <div className="text-center">
          <Spinner ref={loaderRef} animation="grow" />
        </div>
      )}
    </>
  );
};

export default Feeds;
