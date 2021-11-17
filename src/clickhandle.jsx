import { SendData } from "./msearch";
import SSearch from "./ssearch";

function handle(props) {
  var name=props.name;
  return(
  <SSearch name={name}/>);
}

export default handle;
