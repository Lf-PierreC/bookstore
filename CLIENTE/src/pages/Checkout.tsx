import { useCart } from "../Context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart, total, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleFinish = () => {
    alert("✅ Compra finalizada!");
    clearCart();
  };

  return (
    <div className="checkout_container">
      <h1>Finalizar Compra</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="checkout_item">
                <img src={item.imageUrl ? `/images/${item.imageUrl}` : "/images/default.jpg"} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  />
                  <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <button className="btn_finish" onClick={handleFinish}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
}

export default Checkout;
