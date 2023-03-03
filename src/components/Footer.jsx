import React, { useState } from "react";
import Navigation from "./Navigation";
import Data from "../dataNav";

const Footer = () => {
  const [data, setData] = useState(Data);
  return (
    <footer>
      <div className="container">
        <a href="/" className="footer__logo">
          <img src="./images/logo.svg" alt="footer logo" />
        </a>
        <Navigation data={data} cls={"footer"} />
      </div>
    </footer>
  );
};

export default Footer;
