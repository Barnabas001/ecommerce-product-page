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

export const product: Product = {
  brand: "SNEAKER COMPANY",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. " +
    "Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.0,
  originalPrice: 250.0,
  discountPercent: 50,
  images: [
    {
      id: 1,
      src: "../assets/image-product-1.jpg",
      thumbnnail: "../assets/image-product-1-thumbnail.jpg",
    },
    {
      id: 2,
      src: "../assets/image-product-2.jpg",
      thumbnnail: "../assets/image-product-2-thumbnail.jpg",
    },
    {
      id: 3,
      src: "../assets/image-product-3.jpg",
      thumbnnail: "../assets/image-product-3-thumbnail.jpg",
    },
    {
      id: 4,
      src: "../assets/image-product-4.jpg",
      thumbnnail: "../assets/image-product-4-thumbnail.jpg",
    },
  ],
};
