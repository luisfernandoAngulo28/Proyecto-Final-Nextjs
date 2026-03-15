"use client";
import ProductCard from "@/components/ProductCard";
import { UseGetProduct } from "./hooks/useGetProduct";
import { useState } from "react";
import ProductModal from "./components/ProductModal";

function ProductPage() {
  const { products, loading, error } = UseGetProduct();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-white p-10">
      <h1 className="text-3xl font-bold mb-8 text-black">Productos</h1>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-black">Cargando productos...</p>
        ) : error ? (
          <p className="text-red-500">Error al cargar los productos</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              rating={product.rating.rate}
              category={product.category}
            />
          ))
        )}
      </div>
      <ProductModal
        title="Título del Producto"
        description="Descripción detallada del producto seleccionado."
      />
    </div>
  );
}

export default ProductPage;
