"use client";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { Product } from "@/typing";
import { useToast } from "@/hooks/use-toast";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addCartHandler = () => {
    dispatch(addItem(product));

    toast({
      title: "item added to the cart!",
      variant: "success",
    });
  };
  return (
    <Button onClick={addCartHandler} className="mt-6">
      Add To Cart
    </Button>
  );
};

export default AddToCart;
