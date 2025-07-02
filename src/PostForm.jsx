const PostForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads/" +
        props.thread_id +
        "/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: formData.get("newPost") }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("New post post success:", data);
        props.fetchPosts();
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error posting new post:", error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newPost"
          placeholder="投稿しよう！"
          class="bg-white rounded-lg p-2 m-2 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          class="text-lg text-white bg-orange-500 hover:bg-orange-600 p-2 m-2 rounded-lg"
        >
          投稿
        </button>
      </form>
    </>
  );
};

export default PostForm;
