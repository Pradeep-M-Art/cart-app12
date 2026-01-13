function NavBar({ cartCount, openCart }) {
  return (
    <nav className="navbar">
      <h1>Guvi Shopping Site</h1>

      <button
        className="cart-btn"
        onClick={openCart}
        aria-label={`Open cart with ${cartCount} items`}
      >
        🛒 Cart
        <span className="cart-badge">{cartCount}</span>
      </button>
    </nav>
  );
}

export default NavBar;
