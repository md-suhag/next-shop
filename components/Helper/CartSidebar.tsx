import { addItem, CartItem, removeItem } from "@/store/cartSlice";
import Image from "next/image";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";

type Props = {
  items: CartItem[];
};
const CartSidebar = ({ items }: Props) => {
  const dispatch = useDispatch();

  const addCartHandler = (item: CartItem) => dispatch(addItem(item));
  const removeCartHandler = (id: number) => dispatch(removeItem({ id }));
  return (
    <div className="my-6 h-full">
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>
      {/* If there is no cart item  */}
      {items.length == 0 && (
        <div className="flex items-center justify-center flex-col h-[80vh]">
          <Image
            src="/images/cart.svg"
            alt="empty_cart"
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-xl md:text-2xl font-semibold">
            Your cart is empty
          </h1>
        </div>
      )}
      {/* If there is cart item  */}
      {items.length > 0 && (
        <div>
          {items?.map((item) => {
            return (
              <div
                key={item.id}
                className="pb-4 border-b-2 border-gray-100 border-opacity-60 p-4"
              >
                <div>
                  <Image
                    src={item?.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover mb-4"
                  />
                </div>
                <div>
                  <h2 className="text-sm w-4/5 font-semibold">{item.title}</h2>
                  <h2 className="text-base text-blue-900 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </h2>
                  <h2 className="text-base font-bold mb-2">
                    Quantity: {item.quantity}
                  </h2>
                  <div className="flex item-center space-x-4">
                    <Button
                      onClick={() => removeCartHandler(item.id)}
                      size={"sm"}
                      variant={"destructive"}
                    >
                      Remove
                    </Button>
                    <Button onClick={() => addCartHandler(item)} size={"sm"}>
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}

          <Link href="/cart">
            <SheetClose>
              <Button className=" w-full mb-6 mt-6">View All Cart</Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
