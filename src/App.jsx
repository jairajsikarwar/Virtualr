import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Create from "./pages/Create";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
