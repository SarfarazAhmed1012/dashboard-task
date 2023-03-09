import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h5>Privacy Policy</h5>
        <h5>Liscence</h5>
        <h5>API</h5>
        <h5>Help Center</h5>
        <h6>@ 2023 All rights reserved</h6>
      </div>
      <div className="right">
        <div className="english">
          <h6>English</h6>
          <CiGlobe />
        </div>
        <BsFillMoonFill />
      </div>
    </div>
  );
};

export default Footer;
