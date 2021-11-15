import Data from "./samplejson.json";
import { useEffect, useState } from "react";

function Search({ mval, setSol }) {
  const [list, setList] = useState();
  const [searchTerm, setSearchterm] = useState("");

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
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchterm(event.target.value);
        }}
      />
      {list &&
        Object.entries(list).map(([name, val]) => {
          return (
            <div>
              {{ val }
                .filter((value) => {
                  if (searchTerm == "") {
                    return value;
                  } else if (
                    value.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((value, key) => {
                  return (
                    <div className="data" key={key}>
                      <p>{value}</p>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
}

export default Search;
