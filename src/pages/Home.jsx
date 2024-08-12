import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import axios from "axios";

// two things we need to do with the data: 1st make a request to get the data, 2nd
// in react when you what to pull in data from an api when react loads you use the useEffect hook,
// useEffect runs last

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // call api here
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

// a state variable is a special variable in react that when it changes it tells react to update ui when a change occurs,
