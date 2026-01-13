function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h4 title={product.title}>
        {product.title.length > 50
          ? product.title.slice(0, 50) + "..."
          : product.title}
      </h4>

      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
