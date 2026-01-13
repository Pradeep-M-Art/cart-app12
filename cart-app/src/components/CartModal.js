import { useEffect } from "react";

function CartModal({
  cart,
  closeModal,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="modal-backdrop">
      <div className="modal">
       
        <div className="modal-header">
          <h2>Cart Items</h2>
          <button className="close-btn" onClick={closeModal}>
            ✕
          </button>
        </div>

      
        <div className="modal-body">
          {cart.length === 0 && <p>No items in the cart</p>}

          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <p className="cart-title">{item.title}</p>
                <p>₹ {item.price}</p>

               
                <div className="qty-controls">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    disabled={item.qty === 1}
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="btn-remove-cart-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        
        {cart.length > 0 && (
          <div className="modal-footer">
            <h3>Total: ₹ {totalPrice.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
