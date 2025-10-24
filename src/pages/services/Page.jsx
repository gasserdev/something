import React from "react";
import style from "./index.module.css";
import Reactangle from "../../components/Rectangle-bg";
import { FaBus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import Card from "./Card";

const data = {
  cards: [
    {
      title: "School Bus Booking",
      text: "Reserve your seat easily and get instant confirmation for pickup and drop-off times.",
      btn: "Book Now",
      href: "/bus",
      icon: FaBus,
    },
    {
      title: "Information Search",
      text: "Quickly find student and teacher info, including contact details and profiles.",
      btn: "Start Search",
      href: "/search",
      icon: CiSearch,
    },
  ],
};
function Page() {
  return (
    <main
      style={{ position: "relative", minHeight: "100dvh", overflow: "hidden" }}
      className={style.main}
    >
      <div
        className=" text-center"
        style={{ position: "relative", zIndex: "1" }}
      >
        <Reactangle />
        <div className="container py-5">
          <h1 className="text-light fw-bold mb-5">
            School Electronic Services
          </h1>

          <div className="row g-4 justify-content-center">
            {data.cards.map((item, idx) => {
              return (
                <Card
                  key={idx + item.text + item.title}
                  href={item.href}
                  title={item.title}
                  text={item.text}
                  btn={item.btn}
                  icon={<item.icon className={style.icon} />}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
