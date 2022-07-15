import React, { useState } from "react";
import ColorFullMessage from "./components/ColorFullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  // 顔の表示非表示
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // 顔の表示非表示
  const onClicFaceShowSwitch = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  return (
    <>
      <h1 style={{ color: "#ccc" }}>こんにちは。</h1>
      <ColorFullMessage color="blue">お元気ですか？</ColorFullMessage>
      <ColorFullMessage color="pink">元気です。</ColorFullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClicFaceShowSwitch}>オン/オフ</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ͡° ͜ʖ ͡°)</p>}
    </>
  );
};

export default App;
