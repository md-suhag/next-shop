import { getAllProduct } from "@/Request/request";
import { Product } from "@/typing";

import React from "react";
import ProductCard from "./ProductCard";

const AllProduct = async () => {
  const products: Product[] = await getAllProduct();

  return (
    <section className="pt-16 pb-12">
      <h2 className="text-center font-bold text-2xl">All Products</h2>

      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default AllProduct;
