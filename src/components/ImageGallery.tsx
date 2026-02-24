import { product } from "../data/product";

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
}
