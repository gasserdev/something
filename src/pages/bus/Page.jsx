import React from "react";
import Reactangle from "../../components/Rectangle-bg";
function Page() {
  return (
    <main
      style={{
        background: "linear-gradient(180deg,#071024 0%, #071831 100%)",
        position: "relative",
        zIndex: "-5",
      }}
    >
      <Reactangle styles={{ zIndex: "-1" }} />
      <div
        className="container fw-bold pt-5 text-light pb-5"
        style={{ position: "relative" }}
      >
        <div>
          <h1 className="text-center">School Bus Booking</h1>
          <h2 className="text-center mb-4">Bus Seat Reservation Form</h2>
          <form id="busForm" noValidate>
            <div className="mb-3">
              <label htmlFor="student-name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                id="student-name"
                className="form-control"
                required
              />
              <div className="invalid-feedback">
                Please enter the student's name.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="grade" className="form-label">
                Grade
              </label>
              <select id="grade" className="form-select" required>
                <option value="">Select grade</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
              </select>
              <div className="invalid-feedback">Please select a grade.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Full Address
              </label>
              <textarea
                id="address"
                rows="3"
                className="form-control"
                required
              ></textarea>
              <div className="invalid-feedback">
                Please enter a valid address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="pickup-time" className="form-label">
                Pickup Time
              </label>
              <input
                type="time"
                id="pickup-time"
                className="form-control"
                required
              />
              <div className="invalid-feedback">Please select pickup time.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="dropoff-time" className="form-label">
                Dropoff Time
              </label>
              <input
                type="time"
                id="dropoff-time"
                className="form-control"
                required
              />
              <div className="invalid-feedback">
                Please select dropoff time.
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="agree"
                className="form-check-input"
                required
              />
              <label htmlFor="agree" className="form-check-label text-light">
                I agree to the terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>

            <button
              id="formBtn"
              type="submit"
              className="btn btn-primary w-100"
            >
              Book Seat Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Page;
