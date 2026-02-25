import { product } from "../data/product";

type ProductInfoProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
};

export default function ProductInfo({
  quantity,
  onIncrement,
  onAddToCart,
}: ProductInfoProps) {
  return (
    <div>
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
    </div>
  );
}
