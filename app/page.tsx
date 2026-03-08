"use client";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { products as initialProducts } from "@/data/products";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState(initialProducts);
  const [showProducts, setShowProducts] = useState(true);
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <button
        onClick={() => setShowProducts(!showProducts)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        {showProducts ? "Ocultar Productos" : "Mostrar Productos"}
      </button>
      <div>
        <h1 className="text-3xl text-blue-700 font-bold mb-8 text-center">
          Productos Destacados
        </h1>
        {showProducts && (
          <div className="flex flex-wrap justify-center gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
      <Button onclick={() => alert("¡Gracias por visitar nuestra tienda!")}>
        Contactar Soporte
      </Button>

      <div>
        <Link href="/about" className="text-blue-500 mt-6 inline-block">
          Ir a About
        </Link>
      </div>
    </main>
  );
}
