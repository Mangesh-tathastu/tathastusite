import React from "react";
import { Routes, Route } from "react-router-dom";

const Mainroutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route path="/" element={{}} />
        {/* <Route path="/news" element={<News />} /> */}
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
        <Route path="/" element={{}} />
      </Routes>
    </>
  );
};

export default Mainroutes;
