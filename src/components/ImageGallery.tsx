import { product } from "../data/product";
import previousBtn from "../assets/icon-previous.svg";
import nextBtn from "../assets/icon-next.svg";

type ImageGalleryProps = {
  selectedIndex: number;
  onSelectImage: (index: number) => void;
  onImageClick: () => void;
};

export default function ImageGallery({
  selectedIndex,
  onSelectImage,
  onImageClick,
}: ImageGalleryProps) {
  const images = product.images;
  const currentImage = images[selectedIndex];

  const goToPrev = () =>
    onSelectImage((selectedIndex - 1 + images.length) % images.length);
  const goToNext = () => onSelectImage((selectedIndex + 1) % images.length);

  return (
    <div className="w-full md:w-111.25 shrink-0">
      <div
        className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-orange-50"
        onClick={onImageClick}
      >
        <img
          src={currentImage.src}
          alt={`Product view ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />

        <div className="hidden md:flex absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
          <span className="bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-full shadow">
            🔍 Click to zoom
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
        >
          <img src={previousBtn} alt="previous btn" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
        >
          <img src={nextBtn} alt="previous btn" />
        </button>
      </div>

      <div className="hidden md:flex gap-6 mt-6">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => onSelectImage(index)}
            className={`flex-1 aspect-square rounded-xl overflow-hidden transition-all ${index === selectedIndex ? "ring-2 ring-orange-500 opacity-50" : "hover:opacity-75"}`}
          >
            <img
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-ful object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
