import React from "react";

export const ThirdSection = () => {
  return (
    <section className="third-section">
      <section id="cleaning-area" className="third-section-left-half">
        <h4 className="section-big third-section-title">Our Service Area</h4>
        <p className="section-p third-section-p">S{"&"}C House Keeping</p>
        <a href="tel:+17209018627" className="third-section-a">(720)-901-8627</a>
        <ul className="third-section-days">
          <li className="days-list">
            <strong className="third-section-strong">Mon</strong>    8{":"}00 am 5pm
          </li>
          <li className="days-list">
            <strong className="third-section-strong">Tue</strong>    8{":"}00 am 5pm
          </li>
          <li className="days-list">
            <strong className="third-section-strong">Wed</strong>    8{":"}00 am 5pm
          </li>
          <li className="days-list">
            <strong className="third-section-strong">Thu</strong>    8{":"}00 am 5pm
          </li>
          <li className="days-list">
            <strong className="third-section-strong">Fri</strong>    8{":"}00 am 5pm
          </li>
          <li className="days-list">
            <strong className="third-section-strong">Sat</strong>    closed
          </li>
          <li className="days-list">
            <strong className="third-section-strong">Sun</strong>    closed
          </li>
        </ul>
        <section className="service-area">
            <p className="section-p third-section-p">We service most of Colorado! Call for estimate!</p>
        </section>
      </section>
      <section className="third-section-right-half">
        <img className="section-half-image" src={require('../images/servicearea.jpg')} alt="an area we service in colorado" />
      </section>
    </section>
  );
};

export default ThirdSection;
