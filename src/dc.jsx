import { useState } from "react";

function Dc({ val }) {
  const [value, setValue] = useState([]);

  return <p>{val}</p>;

  //   setValue((prevNotes) => {
  //     return [...prevNotes, val];
  //   });

  //   return <p>{value}</p>;
}

export default Dc;
