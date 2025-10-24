import React from "react";
import styles from "./style.module.css";
import NavBar from "../../../components/NavBar";
import { useRouteError } from "react-router";
function Page() {
  const error = useRouteError();
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.text}>
        <h2>Something went Wrong</h2>
        <h3 className={styles.msg}>{error.message}</h3>
      </div>
    </main>
  );
}

export default Page;
