import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <div className="heading">Payment</div>
      </div>
      <div className="options">
        <IoMdNotificationsOutline />
        <div className="search__bar">
          <input type="text" placeholder="search" />
          <FaSearch />
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/69521378?v=4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
