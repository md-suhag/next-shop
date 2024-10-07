import React from "react";

import { Star } from "lucide-react"; // Import lucide-react icon
import { getProductByCategory, getSingleProduct } from "@/Request/request";
import { Product } from "@/typing";
import AddToCart from "@/components/AddToCart"; // Assuming you have this component
import Image from "next/image";
import ProductCard from "@/components/Home/ProductCard";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const singleProduct: Product = await getSingleProduct(id);
  const relatedProducts: Product[] = await getProductByCategory(
    singleProduct.category
  );

  // Create an array for stars based on rating
  const num = Math.round(singleProduct?.rating?.rate);
  const ratingArray = new Array(num).fill(0);

  return (
    <div className="mt-14">
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* Product Image */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            alt={singleProduct.title}
            src={singleProduct.image}
            width={400}
            height={400}
            loading="lazy"
            className="object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="col-span-4">
          {/* Title */}
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {singleProduct.title}
          </h1>

          {/* Rating */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {ratingArray.map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className="text-yellow-600"
                  fill="yellow"
                  stroke="currentColor"
                />
              ))}
            </div>
            <p className="text-base text-gray-700 font-semibold">
              ({singleProduct.rating.count} Reviews)
            </p>
          </div>

          {/* Separator */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>

          {/* Price */}
          <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold ">
            ${singleProduct.price.toFixed(2)}
          </h1>

          {/* Description */}
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct.description}
          </p>

          {/* Additional Info */}
          <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
            Category: {singleProduct.category}
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Tag: Shop, Next
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            SKU: {singleProduct.id}
          </p>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <AddToCart product={singleProduct} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-2xl text-black font-semibold "> Related Product</h2>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
