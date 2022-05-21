import React from "react";

import { GiReturnArrow, GiDeliveryDrone, GiPayMoney } from "react-icons/gi";


export const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Products", url: "/products" },
  { id: 3, text: "About", url: "/about" },
];

export const services = [
  {
    id: 1,
    name: "Delivery",
    text: "Your order will be delivered within 7-12 business days following the order confirmation. Additional business days may be required for delivery during",
    icon: <GiDeliveryDrone />,
  },
  {
    id: 2,
    name: "Payments",
    text: "Shop now, pay later. You'll only pay for the items you keep. Your payment will automatically be deducted from your card after 30 days, no additional charge",
    icon: <GiPayMoney />,
  },
  {
    id: 3,
    name: "Returns",
    text: "You are always welcome to return or exchange for free in any H&M store in the US, excluding Puerto Rico. You have 30 days to decide if an item is right for you",
    icon: <GiReturnArrow />,
  },
];
