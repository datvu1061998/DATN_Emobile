import React from "react";

function RecentProduct(props) {
  return (
    <div className="product-item">
      <div className="product-img">
        <a href="single-product.html">
          <img src="img/product/12.jpg" alt="" />
        </a>
      </div>
      <div className="product-info">
        <h6 className="product-title">
          <a href="single-product.html">Product Name</a>
        </h6>
        <h3 className="pro-price">$ 869.00</h3>
      </div>
    </div>
  );
}

export default RecentProduct;
