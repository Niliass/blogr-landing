import React from "react";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__info">
          <h1 className="intro__title">A modern publishing platform</h1>
          <p className="intro__desc">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className="intro__btns">
          <a href="#" className="start__btn">
            Start for Free
          </a>
          <a href="#" className="more__btn">
            Learn More
          </a>
        </div>
      </div>
      <div className="intro__bg">
        <img
          src="./images/bg-pattern-intro-desktop.svg"
          className="intro__bg--desk"
        />
        <img
          src="./images/bg-pattern-intro-mobile.svg"
          className="intro__bg--mob"
        />
      </div>
    </div>
  );
};

export default Intro;
