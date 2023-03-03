import React from "react";

const Laptop = () => {
  return (
    <section className="laptop">
      <div className="container">
        <div className="laptop__container">
          <div className="laptop__img">
            <img
              src="./images/illustration-laptop-desktop.svg"
              className="laptop__img--desk"
            />
            <img
              src="./images/illustration-laptop-mobile.svg"
              className="laptop__img--mob"
            />
          </div>
          <ul className="laptop__content">
            <li className="laptop__info">
              <h3 className="laptop__info__title">Free, open, simple</h3>
              <p className="laptop__info__desc">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </li>
            <li className="laptop__info">
              <h3 className="laptop__info__title">Powerful tooling</h3>
              <p className="laptop__info__desc">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Laptop;
