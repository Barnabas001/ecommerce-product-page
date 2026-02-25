import { useState } from "react";
import Navbar from "./components/Navbar";
import CartDropdown from "./components/CartDropdown";
import ImageGallery from "./components/ImageGallery";
import ProductInfo from "./components/ProductInfo";
import MobileMenu from "./components/MobileMenu";
import Lightbox from "./components/Lightbox";

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  function handleIncrement() {
    setQuantity((prev) => Math.min(prev + 1, 10));
  }

  function handleDecrement() {
    setQuantity((prev) => Math.max(prev - 1, 0));
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

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <Lightbox
        isOpen={lightboxOpen}
        selectedIndex={selectedImage}
        onSelectedImage={setSelectedImage}
        onClose={() => setLightboxOpen(false)}
      />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <ImageGallery
            selectedIndex={selectedImage}
            onSelectImage={setSelectedImage}
            onImageClick={handleImageClick}
          />

          <ProductInfo
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>

      {/* Click outside cart to close it */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}
    </div>
  );
}
