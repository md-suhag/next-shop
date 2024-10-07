import { getAllCategory } from "@/Request/request";
import React from "react";

const Category = async () => {
  const categories: string[] = await getAllCategory();

  return (
    <section className="py-6 px-4 md:px-20">
      <h1 className="text-center font-bold text-2xl">Shop By Category</h1>
      <div className="mt-12 container mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md"
          >
            <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">
              {category}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
