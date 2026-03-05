export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};
export const products: Product[] = [
  {
    id: 1,
    title: "Laptop Pro X",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Potencia profesional para desarrolladores exigentes.",
  },
  {
    id: 2,
    title: "Smartphone Elite",
    price: 899,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Rendimiento y diseño en la palma de tu mano.",
  },
  {
    id: 3,
    title: "Headphones Studio",
    price: 299,
    image: "https://images.unsplash.com/photo-1518441902117-4b4f16b3dc8a",
    description: "Sonido profesional para trabajo y entretenimiento.",
  },
];
