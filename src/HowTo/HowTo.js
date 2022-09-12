import React from "react";

export const HowTo = () => {
  return (
    <section id="cleaning-process" className="howto-container">
      <section className="howto-section">
        <p className="howto-p-1 cursive">We Make</p>
        <p className="howto-p-1 cursive">It Easy</p>
        <a className="howto-link" href="tel:+17209018627">
          Take The First Step
        </a>
      </section>
      <section className="howto-section section-relative">
        <div className="howto-background howto-background1"></div>
        <p className="howto-step cursive">1</p>
        <h4 className="howto-title">Request Your Free Estimate</h4>
        <p className="howto-p">
          Fill out our estimate form or give us a call at (720) 901-8627 to get
          started.
        </p>
      </section>
      <section className="howto-section section-relative">
        <div className="howto-background howto-background2"></div>
        <p className="howto-step cursive">2</p>
        <h4 className="howto-title">Get Your Customized Clean</h4>
        <p className="howto-p">
          Our team will work with you to create a unique cleaning schedule that
          fits your busy life.
        </p>
      </section>
      <section className="howto-section section-relative">
        <div className=" howto-background howto-background-three"></div>
        <p className="howto-step cursive">3</p>
        <h4 className="howto-title">Come Home to More</h4>
        <p className="howto-p">
          Enjoy having both a clean home and time to focus on the important
          things.
        </p>
      </section>
    </section>
  );
};

export default HowTo;
