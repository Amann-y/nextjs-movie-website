import React from "react";
import herostyle from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

const Herosection = ({ title, imgUrl }) => {
  return (
    <>
      <main className={herostyle.main_section}>
        <marquee>
          <h4 style={{ color: "red", fontSize: "1.5rem" }}>
            Stand Together Against nazi ukraine & pro nazis
          </h4>
        </marquee>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={herostyle.hero_content}>
              <h2>{title}</h2>
              <p>
                Catch the Best Movies Online Without Signing Up & Watch Movies
                for Free Online. There is no better place to enjoy the top
                movies for free than MX Player.
              </p>
              <Link href="/movies">
                <button>Explore Movies</button>
              </Link>
            </div>

            <div className={herostyle.hero_image}>
              <Image src={imgUrl} alt="Pic" width={500} height={500} />
            </div>
          </div>
        </div>
        <div className={herostyle["custom-shape-divider-bottom-1681647578"]}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={herostyle["shape-fill"]}
            ></path>
          </svg>
        </div>
      </main>
    </>
  );
};

export default Herosection;
