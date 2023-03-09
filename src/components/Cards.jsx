import React from "react";
import card1 from "../assets/wallet1.png";
import card2 from "../assets/wallet2.png";
const Cards = () => {
  const cards = [
    {
      name: "Transfr to someone",
      contacts: "156 contacts",
      image: card1,
    },
    {
      name: "Pay for utilities",
      contacts: "98 service providers",
      image: card2,
    },
  ];
  return (
    <div className="cards">
      <div className="buttons">
        <button>Make a payment</button>
        <button>Private transfer</button>
        <button>Exchange</button>
      </div>
      <div className="cards__info">
        <h4 className="heading">Payment Options</h4>
      </div>
      <div className="cards__container">
        {cards.map((card) => {
          return (
            <div className="card">
              <img src={card.image} alt="" />
              <div className="card_info">
                <h3 className="card__info__title">{card.name}</h3>
                <div className="card__info__sub">
                  <h4>{card.contacts}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
