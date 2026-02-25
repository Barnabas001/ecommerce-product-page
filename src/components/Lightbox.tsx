import product from "../data/product";
import closeIcon from "../assets/icon-close.svg";

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
      </div>
    </div>
  );
}
