import React from "react";
import Header from "./header";
import MSearch from "./msearch";
import SSearch from "./ssearch";
import Clickhandle from "./clickhandle";

function App() {
  return (
    <div>
      <Header />
      <div className="obj">
        <h1 className="heading">M Objects</h1>
        <MSearch />
      </div>
      <div className="obj">
        <h1 className="heading">S Objects</h1>
        <SSearch />
      </div>
    </div>
  );
}

export default App;
