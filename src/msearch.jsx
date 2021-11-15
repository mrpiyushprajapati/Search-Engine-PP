import Data from "./samplejson.json";
import { useState } from "react";
import SSearch from "./ssearch";
import Clickhandle from "./clickhandle";

function SendData(sObj) {
  <Clickhandle name={sObj} />;
}

function Search() {
  const [searchTerm, setSeacrhterm] = useState("");
  const [sObj, setSObj] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSeacrhterm(event.target.value);
        }}
      />
      {Data.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="data" key={key}>
            <p
              onClick={(event) => {
                setSObj(event.target.textContent);
              }}
            >
              {val.title}
            </p>
            <SSearch name={sObj} />
            {console.log(sObj)}
          </div>
        );
      })}
    </div>
  );
}

export default Search;
export { SendData };
