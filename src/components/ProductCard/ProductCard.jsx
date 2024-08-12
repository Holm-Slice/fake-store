import React from "react";
import "./ProductCard.css";

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <h2>{item?.title}</h2>
      <img src={item?.image} alt={item?.title} />
      <p>{item?.price.toFixed(2)}</p>
    </div>
  );
}
