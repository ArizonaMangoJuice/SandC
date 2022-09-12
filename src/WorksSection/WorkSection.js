import React from "react";

export const WorkSection = () => {
  return (
    <section className="WorkSection">
      <section className="work-left section-relative">
        <img
          className="work-left-image"
          src="https://images.pexels.com/photos/8671138/pexels-photo-8671138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <section className="work-left-container">
          <p className="work-left-container-p">Worry Free</p>
          <p className="work-left-container-p cursive">Guarantee</p>
        </section>
      </section>
      <section className="work-right">
        <img
          src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg"
          alt=""
        />
        <h4>Return Home to More</h4>
        <p className="">
          S {"&"} C House Keeping will handle all of your cleaning needs, regardless
          of whether they are general or more specialized. We're committed to
          giving you a top-notch cleaning service so you can pay attention to
          the things that really important. By offering a worry-free guarantee
          for your living space, we take care of you. We want to make sure you
          feel safe and comfortable since we are sure of the work we accomplish.
          After our cleaning service in Pueblo, if you are not happy with the
          results, just let us know within 24 hours and we will come back to
          make it right.
        </p>
      </section>
    </section>
  );
};

export default WorkSection;
