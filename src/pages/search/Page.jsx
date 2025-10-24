import React from "react";
import Reactangle from "../../components/Rectangle-bg";

function Page() {
  return (
    <main
      style={{
        background: "linear-gradient(180deg,#071024 0%, #071831 100%)",
        minHeight: "100dvh",
        position: "relative",
      }}
    >
      <Reactangle />
      <div className="container pt-5">
        <h1 className="text-center text-light mb-4">
          Search for Students and Teachers
        </h1>

        <div className="card p-4">
          <h2 className="text-center text-primary mb-4">
            Find Any Student or Teacher
          </h2>

          <div className="mb-3">
            <label htmlFor="search" className="form-label fw-bold">
              Enter name to search:
            </label>
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Example: Ahmed Mohamed Ali"
            />
          </div>

          <div
            className="no-results text-center text-danger fw-bold"
            id="no-results"
          >
            No matching results found
          </div>

          <div className="text-center mt-4" id="result-card">
            <table
              className="table table-borderless text-light mt-3"
              id="results-table"
            ></table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
