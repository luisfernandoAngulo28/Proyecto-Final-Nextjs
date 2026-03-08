import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import React from "react";

function ProductPage() {
  return (
    <div className="bg-white p-10">
      <h1 className="text-3xl font-bold mb-8 text-black">Productos</h1>
      <div className="flex flex-wrap gap-6">
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
    </div>
  );
}

export default ProductPage;
