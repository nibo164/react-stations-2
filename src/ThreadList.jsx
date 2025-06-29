import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ThreadList = () => {
  const [ThreadList, setThreadList] = useState([]);
  const [Offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads?offset=" + Offset
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Thread list fetch success:", data);
        setThreadList(data);
      })
      .catch((error) => {
        console.error("Error fetching thread list:", error);
      });
  }, [Offset]);
  return (
    <div class="w-3/5 h-full mx-auto my-4">
      <h2 class="text-2xl font-semibold">スレッド一覧</h2>
      <ul class="w-full">
        {ThreadList.map((thread) => (
          <li
            key={thread.id}
            class="bg-white p-2 m-2 rounded-lg shadow-md border-1 border-stone-500 hover:shadow-lg hover:border-1 hover:border-orange-500"
          >
            {/*stateを利用してThreadコンポーネントへtitleを渡す*/}
            <Link
              to={"/threads/" + thread.id}
              state={{ title: thread.title }}
              class="block"
            >
              {thread.title}
            </Link>
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
        {ThreadList.length == 10 ? (
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
    </div>
  );
};

export default ThreadList;
