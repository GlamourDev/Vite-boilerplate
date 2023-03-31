import React, { lazy, Suspense } from "react";
import Titleblock from "./components/TitleBlock";

const App = () => {
  return (
    <div className="main">
      <Titleblock title="Hello, world!" />
    </div>
  );
};

export default App;
