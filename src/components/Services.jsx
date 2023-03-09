import React from "react";
import { BsThreeDots } from "react-icons/bs";
import expenseLogo1 from "../assets/expenseLogo1.png";
import expenseLogo2 from "../assets/expenseLogo2.png";
import expenseLogo3 from "../assets/expenseLogo3.png";
import expenseLogo4 from "../assets/expenseLogo4.png";
import expenseLogo5 from "../assets/expenseLogo5.png";
import expenseLogo6 from "../assets/expenseLogo6.png";

const Services = () => {
  const cards = [
    {
      name: "Mobile networks",
      contacts: "Top up your balance instanitly with operators",
      image: expenseLogo1,
    },
    {
      name: "Government",
      contacts: "Pay car fines, taxes and government services",
      image: expenseLogo2,
    },
    {
      name: "Transfr to someone",
      contacts: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: expenseLogo3,
    },
    {
      name: "Utilities",
      contacts: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      image: expenseLogo4,
    },
    {
      name: "Financial services",
      contacts: "Pay car fines, taxes and government services",
      image: expenseLogo5,
    },
    {
      name: "Parking and fines",
      contacts: "Top up your balance instanitly with operators",
      image: expenseLogo6,
    },
    {
      name: "Pay for utilities",
      contacts: "98 service providers",
      image: expenseLogo3,
    },
    {
      name: "Parking and fines",
      contacts: "Pay car fines, taxes and government services",
      image: expenseLogo5,
    },
  ];

  return (
    <div className="services">
      <div className="services__info">
        <h4>Service Providers</h4>
      </div>
      <div className="services_cards__container">
        {cards.map((card) => {
          return (
            <div className="services_card">
              <div className="services_card_info">
                <h3 className="services_card__info__title">{card.name}</h3>
                <div className="services_card__info__sub">
                  <h4>{card.contacts}</h4>
                </div>
              </div>
              <img src={card.image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="see_button">
        <BsThreeDots />
        <h4>See all providers</h4>
      </div>
    </div>
  );
};

export default Services;
