import { Link } from "react-router-dom";

const MakeThreadMenu = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: formData.get("title") }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Thread make success:", data);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error maiking thread:", error);
      });
  };

  return (
    <>
      <h2>スレッド新規作成</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="スレッドタイトル" />
        <button type="submit">作成</button>
      </form>
      <Link to="/">
        <button>Topに戻る</button>
      </Link>
    </>
  );
};

export default MakeThreadMenu;
