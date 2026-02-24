import { useState } from "react";
import Navbar from "./components/Navbar";

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

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar
        cartCount={cartQuantity}
        onCartClick={() => setCartOpen(!cartOpen)}
      />
    </div>
  );
}
