import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../potafolio/Home";
import About from "../potafolio/About";
import IDo from "../potafolio/IDo";
import Portfolio from "../potafolio/Portfolio";
import Contact from "../potafolio/Contact";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="what-i-do" element={<IDo/>} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact-me" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
