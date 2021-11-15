import Data from "./samplejson.json";
import { SendData } from "./msearch";

function Search(props) {
  return (
    <div>
      {Data.filter((val) => {
        if (props.name == "") {
          return val;
        } else if (val.title.includes(props.name)) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="data" key={key}>
            <p>{val.title1.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
