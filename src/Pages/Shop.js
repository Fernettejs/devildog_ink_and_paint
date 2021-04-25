import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

import shirt from "../assets/images/shop/white-t-shirt.png";
import hat from "../assets/images/shop/hat.png";


const Shop = () => {
  return (
    <>
      <Navigation />
      <Sidebar />
      <div className="shop">

      <div className="header">
        <h1>The Shop</h1>
      </div>
      <div className="content">
        <div className="product-box">
          <img src={shirt} alt="Cool Shirt" />
          <h2>Cool Shirt</h2>
          <button
            className="snipcart-add-item"
            data-item-id="shirt"
            data-item-price="24.99"
            data-item-url="/"
            data-item-description="This is where you talk about how sweet and high-quality this shirt is."
            data-item-name="Cool Shirt"
          >
            Add to cart
          </button>
        </div>
        <div className="product-box">
          <img src={hat} alt="Cool Hat" />
          <h2>Cool Hat</h2>
          <button
            className="snipcart-add-item"
            data-item-id="hat"
            data-item-price="14.99"
            data-item-url="/"
            data-item-description="This is where you talk about how sweet and high-quality this hat is."
            data-item-name="Cool Hat"
          >
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};
export default Shop;
