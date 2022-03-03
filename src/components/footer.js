import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div style={{backgroundColor: "grey", textAlign: "center", paddingTop: "100px"}}>
      <footer id="colorlib-footer" role="contentinfo">
    
          <div class="row row-pb-md">
            <div class="col footer-col colorlib-widget">
              <h4>About Footwear</h4>
              <p style={{color: "#cac0c0"}}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life
              </p>
              <p>
                <ul class="colorlib-social-icons">
                  <li>
                  <Link to="#">  <i class="fab fa-twitter"></i> </Link>
                  </li>
                  <li>
                  <Link to="#"> 
                      <i class="fab fa-facebook-square"></i>
                      </Link>
                  </li>
                  <li>
                  <Link to="#">
                      <i class="fab fa-linkedin"></i>
                      </Link>
                  </li>
                </ul>
              </p>
            </div>
            <div class="col footer-col colorlib-widget">
              <h4>Customer Care</h4>
              <p>
                <ul class="colorlib-footer-links">
                  <li>
                  <Link to="#">Contact</Link>
                  </li>
                  <li>
                  <Link to="#">Returns/Exchange</Link>
                  </li>
                  <li>
                  <Link to="#">Gift Voucher</Link>
                  </li>
                  <li>
                  <Link to="#">Wishlist</Link>
                  </li>
                  <li>
                      <Link to="#">Special</Link>
                  </li>
                  <li>
                      <Link to="#">Customer Services</Link>
                  </li>
                  <li>
                      <Link to="#">Site maps</Link>
                  </li>
                </ul>
              </p>
            </div>
            <div class="col footer-col colorlib-widget">
              <h4>Information</h4>
              <p>
                <ul class="colorlib-footer-links">
                  <li>
                      <Link to="#">About us</Link>
                  </li>
                  <li>
                      <Link to="#">Delivery Information</Link>
                  </li>
                  <li>
                      <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                      <Link to="#">Support</Link>
                  </li>
                  <li>
                      <Link to="#">Order Tracking</Link>
                  </li>
                </ul>
              </p>
            </div>
            <div class="col footer-col">
              <h4>News</h4>
              <ul class="colorlib-footer-links">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                <Link to="#">Press</Link>
                </li>
                <li>
                  <Link to="#">Exhibitions</Link>
                </li>
              </ul>
            </div>
          </div>
  
      </footer>
      <Link to="#" class="o-scroll-up static" title="back to top">
        <button class="o-scroll-up-text">
          <i class="fas fa-arrow-up"></i>
        </button>
        <span class="o-scroll-up-icon" aria-hidden="true"></span>
      </Link>
    </div>
  );
}
export default Footer;
