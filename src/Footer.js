import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__paragraph">&copy; 2020 Airbnb Cloney</p>
      <p className="footer__paragraph">
        Developed by{" "}
        <a
          className="footer__link"
          href="https://linkedin.com/in/RealEssadik"
          target="_blank">
          Essadik
        </a>
      </p>
      <p className="footer__paragraph">
        Privacy . Terms . Sitemap . Company Details
      </p>
    </div>
  );
}

export default Footer;
