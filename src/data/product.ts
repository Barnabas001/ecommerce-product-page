import product1 from "../assets/image-product-1.jpg";
import product1Thumb from "../assets/image-product-1-thumbnail.jpg";

import product2 from "../assets/image-product-2.jpg";
import product2Thumb from "../assets/image-product-2-thumbnail.jpg";

import product3 from "../assets/image-product-3.jpg";
import product3Thumb from "../assets/image-product-3-thumbnail.jpg";

import product4 from "../assets/image-product-4.jpg";
import product4Thumb from "../assets/image-product-4-thumbnail.jpg";

export type ProductImage = {
  id: number;
  src: string;
  thumbnail: string;
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
      src: product1,
      thumbnail: product1Thumb,
    },
    {
      id: 2,
      src: product2,
      thumbnail: product2Thumb,
    },
    {
      id: 3,
      src: product3,
      thumbnail: product3Thumb,
    },
    {
      id: 4,
      src: product4,
      thumbnail: product4Thumb,
    },
  ],
};
