import React from "react";

import meet from "./meet.png";
import docs from "./docs.png";
import slides from "./slides.png";
import sheets from "./sheets.png";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://meet.new" target="_blank" rel="noreferrer">
          <img src={meet} alt="meet" />
        </a>
      </div>
      <div>
        <a href="https://sheets.new" target="_blank" rel="noreferrer">
          <img src={sheets} alt="sheets" />
        </a>
      </div>
      <div>
        <a href="https://docs.new" target="_blank" rel="noreferrer">
          <img src={docs} alt="docs" />
        </a>
      </div>
      <div>
        <a href="https://slides.new" target="_blank" rel="noreferrer">
          <img src={slides} alt="slides" />
        </a>
      </div>
    </div>
  );
}

export default App;
