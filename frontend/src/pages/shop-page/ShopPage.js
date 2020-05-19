import React from "react";
import ShopRight from "../../components/shop/ShopRight";
import ShopLeft from "../../components/shop/ShopLeft";
import { Link } from "react-router-dom";

function ShopPage(props) {
  document.title = 'eMobile || Shop';

  return (
    <div>
      <div className="breadcrumbs-section plr-200 mb-80">
          <div className="breadcrumbs overlay-bg">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="breadcrumbs-inner">
                    <h1 className="breadcrumbs-title">Danh sách sản phẩm</h1>
                    <ul className="breadcrumb-list">
                      <li>
                        <Link to="">Trang chủ</Link>
                      </li>
                      <li>Danh sách sản phẩm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      {/* Start page content */}
      <div id="page-content" className="page-wrapper">
        {/* SHOP SECTION START */}
        <div className="shop-section mb-80">
          <div className="container">
            <div className="row"></div>
                <ShopRight></ShopRight>
                <ShopLeft></ShopLeft>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
