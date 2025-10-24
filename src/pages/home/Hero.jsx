import React from "react";
import style from "./index.module.css";
import Reactangle from "../../components/Rectangle-bg";
const data = {
  title: "Welcome to Edu School",
  text: ` We provide exceptional education that prepares students for a bright
          and successful future, inspired by the values of leadership.`,
  button: " Learn More",
};
function Hero() {
  return (
    <section
      id={style.home}
      class={` ${style.hero} py-5 position-relative text-white `}
      style={{ minHeight: "100vh" }}
    >
      <Reactangle />
      <div
        class="container hero-content text-center position-relative"
        style={{ zIndex: "1" }}
      >
        <h1 class="display-5 fw-bold">{data.title}</h1>
        <p class="lead text-center text-light mb-4">{data.text}</p>
        <a
          href="#about"
          id="learnMoreBtn"
          class={` ${style.ctaButton}  btn-primary btn-lg `}
        >
          {data.button}
        </a>
      </div>
    </section>
  );
}

export default Hero;
