import React, { useState, useEffect } from "react";
import Data from "../dataNav";
import Navigation from "./Navigation";

const Header = () => {
  const [data, setData] = useState(Data);
  const [state, setState] = useState(false);
  useEffect(() => {
    document.querySelectorAll(".nav__category__title").forEach((btn) => {
      btn.addEventListener("click", handleCategory);
    });
  }, []);
  const handleCategory = (e) => {
    const category = e.currentTarget.parentElement;
    if (category.classList.contains("show"))
      return category.classList.remove("show");
    const categories = document.querySelectorAll(".nav__category");
    const links = [...category.querySelectorAll(".nav__category__link")];
    const linkHeight = links[0].clientHeight;
    categories.forEach((category) => {
      category.classList.remove("show");
    });
    category.classList.add("show");
    document
      .querySelector(".show .nav__category__links")
      .style.setProperty("--height", `${linkHeight * links.length + 32}px`);
  };
  return (
    <header>
      <div className="container">
        <a href="/" className="header__logo">
          <img src="./images/logo.svg" alt="blogr logo" />
        </a>
        <button
          className={`nav__btn ${state ? "active" : ""}`}
          onClick={() => setState(!state)}
        >
          <img
            src={`./images/icon-${state ? "close" : "hamburger"}.svg`}
            className="nav__icon"
          />
        </button>
        <nav>
          <Navigation data={data} cls={"nav"} />
          <hr className="line__break" />
          <div className="header__btns">
            <a href="#" className="login__btn">
              Login
            </a>
            <a href="#" className="sign__btn">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
