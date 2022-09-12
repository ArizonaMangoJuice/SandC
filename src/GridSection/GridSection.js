import React from "react";

export const GridSection = () => {
  return (
    <section className="grid-section">
      <section className="grid-left-section">
        <section className="small-grid small-grid-top section-relative">
          <div className="grid-background"></div>
          <p className="section-p white grid-section-p">
            100{"%"} Satisfaction Guaranteed
          </p>
          {/* <a href="/#" className="grid-button-link section-estimate-button">
            Learn more
          </a> */}
        </section>
        <section className="small-grid small-grid-bottom section-relative">
          <div className="grid-background-2"></div>
          <p className="section-p main-color grid-section-p cursive">The extra</p>
          <p className="section-p white grid-section-p">In Your Ordinary</p>
          {/* <a href="/#" className="grid-button-link section-estimate-button ">
            How We Clean
          </a> */}
        </section>
      </section>
      <section className="grid-right-section">
        <section className="big-grid">
          <p className="section-p white big-grid-p">
            If you're looking for someone to take care of your home, you should
            definitely consider S {"&"} C House Keeping. 
          </p>
          {/* <button class="estimate-button big-grid-button">How We Clean</button> */}
        </section>
        <section className="small-right-grid "></section>
      </section>
    </section>
  );
};

export default GridSection;
