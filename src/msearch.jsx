import Data from "./samplejson.json";
import { useState } from "react";

function Search({ val, setVal }) {
  const [searchTerm, setSearchterm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchterm(event.target.value);
        }}
      />
      {Data.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div
            className="data"
            key={key}
            onClick={(event) => {
              setVal(val.id);
            }}
          >
            <p className="clickable">{val.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Search;