import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import wallet from "../assets/wallet2.png";
import expenseLogo1 from "../assets/expenseLogo1.png";
import expenseLogo2 from "../assets/expenseLogo2.png";
import expenseLogo3 from "../assets/expenseLogo3.png";
import expenseLogo4 from "../assets/expenseLogo4.png";

const Sidebar = () => {
  const links = [
    {
      title: "Dashboard",
      icon: SiGoogleanalytics,
    },
    {
      title: "Account",
      icon: AiFillAppstore,
    },
    {
      title: "Cards",
      icon: BiNews,
    },
    {
      title: "Transaction",
      icon: BiRocket,
    },
    {
      title: "Payment",
      icon: BsCashStack,
    },

    {
      title: "Invoising",
      icon: FaWallet,
    },
    {
      title: "Trading",
      icon: MdAccountCircle,
    },
    {
      title: "Reports",
      icon: AiFillSetting,
    },
  ];
  const links1 = [
    {
      title: "100,050.75 USD",
      icon: expenseLogo1,
    },
    {
      title: "2310.40 EUR",
      icon: expenseLogo2,
    },
    {
      title: "9455.50 GPB",
      icon: expenseLogo3,
    },
    {
      title: "Open a balance",
      icon: expenseLogo4,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">
        <img src={wallet} alt="" />
      </div>
      <h5>Navigation</h5>
      <ul className="links">
        {links.map((link) => {
          return (
            <li>
              <a href="">
                {<link.icon />}
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <h5 className="balances">Balances</h5>
      <ul className="links">
        {links1.map((link) => {
          return (
            <li>
              <a href="">
                <img src={link.icon} alt="" />
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="settings">
        <div className="icon">
          <AiFillSetting />
        </div>
        Profile settings
      </div>
    </div>
  );
};

export default Sidebar;
