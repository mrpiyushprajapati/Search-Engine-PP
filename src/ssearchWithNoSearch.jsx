import Data from "./samplejson.json";
import { useEffect, useState } from "react";

function Search({ mval, setSol }) {
  const [list, setList] = useState();

  useEffect(() => {
    if (!mval) {
      setList(null);
      return;
    }
    setList(
      Data.find((_val) => {
        return _val.id === mval;
      })?.title1
    );
  }, [mval]);
  return (
    <div>
      {list &&
        Object.entries(list).map(([name, val]) => {
          return (
            <div className="data" key={name}>
              <p>{val}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Search;
