import React from "react";
import style from "./index.module.css";
import Reactangle from "../../components/Rectangle-bg";
function Page() {
  return (
    <main className={style.main}>
      {" "}
      <Reactangle />
      <div className={style.container} style={{ zIndex: "1" }}>
        <div className={` ${style.left} w-100 text-center bg-primary `}>
          <h1 className="center">Edu School</h1>
          <p>Where learning never ends</p>
        </div>

        <div className={style.right}>
          <h2>Welcome Back</h2>
          <form>
            <div className={style.formGroup}>
              <label for="email" className={style.label}>
                Email or Student ID
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email or ID"
                required
                className={style.input}
              />
            </div>
            <div className="form-group">
              <label for="password" className={style.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                className={style.input}
              />
            </div>
            <button
              id="login-btn"
              className={` ${style.button} btn btn-primary `}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Page;
