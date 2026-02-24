import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar cartCount={cartQuantity} />
    </div>
  );
}
