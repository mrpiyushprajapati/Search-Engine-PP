import Data from "./samplejson.json";
import { SendData } from "./msearch";

function Searchhh(props) {
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
            <p>{val.title0.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Searchhh;
