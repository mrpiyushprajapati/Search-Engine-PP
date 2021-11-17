import Data from "./samplejson.json";
import { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function Search({ mval, setDcobj }) {
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
        Object.entries(list)
          .filter((val) => {
            {
              /* console.log(val); */
            }
            if (searchTerm === "") {
              return val;
            } else if (
              val[1].toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map(([name, val]) => {
            return (
              <div className="data">
                <p>
                  {val}{" "}
                  <button
                    onClick={() => {
                      setDcobj(val);
                    }}
                  >
                    <AddIcon />
                  </button>
                </p>
              </div>
            );
          })}
    </div>
  );
}

export default Search;