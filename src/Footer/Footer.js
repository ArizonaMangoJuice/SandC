import React from "react";

export const Footer = () => {
  return (
    <footer>
      <section className="footer-1">
        <img
          className="logo"
          alt="S AND C house cleaning"
          src={require("../images/logo2.png")}
        />
        <section className="footer-location">
            <a className="footer-number cursive" href="tel:+17209018627">{"(720)"} 901{"-"}8627</a>
            <p className="footer-address">5058 Sable St </p>
            <p className="footer-address">Denver Co 80239</p>
        </section>
        <section className="footer-social-media">
          <nav></nav>
        </section>
      </section>
      <section className="footer-2">
        <p className="copyright">{"Ⓒ"} 2022 S{"&"}C House Keeping</p>
      </section>
    </footer>
  );
};

export default Footer;
