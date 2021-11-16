import React, { useState } from "react";
import Header from "./header";
import MSearch from "./msearch";
import SSearch from "./s";

function App() {
  const [val, setVal] = useState();
  const [sol, setSol] = useState();

  return (
    <div>
      <Header />
      <div className="obj">
        <h1 className="heading">M Objects</h1>
        <MSearch val={val} setVal={setVal} />
      </div>
      <div className="obj">
        <h1 className="heading">S Objects</h1>
        <SSearch mval={val} setSol={setSol} />
      </div>
    </div>
  );
}

export default App;
