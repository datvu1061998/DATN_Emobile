import React from "react";

function RowWishList(props) {
  return (
    <tr>
      <td className="product-thumbnail">
        <div className="pro-thumbnail-img">
          <img src="img/cart/1.jpg" alt="" />
        </div>
        <div className="pro-thumbnail-info text-left">
          <h6 className="product-title-2">
            <a href="1">dummy product name</a>
          </h6>
          <p>Brand: Brand Name</p>
          <p>Model: Grand s2</p>
          <p> Color: Black, White</p>
        </div>
      </td>
      <td className="product-price">$560.00</td>
      <td className="product-stock text-uppercase">in stoct</td>
      <td className="product-add-cart">
        <a href="1" title="Add To Cart">
          <i className="zmdi zmdi-shopping-cart-plus" />
        </a>
      </td>
      <td className="product-remove">
        <a href="1">
          <i className="zmdi zmdi-close" />
        </a>
      </td>
    </tr>
  );
}

export default RowWishList;
