import React from "react";

const Designed = () => {
  return (
    <article className="designed">
      <section className="container">
        <h2 className="designed__title">Designed for the future</h2>
        <div className="designed__container">
          <div className="designed__img">
            <img
              src="./images/illustration-editor-desktop.svg"
              className="designed__img--desk"
            />
            <img
              src="./images/illustration-editor-mobile.svg"
              className="designed__img--mob"
            />
          </div>
          <ul className="designed__content">
            <li className="designed__info">
              <h3 className="designed__info__title">
                Introducing an extensible editor
              </h3>
              <p className="designed__info__desc">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </li>
            <li className="designed__info">
              <h3 className="designed__info__title">
                Robust content management
              </h3>
              <p className="designed__info__desc">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Designed;
