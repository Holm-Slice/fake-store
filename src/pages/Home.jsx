import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import axios from "axios";
import "./home.css";

// two things we need to do with the data: 1st make a request to get the data, 2nd
// in react when you what to pull in data from an api when react loads you use the useEffect hook,
// useEffect runs last

export default function Home({
  products,
  setProducts,
  productsToDisplay,
  setProductsToDisplay,
}) {
  useEffect(() => {
    // call api here
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setProductsToDisplay(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "") {
      setProductsToDisplay(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category
      );
      setProductsToDisplay(filtered);
    }
  };
  return (
    <div>
      <div className="filter-menu">
        <span>Filter by Category:</span>
        <div className="filter-buttons">
          <p
            onClick={() => {
              handleCategoryClick("men's clothing");
            }}
          >
            Men's Clothing
          </p>
          <p
            onClick={() => {
              handleCategoryClick("women's clothing");
            }}
          >
            Women's Clothing
          </p>
          <p
            onClick={() => {
              handleCategoryClick("electronics");
            }}
          >
            Electronics
          </p>
          <p
            onClick={() => {
              handleCategoryClick("jewelery");
            }}
          >
            Jewelry
          </p>
          <p
            onClick={() => {
              handleCategoryClick("");
            }}
          >
            Reset
          </p>
        </div>
      </div>
      <ProductList products={productsToDisplay} />
    </div>
  );
}

// a state variable is a special variable in react that when it changes it tells react to update ui when a change occurs,
