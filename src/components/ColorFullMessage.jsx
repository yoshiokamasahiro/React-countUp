import React from "react";
const ColorFullMessage = (props) => {
  //分割代入にして、都度propsを記述しなくてよくする
  const { color, children } = props;
  const contentStyle = {
    //javascriptではオブジェクト名とプロパティ名が一緒の場合は、プロパティ名を省略できる
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorFullMessage;
