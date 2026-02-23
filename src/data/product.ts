export type ProductImage = {
  id: number;
  src: string;
  thumbnnail: string;
};

export type Product = {
  brand: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  images: ProductImage[];
};
