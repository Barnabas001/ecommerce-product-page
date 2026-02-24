import { useState } from "react";
import Navbar from "./components/Navbar";
import CartDropdown from "./components/CartDropdown";
import ImageGallery from "./components/ImageGallery";

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function handleAddToCart() {
    if (quantity > 0) {
      setCartQuantity(quantity);
      setCartOpen(true);
    }
  }

  function handleDeleteFromCart() {
    setCartQuantity(0);
  }

  function handleImageClick() {
    if (window.innerWidth >= 768) {
      setLightboxOpen(true);
    }
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

      <main>
        <div>
          <ImageGallery
            selectedIndex={selectedImage}
            onSelectImage={setSelectedImage}
            onImageClick={handleImageClick}
          />
        </div>
      </main>
    </div>
  );
}
