import { useState, useEffect } from "react";

const AjaxPage = () => {
  const [count, setCount] = useState(undefined);

  const ApiBaseUrl = "http://localhost:4000";

  // 状態が変わるたびに実行される
  useEffect(() => {
    // API サーバから count の値を取得する
    fetch(`${ApiBaseUrl}/count`)
      .then((response) => response.json())
      .then(({ count: value }) => setCount(value));
  }, []);

  // API サーバに POST して count を increment する
  const increment = () => {
    fetch(`${ApiBaseUrl}/count/increment`, { method: "POST" })
      .then((response) => response.json())
      .then(({ count: value }) => setCount(value));
  };

  // API サーバに POST して count を decrement する
  const decrement = () => {
    fetch(`${ApiBaseUrl}/count/decrement`, { method: "POST" })
      .then((response) => response.json())
      .then(({ count: value }) => setCount(value));
  };

  if (count === undefined) {
    return <p>よみこみちゅう…ちょっとまってね</p>;
  }

  return (
    <div>
      <h1>カウンター</h1>

      <div>
        <span>{count}</span>
      </div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <p>サーバで保持するカウントも変わる</p>
    </div>
  );
};

export default AjaxPage;
