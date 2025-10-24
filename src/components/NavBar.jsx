import React from "react";

function NavBar({ title = "Edu School" }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary w-100  navbar-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            {title}
          </a>

          <button
            className="navbar-toggler noborder"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-none d-lg-flex"
            id="mainNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">
                  Contact
                </a>
              </li>
              <li className="">
                <a
                  className=" btn btn-danger p-2 mx-3 text-light"
                  href="/login"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end bg-primary text-white"
        tabIndex="-1"
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="mobileNavLabel">
            {title}
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </li>
            <li className="">
              <a className=" btn btn-danger p-2 text-light" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
