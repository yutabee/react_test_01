import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // console.log("state変更"); //stateが変更された場合再レンダリングされる
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true); //この設定をしておかないと無限に再レンダリングされるためエラーになる
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]); //useEffectの第二引数に空の配列を引き渡すと最初の一回だけ実行する処理を作れる
  //これが関心の分離でnumを入れるとnumのstateが変わった時だけ実行することができる

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>٩( ᐛ )و</p>}
      {/* 左の条件がtrueの時に右が実行される */}
    </React.Fragment>
  );
};

export default App;
