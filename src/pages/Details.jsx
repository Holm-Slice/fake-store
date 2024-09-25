import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  //   console.log(useParams());
  const { id } = useParams();
  // ^^ pulls id out of use params obj and lets us use it like a variable
  // -> use this to get id out of route
  const [product, setProduct] = useState(null);
  //   ^^ create state variable to hold our individual product

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //   We are on a set route with a specific id, we are getting the obj for this specific product and we are on the route for the specific product id
  return (
    <div>
      <ProductCard item={product} parent={"details"} />
    </div>
  );
}
