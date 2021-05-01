import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

import shirt from "../assets/images/shop/white-t-shirt.jpg";
import hat from "../assets/images/shop/hat.jpg";


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
          <div class="container">
            <div class="box">
              <h2>Awesome Products Coming Soon</h2>
            </div>
          </div>

          <div className="product-box">
            <img src={hat} alt="Cool Hat" />
            <h2>Cool Hat</h2>
            {/* <button
              className="snipcart-add-item"
              data-item-id="hat"
              data-item-price="14.99"
              data-item-url="/"
              data-item-description="This is where you talk about how sweet and high-quality this hat is."
              data-item-name="Cool Hat"
            >
              Add to cart
          </button> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Shop;
