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
        console.log(data);
        setThreadList(data);
      });
  }, [Offset]);
  return (
    <>
      <h2>スレッド一覧</h2>
      <ul>
        {ThreadList.map((thread) => (
          <li key={thread.id}>
            <p>
              {/*stateを利用してThreadコンポーネントへtitleを渡す*/}
              <Link
                to={"/threads/" + thread.id}
                state={{ title: thread.title }}
              >
                {thread.title}
              </Link>
            </p>
          </li>
        ))}
      </ul>

      {Offset > 0 ? (
        <button onClick={() => setOffset(Offset - 10)}>前の10件</button>
      ) : (
        <button disabled>前の10件</button>
      )}
      {ThreadList.length == 10 ? (
        <button onClick={() => setOffset(Offset + 10)}>次の10件</button>
      ) : (
        <button disabled>次の10件</button>
      )}
    </>
  );
};

export default ThreadList;
