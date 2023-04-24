import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

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
  const main_data = data[0].details;
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        NetFlix \<span>{main_data.type}</span>
      </h2>
      <div>
        <Image
          src={main_data.backgroundImage.url}
          alt={main_data.title}
          width={600}
          height={300}
        />
      </div>
      <div>
        <h2>{main_data.title}</h2>
        <p>{main_data.synopsis}</p>
      </div>
    </div>
  );
};

export default page;
