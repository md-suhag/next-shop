"use client";
import { getAllProduct } from "@/Request/request";
import { Product } from "@/typing";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products: Product[] = await getAllProduct();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <section className="pt-16 pb-12">
      <h2 className="text-center font-bold text-2xl">All Products</h2>
      {loading ? (
        <div className="flex justify-center items-center mt-14">
          <Loader size={32} className="amimate-spin" />
        </div>
      ) : (
        <div className="container mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </section>
  );
};

export default AllProduct;
