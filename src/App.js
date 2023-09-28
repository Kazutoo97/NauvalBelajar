import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarTest from "./components/NavbarTest";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
        <NavbarTest />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
