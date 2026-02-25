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
    <div className="absolute rigth-4 md:right-12 top-20 w-88 bg-white rounded-2xl shadow-2xl border boeder-gray-100 z-50 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="font-black text-gray-900 text-lg">Cart</h2>
      </div>

      {!hasItems ? (
        //EMPTY STATE
        <div className="py-10 text-center">
          <p className="text-gray-400 font-medium">Your cart is empty.</p>
        </div>
      ) : (
        //FILLED STATE
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
