import { product } from "../data/product";

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
          </div>
        </div>
      )}
    </div>
  );
}
