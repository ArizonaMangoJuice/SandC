import React from "react";
let stockImg =
  "https://images.pexels.com/photos/3177257/pexels-photo-3177257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
export const FireSection = () => {
  return (
    <section className="first-section">
      <section className="section-half section-relative">
        <img
          className="section-half-image"
          src={stockImg}
          alt="kitchen that is white and immaculate"
        />
        <section className="section-subsection">
          <p className="section-big white">Eco Friendly</p>
          <p className="section-p">Ask about our eco friendly cleaning</p>
          {/* <button className="estimate-button section-estimate-button">
            Learn more
          </button> */}
        </section>
      </section>
      <section className="section-half">
        <p className="section-p">A Clean Home</p>
        <p className="section-big">is a happy home</p>
        <p className="section-p">Greater Colorado Area</p>
        <p className="">
          <a className="first-section-number" href="tel:+17209018627">
            (720)-901-8627
          </a>{" "}
          {/* or{" "}
          <a className="section-p text-us" href="#">
            Text Us
          </a> */}
        </p>
        <a href="#cleaning-process" className="estimate-button section-estimate-button">
          Request Your Free Cleaning Estimate
        </a>
      </section>
    </section>
  );
};

export default FireSection;
