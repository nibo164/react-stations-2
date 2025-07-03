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
    <div class="w-3/5 h-full mx-auto my-4">
      <h2 class="text-2xl font-semibold">スレッド新規作成</h2>
      <form onSubmit={handleSubmit} class="flex justify-center">
        <input
          type="text"
          name="title"
          placeholder="スレッドタイトル"
          class="bg-white rounded-lg p-2 m-2 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          class="text-lg text-white bg-orange-500 hover:bg-orange-600 p-2 m-2 rounded-lg"
        >
          作成
        </button>
      </form>
      <Link to="/">
        <button class="text-lg text-white bg-orange-500 hover:bg-orange-600 p-2 m-2 rounded-lg">
          Topに戻る
        </button>
      </Link>
    </div>
  );
};

export default MakeThreadMenu;
