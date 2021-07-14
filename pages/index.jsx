import { useCallback, useState } from "react";

const IndexPage = () => {
  const [count, setCount] = useState(0);
  // count : カウントを保持する状態変数
  // setCount : count の値を変更する関数

  // 状態が変化したときに実行される処理
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);

  // JSXを返す
  return (
    <div>
      <h1>カウンター</h1>

      <div>
        <span>{count}</span>
      </div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <p>クライアント内だけでカウントが変わる</p>
    </div>
  );
};

export default IndexPage;
