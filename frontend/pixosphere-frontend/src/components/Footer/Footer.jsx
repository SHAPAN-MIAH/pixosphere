import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import './Footer.css';



const Footer = () => {
  return (
    <div className="footer_section">
      <div className="container">
        <div className="footer_content_container">
          <div className="footer_content">
            <img width={200} src="Logo.png" alt="" />

            <p>
              Travel Blog Elementor Template Kit. Powered by Design8. All rights
              reserved.
            </p>

            <div className="social">
              <span><FaFacebook /></span>
              <span><FaInstagram /></span>
             <span> <BsWhatsapp /></span>
            </div>
          </div>
          <div className="footer_content">
            <div>
            <h3>Category</h3>
            
            <ul>
              <li>Immigration</li>
              <li>Study Abroad</li>
              <li>Uncategorized</li>
              <li>Scholarship</li>
              <li>News</li>
            </ul>
            </div>
          </div>
          <div className="footer_content">
            <h3>Latest Post</h3>
            
            <ul>
              <li>Study In china</li>
              <li>ulbright Scholarships in China</li>
              <li>Uncategorized</li>
              <li>How to Apply to Foreign Universities</li>
            </ul>
          </div>
          <div className="footer_content">
            <h3>Contact Us</h3>
            
            <p><span><SlLocationPin /></span> Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near American Embassy)</p>
            <p><span><FaPhone /></span> +880 1607-002687</p>
            <p><span><MdOutlineMailOutline /></span> info@northwayglobal.com.bd</p>
          </div>
        </div>
        <div className="bottom_footer">
          <p>Designed and Developed By Ethical Den</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
