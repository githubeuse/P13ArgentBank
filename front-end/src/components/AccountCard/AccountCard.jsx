import React from "react";
import "./accountCard.css";

const AccountCard = ({ type, balance, description }) => {
  const formattedBalance = parseFloat(balance).toLocaleString("en-US");

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{type}</h3>
        <p className="account-amount">${formattedBalance}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default AccountCard;
