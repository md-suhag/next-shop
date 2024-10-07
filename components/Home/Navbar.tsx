import Link from "next/link";
import React from "react";
import SearchBox from "../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 h-[12vh] bg-white shadow">
      <div className="flex items-center justify-between container mx-auto p-4 ">
        <Link href="/">
          <span className="texty-2xl md:text-3xl font-black">Next Shop</span>
        </Link>
        <div className="flex justify-center item-center gap-3">
          {/* searchbox  */}
          <SearchBox />
          <HeartIcon size={26} cursor={"pointer"} />

          {/* shopping cart button  */}
          <ShoppingCartButton />
          {/* user button  */}

          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
