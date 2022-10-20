import { products } from "./Data";
import Product from "./Product";

const Shop = ({ addProduct, basket }) => {
  return (
    <div className="productsList">
      {products.map((item) => {
        return (
          <Product
            key={item.id}
            product={item}
            addProduct={addProduct}
            basket={basket}
          />
        );
      })}
    </div>
  );
};

export default Shop;
