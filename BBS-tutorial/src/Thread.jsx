import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const Thread = () => {
  const [PostList, setPostList] = useState({ threadId: "", posts: [] });
  const [Offset, setOffset] = useState(0);
  const { thread_id } = useParams(); // useParamsを使用してURLパラメータからthread_idを取得
  const location = useLocation(); // useLocationを使用して現在のlocationを取得
  const title = location.state?.title; // location.stateからtitleを取得

  useEffect(() => {
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads/" +
        thread_id +
        "/posts?offset=" +
        Offset
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostList(data);
      });
  }, [Offset]);

  return (
    <>
      <h2>{title}</h2>
      <ul>
        {PostList.posts.map((post) => (
          <li key={post.id}>
            <p>{post.post}</p>
          </li>
        ))}
      </ul>
      {Offset > 0 ? (
        <button onClick={() => setOffset(Offset - 10)}>前の10件</button>
      ) : (
        <button disabled>前の10件</button>
      )}
      {PostList.length == 10 ? (
        <button onClick={() => setOffset(Offset + 10)}>次の10件</button>
      ) : (
        <button disabled>次の10件</button>
      )}
      <Link to="/">
        <button>Topに戻る</button>
      </Link>
    </>
  );
};

export default Thread;
