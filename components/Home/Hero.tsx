import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full min-h-[88vh] flex justify-center flex-col">
      <div className="container px-4 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            Mega Sale <span className="text-rose-600">Special</span> Offer Up to
            <span className="text-orange-500"> 60%</span> Off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black/70 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            aspernatur dolores a omnis at eligendi architecto earum praesentium
            quo quisquam.
          </p>
          <div className="flex mt-6 space-x-4">
            <Button className="">Shop Now</Button>
            <Button variant="outline">Explore More</Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            alt="hero"
            src="/images/hero.svg"
            width={600}
            height={600}
            className="lg:h-[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
