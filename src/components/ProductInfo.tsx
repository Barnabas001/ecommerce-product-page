import { product } from "../data/product";
import minusIcon from "../assets/icon-minus.svg";
import plusIcon from "../assets/icon-plus.svg";
import cartIcon from "../assets/icon-cart.svg";

type ProductInfoProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
};

export default function ProductInfo({
  quantity,
  onIncrement,
  onDecrement,
  onAddToCart,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col justify-center py-4 max-w-md">
      <p className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4">
        {product.brand}
      </p>

      <h1 className="text-4xl font-black text-gray-900 leading-tight mb-6 ">
        {product.name}
      </h1>

      <p className="text-gray-500 leading-relaxed mb-8">
        {product.description}
      </p>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-1">
          <span className="text-3xl font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="bg-gray-900 text-white font-bold text-sm px-2.5 py-1 rounded-lg">
            {product.discountPercent}%
          </span>
        </div>

        <span className="text-gray-400 font-bold line-through text-sm">
          ${product.originalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center justify-between bg-gray-100 rounded-xl px-5 py-4 sm:w-40 gap-6">
          {/* Decrement button */}
          <button
            onClick={onDecrement}
            disabled={quantity === 0}
            aria-label="Decrease quantity"
          >
            <img src={minusIcon} alt="Decrement" />
          </button>

          <span className="font-black text-gray-900 text-lg w-4 text-center">
            {quantity}
          </span>

          {/* Increment button */}
          <button
            onClick={onIncrement}
            disabled={quantity === 10}
            aria-label="Increase quantity"
          >
            <img src={plusIcon} alt="Increment" />
          </button>
        </div>

        {/* Add to cart button */}
        <button
          onClick={onAddToCart}
          className="flex items-center py-4 px-8 rounded-xl transition-all bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold"
        >
          <img src={cartIcon} alt="cart icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
}
