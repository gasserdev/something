import React from "react";
// import style from "./index.module.css";
import style from "./index.module.css";
import Reactangle from "../../components/Rectangle-bg";
const data = {
  cards: [
    {
      name: "Gasser Zayed",
      low: "Responsible / For inquiries and contact",
      phone: "0121019874",
      facebook: "FACEBOOK_URL_1",
      github: "https://github.com/gasserdev",
    },
    {
      name: "Abdelwahab Anwar",
      low: "Responsible / For inquiries and contact",
      phone: "01149579275",
      facebook: "FACEBOOK_URL_2",
      github: "https://github.com/aa366",
    },
  ],
};
function Page() {
  function coptToClipboared(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <main className={style.main}>
      <Reactangle />
      <div className="container text-center py-5 ">
        <h2 className={style.h2}>Contact Us</h2>
        <p className={` ${style.p} ${style.lead} mb-4 `}>
          Feel free to reach out to us!
        </p>
        <div className={` ${style.contacts} d-flex  gap-4`}>
          {data.cards.map((item, idx) => {
            return (
              <div
                className={` ${style.contactCard} p-3 border rounded shadow-sm`}
                style={{ backdropFilter: "blur(10px)" }}
                key={item.facebook + item.low + idx}
              >
                <div
                  className={` ${style.avatar} bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center`}
                  style={{ width: "50px", height: "50px" }}
                >
                  {"P" + (idx + 1)}
                </div>
                <div className={` ${style.info} mt-2`}>
                  <p className={` ${style.name} fw-bold mb-1`}>{item.name}</p>
                  <p className={` ${style.role} mb-2 `}>{item.low}</p>
                  <div className={` ${style.meta} d-flex gap-2 `}>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => {
                        coptToClipboared(item.phone);
                      }}
                    >
                      Copy Phone
                    </button>
                    <a
                      href={item.facebook}
                      target="_blank"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Facebook
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      className="btn w-75 btn-outline-dark btn-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Page;
