import React from "react";
import style from "./index.module.css";

const data = {
  title: "About Our School",
  text: ` Since its establishment, Edu School has been dedicated to providing
            a top-quality education that nurtures creativity, critical thinking,
            and personal growth. Our teachers strive to create a supportive and
            inspiring environment where every student can reach their full
            potential. We focus on academic excellence while promoting values
            such as respect, responsibility, and teamwork, preparing our
            students to succeed in the modern world.`,
};

function About() {
  return (
    <section
      id={`${style.about} about `}
      class={` ${style.section} py-5 bg-light d-flex justify-center align-center `}
      style={{ minHeight: "100vh" }}
    >
      <div class="container">
        <h2 class="fw-bold mb-3  mt-5 text-primary">{data.title}</h2>
        <p class="text-secondary">{data.text}</p>
      </div>
    </section>
  );
}

export default About;
