import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

export default function ProductList({ products }) {
  return (
    <div className="products-container">
      {products.map((item) => (
        <ProductCard item={item} key={item?.id} />
      ))}
    </div>
  );
}
