import React from "react";
import RowWishList from "./RowWishList";

function WishList(props) {
  return (
    <div className="tab-pane" id="wishlist">
      <div className="wishlist-content">
        <form action="#">
          <div className="table-content table-responsive mb-50">
            <table className="text-center">
              <thead>
                <tr>
                  <th className="product-thumbnail">product</th>
                  <th className="product-price">price</th>
                  <th className="product-stock">Stock status</th>
                  <th className="product-add-cart">add to cart</th>
                  <th className="product-remove">remove</th>
                </tr>
              </thead>
              <tbody>
                <RowWishList></RowWishList>
                <RowWishList></RowWishList>
                <RowWishList></RowWishList>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WishList;
