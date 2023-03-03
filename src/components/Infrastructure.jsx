import React from "react";

const Infrastructure = () => {
  return (
    <div className="infrastructure">
      <div className="container">
        <img
          src="./images/illustration-phones.svg"
          className="infrastructure__img"
        />
        <div className="infrastructure__content">
          <h2 className="infrastructure__title">
            State of the Art Infrastructure
          </h2>
          <p className="infrastructure__desc">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      <div className="infrastructure__bg">
        <img
          src="./images/bg-pattern-circles.svg"
          className="infrastructure__bg--circles"
        />
      </div>
    </div>
  );
};

export default Infrastructure;
