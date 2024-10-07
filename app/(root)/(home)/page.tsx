import AllProduct from "@/components/Home/AllProduct";
import Category from "@/components/Home/Category";
import Hero from "@/components/Home/Hero";

import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <Category />
      <AllProduct />
    </main>
  );
};

export default Home;
