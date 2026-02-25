import { product } from "../data/product";
import closeIcon from "../assets/icon-close.svg";
import previousBnn from "../assets/icon-previous.svg";
import nextBnn from "../assets/icon-next.svg";

type LightboxProps = {
  isOpen: boolean;
  selectedIndex: number;
  onSelectedImage: (index: number) => void;
  onClose: () => void;
};

export default function Lightbox({
  isOpen,
  selectedIndex,
  onSelectImage,
  onClose,
}: LightboxProps) {
  if (!isOpen) return null;

  const images = product.images;
  const currentImage = images[selectedIndex];

  const goToPrev = () =>
    onSelectImage((selectedIndex - 1 + images.length) % images.length);
  const goToNext = () => onSelectImage((selectedIndex + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-8">
      <div
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose}>
          <img src={closeIcon} alt="Close icon" />
        </button>

        {/* Main image */}
        <div className="aspect-square rounded-2xl overflow-hidden bg-orange-50">
          <img
            src={currentImage.src}
            alt={`Product view ${selectedIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform text-xl font-bold text-gray-800"
          aria-label="Previous image"
        >
          <img src={previousBnn} alt="previous button" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform text-xl font-bold text-gray-800"
          aria-label="Next image"
        >
          <img src={nextBnn} alt="next button" />
        </button>
      </div>
    </div>
  );
}
