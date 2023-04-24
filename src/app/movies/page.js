import React from "react";
import Moviecard from "../components/Moviecard";
import styles from "@/app/styles/common.module.css";

const Movies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "542f3ae7b6mshbc2b2d1d94c3e27p1fd065jsn71c41028217a",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((ele) => {
              return <Moviecard key={ele.id} {...ele} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
