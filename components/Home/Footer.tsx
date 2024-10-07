import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-20 pb-12">
      {/* Top Section */}
      <div className="container px-4 mx-auto border-b-[1.2px] pb-8 border-b-slate-500  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Shop Info */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            Next Shop
          </h1>
          <p className="text-[14px] text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            labore fuga, assumenda laborum veniam iste vel nihil saepe excepturi
            tenetur eum voluptatum ut impedit nobis ratione?
          </p>
          <p className="text-[14px] mt-6 text-black opacity-80">
            (+000) 1234 5678 90 - info@example.com
          </p>
        </div>

        {/* Information */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Information</h1>
          <p className="footer__link">About Us</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Return Policy</p>
          <p className="footer__link">Shipping Policy</p>
          <p className="footer__link">Dropshipping</p>
        </div>

        {/* Account */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Account</h1>
          <p className="footer__link">Dashboard</p>
          <p className="footer__link">My Orders</p>
          <p className="footer__link">Account Details</p>
          <p className="footer__link">Track My Orders</p>
        </div>

        {/* Shop */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Shop</h1>
          <p className="footer__link">Affiliate</p>
          <p className="footer__link">Best Sellers</p>
          <p className="footer__link">Latest Products</p>
          <p className="footer__link">Sale Products</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between container px-4 mx-auto">
        <p className="text-[14px] text-black opacity-60">
          &copy; Copyright nextshop 2024
        </p>
        <div className="sm:ml-auto">
          <Image
            alt="pay"
            loading="lazy"
            width={230}
            height={230}
            decoding="async"
            className="object-contain"
            src="/images/pay.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
