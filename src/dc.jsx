import { useState } from "react";

function Dc({ val }) {
  // const [value, setValue] = useState([]);

  // let arr = [];
  // value.push(val);
  // value.map((x) => {
  //   arr.push(<p>{x}</p>);
  // });

  // return (
  //   <div className="data">
  //     <p>{arr}</p>
  //   </div>
  // );

  // setValue((prevVal) => {
  //   return {
  //     ...prevVal,
  //     val,
  //   };
  // });

  return (
    <div className="data">
      <p>{val}</p>
    </div>
  );
}

export default Dc;
