import React from "react";
import Stripe from "react-stripe-checkout";

export default function stripe({ price }) {
  const priceForStripe = price * 100;
  
  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };
  return (
    <Stripe
      name="CRWN Clothing"
      image="https://sendeyo.com/up/d/f3eb2117da"
      amount={priceForStripe}
      shippingAddress
      billingAddress
      allowRememberMe
      token={onToken}
      stripeKey="pk_test_51HUXp6KUwcD36UaZygi9Ixe24zVm2y8aQaeMZZBzHDJs1u2DIsvloTrOON6lVks7UMkBnLYMruyprAvqBT1nXjj800hG7Ltz5I"
    ></Stripe>
  );
}
