import { useState , useEffect } from "react";
import ProductList from "./components/ProductList"
import CartModal from "./components/CartModal"
import "./App.css"
import NavBar from "./components/NavBar";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div>
      <NavBar
        cartCount={totalItems}
        openCart={() => setIsCartOpen(true)}
      />
      

     <ProductList products = {products} addToCart={addToCart}/>

      {isCartOpen && (
        <CartModal
          cart={cart}
          closeModal={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      )}
    </div>
  );
}

export default App;
