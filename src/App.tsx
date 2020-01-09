import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
    </div>
  );
};

export default App;
