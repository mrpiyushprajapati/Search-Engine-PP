import React, { useState } from "react";
import Header from "./header";
import MSearch from "./msearch";
import SSearch from "./ssearch";
import Dc from "./dc";

function App() {
  const [val, setVal] = useState();
  const [dcobj, setDcobj] = useState();

  return (
    <div>
      <Header />
      <div className="obj">
        <h1 className="heading">M Objects</h1>
        <MSearch val={val} setVal={setVal} />
      </div>
      <div className="obj">
        <h1 className="heading">S Objects</h1>
        <SSearch mval={val} setDcobj={setDcobj} />
      </div>
      <div className="obj">
        <h1 className="heading">Deployment Cluster</h1>
        <Dc val={dcobj} />
      </div>
    </div>
  );
}

export default App;
