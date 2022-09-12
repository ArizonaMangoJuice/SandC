import React from "react";

export const SecondSection = () => {
  return (
    <section className="second-section-container">
      <section className="second-section">
        <section className="second-section-half left-half">
          <h4 className="p-title">
            Colorado Home Cleaning Services You Can See and Feel
          </h4>
          <p className="second-section-p">
            We all feel busy, but we don{"'"}t have enough time. At S {"&"} C
            Housekeeping, we go beyond just cleaning your home - we put the
            "extra" in your ordinary. Our cleaning service is designed to give
            your home the clean, fresh feel you desire. We have years of
            experience working in homes like yours, and we know how to make your
            life easier by taking care of the cleaning for you.
          </p>
        </section>
        <section className="second-section-half relative">
          <video
            src="https://joy.videvo.net/videvo_files/video/free/2020-11/large_watermarked/201010_06_Family_4k_034_preview.mp4"
            className="second-section-video"
            width="750"
            height="500"
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          ></video>
        </section>
      </section>
      <section className="second-section"></section>
    </section>
  );
};

export default SecondSection;
