import React, { useState } from "react";
import ColorFullMessage from "./components/ColorFullMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "#ccc" }}>こんにちは。</h1>
      <ColorFullMessage color="blue">お元気ですか？</ColorFullMessage>
      <ColorFullMessage color="pink">元気です。</ColorFullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
