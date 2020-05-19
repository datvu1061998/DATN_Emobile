import React, { useEffect } from "react";
import * as animations from "./../../../animations";

function Categories(props) {
  useEffect(() => {
    animations.aCategaries();
  }, []);
  return (
    <div>
      {/* widget-categories */}
      <aside className="widget widget-categories box-shadow mb-30">
        <h6 className="widget-title border-left mb-20">Categories</h6>
        <div id="cat-treeview" className="product-cat">
          <ul className="treeview">
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Brand One</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Mobile</a>
                </li>
                <li>
                  <a href="1">Tab</a>
                </li>
                <li>
                  <a href="1">Watch</a>
                </li>
                <li>
                  <a href="1">Head Phone</a>
                </li>
                <li>
                  <a href="1">Memory</a>
                </li>
              </ul>
            </li>
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Brand Two</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Mobile</a>
                </li>
                <li>
                  <a href="1">Tab</a>
                </li>
                <li>
                  <a href="1">Watch</a>
                </li>
                <li>
                  <a href="1">Head Phone</a>
                </li>
                <li>
                  <a href="1">Memory</a>
                </li>
              </ul>
            </li>
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Accessories</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Footwear</a>
                </li>
                <li>
                  <a href="1">Sunglasses</a>
                </li>
                <li>
                  <a href="1">Watches</a>
                </li>
                <li>
                  <a href="1">Utilities</a>
                </li>
              </ul>
            </li>
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Top Brands</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Mobile</a>
                </li>
                <li>
                  <a href="1">Tab</a>
                </li>
                <li>
                  <a href="1">Watch</a>
                </li>
                <li>
                  <a href="1">Head Phone</a>
                </li>
                <li>
                  <a href="1">Memory</a>
                </li>
              </ul>
            </li>
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Jewelry</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Footwear</a>
                </li>
                <li>
                  <a href="1">Sunglasses</a>
                </li>
                <li>
                  <a href="1">Watches</a>
                </li>
                <li>
                  <a href="1">Utilities</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Categories;
