import React from "react";

const BasketProduct = ({ product, removeProduct }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt="" />
      </div>
      <div className="about">
        <p>{product.name}</p>
        <p>{product.price} Руб.</p>
      </div>
      <button onClick={() => removeProduct(product.id)} className="btn-del">
        Удалить из корзины
      </button>
    </div>
  );
};

export default BasketProduct;
