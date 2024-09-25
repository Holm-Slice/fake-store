import "./Header.css";
import { useLocation, Link } from "react-router-dom";

export default function Header({
  products,
  setProducts,
  setProductsToDisplay,
}) {
  const Location = useLocation();
  // ^^^ useLocation returns and obj stored in the variable location
  const handleSearch = (e) => {
    const filtered = products.filter(
      (item) => item.title.toLowerCase().includes(e.target.value.toLowerCase())
      //header needs full list of products and whatever else we factor out with the search
    );
    console.log(filtered);
    setProductsToDisplay(filtered);
    // double check js for react video in series
  };
  return (
    <header className="header-cont">
      <Link to={"/"} className="logo">
        FAKE STORE
      </Link>
      {location.pathname === "/" ? (
        <input
          type="text"
          placeholder="Search for stuff..."
          onChange={handleSearch}
        />
      ) : (
        <Link className="login" to={"/"}>
          Search for Items
        </Link>
      )}
      <div className="button-cont">
        <p className="login">Login</p>
      </div>
    </header>
  );
}
