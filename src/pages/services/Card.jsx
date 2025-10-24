import React from "react";

function Card({ title, text, btn, href, icon }) {
  return (
    <div className="col-md-5">
      <div className="card shadow-sm p-4 border-0 bg-light bg-opacity-75">
        <div className="icon mb-3">{icon}</div>
        <h3 className="fw-bold">{title}</h3>
        <p className="text-muted">{text}</p>
        <a href={href} className="btn btn-primary w-100">
          {btn}
        </a>
      </div>
    </div>
  );
}

export default Card;
