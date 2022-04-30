import React from "react";

// const ColorfulMessage = (props) => {
//   console.log(props);
//   const contentStyle = {
//     color: props.color,
//     fontSize: "18px"
//   };
//   return <p style={contentStyle}>{props.children}</p>;
// };

//分割代入してみる
const ColorfulMessage = (props) => {
  // console.log('親のコンポーネント変更でも再レンダリング');
  const { color, children } = props; //分割代入
  // console.log(props);
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
