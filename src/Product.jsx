const Product = ({ product, addProduct, basket }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt="" />
      </div>
      <div className="about">
        <p>{product.name}</p>
        <p>{product.price} Руб.</p>
      </div>
      <button
        disabled={basket.includes(product)}
        onClick={() => addProduct(product)}
        className="btn"
      >
        {basket.includes(product) ? "Товар в корзине" : "Добавить продукт"}
      </button>
    </div>
  );
};

export default Product;
