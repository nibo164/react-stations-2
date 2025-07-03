import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import PostForm from "./PostForm";

const Thread = () => {
  const [PostList, setPostList] = useState({ threadId: "", posts: [] });
  const [Offset, setOffset] = useState(0);
  const { thread_id } = useParams(); // useParamsを使用してURLパラメータからthread_idを取得
  const location = useLocation(); // useLocationを使用して現在のlocationを取得
  const title = location.state?.title; // location.stateからtitleを取得

  const fetchPosts = () => {
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads/" +
        thread_id +
        "/posts?offset=" +
        Offset
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("posts fetch success", data);
        setPostList(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [Offset]);

  return (
    <div class="w-3/5 h-full mx-auto my-4">
      <h2 class="text-2xl font-semibold">{title}</h2>
      <ul class="w-full min-h-2/5 bg-white p-2 m-2 rounded-lg shadow-md border-1 border-stone-500">
        {PostList.posts.map((post) => (
          <li key={post.id}>
            <p>{post.post}</p>
          </li>
        ))}
      </ul>
      <div class="flex justify-between">
        {Offset > 0 ? (
          <button
            class="text-lg text-white bg-orange-500 hover:bg-orange-600 p-2 m-2 rounded-lg"
            onClick={() => setOffset(Offset - 10)}
          >
            前の10件
          </button>
        ) : (
          <button
            class="text-lg text-white bg-orange-200 p-2 m-2 rounded-lg"
            disabled
          >
            前の10件
          </button>
        )}
        {PostList.length == 10 ? (
          <button
            class="text-lg text-white bg-orange-500 hover:bg-orange-600 p-2 m-2 rounded-lg"
            onClick={() => setOffset(Offset + 10)}
          >
            次の10件
          </button>
        ) : (
          <button
            class="text-lg text-white bg-orange-200 p-2 m-2 rounded-lg"
            disabled
          >
            次の10件
          </button>
        )}
      </div>
      {/*新規投稿時の更新のため、propsでthread_id,fetchPostsを渡す*/}
      <PostForm thread_id={thread_id} fetchPosts={fetchPosts}></PostForm>
      <Link to="/">
        <button class="text-lg text-white bg-orange-500 hover:bg-orange-600 p-2 m-2 rounded-lg">
          Topに戻る
        </button>
      </Link>
    </div>
  );
};

export default Thread;
