import React from "react";
import "./App.scss";

// Component import
import { Navigation } from "./Navigation/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
};

export default App;
