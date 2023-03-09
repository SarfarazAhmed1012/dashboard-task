import React from "react";
import Services from "./Services";
import Navbar from "./Navbar";
import Left from "./Left";
import Cards from "./Cards";
import Footer from "./Footer";

const DashboardApp = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app__grid">
        <div className="app__grid__1">
          <Cards />
          <Services />
          <hr />
        </div>
        <div className="app__grid__2">
          <Left />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardApp;
