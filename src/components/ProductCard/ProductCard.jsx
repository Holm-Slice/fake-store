import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ item, parent }) {
  return (
    <Link to={`/product/details/${item?.id}`} className="product-card">
      <h2>{item?.title}</h2>
      {parent == "details" ? (
        <img src={item?.image} alt={item?.title} height={"500px"} />
      ) : (
        <img src={item?.image} alt={item?.title} />
      )}
      <p>{item?.price.toFixed(2)}</p>
      {parent === "details" && <p>{item?.description}</p>}
    </Link>
  );
}
