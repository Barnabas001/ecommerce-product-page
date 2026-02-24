import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import navAvatar from "../assets/image-avatar.png";

type NavbarProps = {
  cartCount: number;
  onCartClick: () => void;
};

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <span>
            <img src={logo} alt="logo" />
          </span>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            {["Collections", "Men", "Women", "About", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            className="relative p-1 hover:opacity-70 transition-opacity"
            aria-label="Open cart"
            onClick={onCartClick}
          >
            <img src={cartIcon} alt="cart icon" className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-orange-400 to-amber-600">
            <span>
              <img src={navAvatar} alt="image-avatar" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
