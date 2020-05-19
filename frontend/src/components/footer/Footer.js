import React from "react";

function Footer(props) {
  return (
    <footer id="footer" className="footer-area">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="plr-185">
            <div className="footer-top-inner gray-bg">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-4">
                  <div className="single-footer footer-about">
                    <div className="footer-logo">
                      <img
                        src="img/logo/logo.png"
                        alt=""
                        style={{
                          width: "150px",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                    </div>
                    <div className="footer-brief">
                      <p>
                        orem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500ss,
                      </p>
                      <p>
                        When an unknown printer took a galley of type and If you
                        are going to use a passage of Lorem Ipsum scrambled it
                        to make.
                      </p>
                    </div>
                    <ul className="footer-social">
                      <li>
                        <a className="facebook" href="sd" title="Facebook">
                          <i className="zmdi zmdi-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="google-plus"
                          href="sd"
                          title="Google Plus"
                        >
                          <i className="zmdi zmdi-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="sd" title="Twitter">
                          <i className="zmdi zmdi-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className="rss" href="sd" title="RSS">
                          <i className="zmdi zmdi-rss" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 hidden-md hidden-sm">
                  <div className="single-footer">
                    <h4 className="footer-title border-left">Shipping</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>New Products</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Discount Products</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Best Sell Products</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Popular Products</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Manufactirers</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Suppliers</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Special Products</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <div className="single-footer">
                    <h4 className="footer-title border-left">my account</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="my-account.html">
                          <i className="zmdi zmdi-circle" />
                          <span>My Account</span>
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html">
                          <i className="zmdi zmdi-circle" />
                          <span>My Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <i className="zmdi zmdi-circle" />
                          <span>My Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Sign In</span>
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Registration</span>
                        </a>
                      </li>
                      <li>
                        <a href="checkout.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Check out</span>
                        </a>
                      </li>
                      <li>
                        <a href="order.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Oder Complete</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-footer">
                    <h4 className="footer-title border-left">Get in touch</h4>
                    <div className="footer-message">
                      <form action="#">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name here..."
                        />
                        <input
                          type="text"
                          name="email"
                          placeholder="Your email here..."
                        />
                        <textarea
                          className="height-80"
                          name="message"
                          placeholder="Your messege here..."
                          defaultValue={""}
                        />
                        <button
                          className="submit-btn-1 mt-20 btn-hover-1"
                          type="submit"
                        >
                          submit message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom black-bg">
        <div className="container-fluid">
          <div className="plr-185">
            <div className="copyright">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="copyright-text">
                    <p>
                      ©{" "}
                      <a href="https://freethemescloud.com/" target="blank">
                        Free themes Cloud
                      </a>{" "}
                      2016. All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <ul className="footer-payment text-right">
                    <li>
                      <a href="1">
                        <img src="img/payment/1.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="1">
                        <img src="img/payment/2.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="1">
                        <img src="img/payment/3.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="1">
                        <img src="img/payment/4.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
