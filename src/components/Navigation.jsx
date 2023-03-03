import React from "react";

const Navigation = ({ data, cls }) => {
  return (
    <ul className={`${cls}__categories`}>
      {data &&
        data.map((category) => {
          return (
            <li className={`${cls}__category`} key={category.id}>
              <button className={`${cls}__category__title`}>
                <span>{category.title}</span>
              </button>
              <ul className={`${cls}__category__links`}>
                {category.links.map((link) => {
                  return (
                    <li key={link.id}>
                      <a href="#" className={`${cls}__category__link`}>
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
    </ul>
  );
};

export default Navigation;
