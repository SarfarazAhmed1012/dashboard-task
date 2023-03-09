import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import card1 from "../assets/wallet1.png";
import card2 from "../assets/wallet2.png";
const Left = () => {
  const cards = [
    {
      name: "Verizon account top up",
      contacts: "-3.453$",
      image: card1,
    },
    {
      name: "Pay for utilities",
      contacts: "-3.453$",
      image: card2,
    },
    {
      name: "Verizon account top up",
      contacts: "-3.453$",
      image: card1,
    },
    {
      name: "Pay for utilities",
      contacts: "-3.453$",
      image: card2,
    },
    {
      name: "Online purchase on amazon.com",
      contacts: "-3.453$",
      image: card1,
    },
    {
      name: "Pay for utilities",
      contacts: "-3.453$",
      image: card2,
    },
    {
      name: "Verizon account top up",
      contacts: "-3.453$",
      image: card1,
    },
    {
      name: "Pay for utilities",
      contacts: "-3.453$",
      image: card2,
    },
    {
      name: "Verizon account top up",
      contacts: "-3.453$",
      image: card1,
    },
    {
      name: "Pay for utilities",
      contacts: "-3.453$",
      image: card2,
    },
  ];
  return (
    <div className="left">
      <div className="left__title">
        <div className="title__buttons">
          <AiFillAppstore />
          <span>Add a new template</span>
        </div>
      </div>
      <div className="left__info">
        <div className="outer">
          <h4>Recent Payments</h4>
        </div>
      </div>

      <div className="left__expand">
        <div className="left__container">
          {cards.map((card) => {
            return (
              <div className="left_card">
                <img src={card.image} alt="" />
                <div className="left_card_info">
                  <h3>{card.name}</h3>
                  <div className="left_card__info__sub">
                    <h4>{card.contacts}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="see_button">
        <BsThreeDots />
        <h4>See all transactions</h4>
      </div>
    </div>
  );
};

export default Left;
