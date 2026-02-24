import { useState } from "react";
import Navbar from "./components/Navbar";
import CartDropdown from "./components/CartDropdown";

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  function handleAddToCart() {
    if (quantity > 0) {
      setCartQuantity(quantity);
      setCartOpen(true);
    }
  }

  function handleDeleteFromCart() {
    setCartQuantity(0);
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar
        cartCount={cartQuantity}
        onCartClick={() => setCartOpen(!cartOpen)}
      />

      <CartDropdown
        isOpen={cartOpen}
        quantity={cartQuantity}
        onDelete={handleDeleteFromCart}
      />
    </div>
  );
}
