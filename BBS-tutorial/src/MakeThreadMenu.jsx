import { Link } from "react-router-dom";

const MakeThreadMenu = () => {
  const handleSubmit = (formData) => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: formData.get("title") }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h2>スレッド新規作成</h2>
      <form action={handleSubmit} method="post">
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
