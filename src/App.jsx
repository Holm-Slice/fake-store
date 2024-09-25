import { useState } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  // holds actual data we get from the api ^
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  // displays to user the filtered search results ^
  return (
    <>
      <Header
        setProducts={setProducts}
        products={products}
        setProductsToDisplay={setProductsToDisplay}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setProducts={setProducts}
              products={products}
              productsToDisplay={productsToDisplay}
              setProductsToDisplay={setProductsToDisplay}
            />
          }
        />
        <Route path="/product/details/:id" element={<Details />} />
        <Route
          path="*"
          element={
            <Home
              setProducts={setProducts}
              products={products}
              productsToDisplay={productsToDisplay}
              setProductsToDisplay={setProductsToDisplay}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
