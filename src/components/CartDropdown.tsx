import { product } from "../data/product";
import deleteIcon from "../assets/icon-delete.svg";

type CartDropdownProps = {
  isOpen: boolean;
  quantity: number;
  onDelete: () => void;
};

export default function CartDropdownProps({
  isOpen,
  quantity,
  onDelete,
}: CartDropdownProps) {
  if (!isOpen) return null;

  const total = (product.price * quantity).toFixed(2);
  const hasItems = quantity > 0;

  return (
    <div>
      <div>
        <h2>Cart</h2>
      </div>

      {!hasItems ? (
        <div>
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          <div>
            <img src={product.images[0].thumbnail} alt={product.name} />

            <div>
              <p className="text-gray-600 text-sm truncate">{product.name}</p>
              <p>
                ${product.price.toFixed(2)} × {quantity} <span>${total}</span>
              </p>
            </div>

            {/* Delete button */}
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>

          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold py-4 rounded-xl transition-all">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
