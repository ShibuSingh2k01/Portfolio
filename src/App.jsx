import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/1_Home/Home";
import Project from "./pages/3_Projects/Project";
import NotFound from "./pages/NotFound";
import Qualifications from "./pages/2_Qualifications/Qualifications";
import Contact from "./pages/4_ContactMe/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
