import React from "react";
import BasketProduct from "./BasketProduct";

const Basket = ({ basket, removeProduct }) => {
  if (basket.length === 0) {
    return (
      <div className="emptyBlock">
        <h1 className="empty">Корзина пуста</h1>
      </div>
    );
  }
  return (
    <div className="productsList">
      {basket.map((item) => {
        return (
          <BasketProduct
            key={item.id}
            product={item}
            removeProduct={removeProduct}
          />
        );
      })}
    </div>
  );
};

export default Basket;
