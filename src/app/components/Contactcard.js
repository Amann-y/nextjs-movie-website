import styles from "@/app/contact/contact.module.css";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const Contactcard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdEmail />{" "}
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected </p>
            <p className={styles.last_para}>response time: 72 hours </p>
            <Link href="https://amann-y.netlify.app/" target="_blank">
              {" "}
              Send Email <span>-&gt;</span>
            </Link>
          </div>

          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdVoiceChat />{" "}
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9 AM — 6 PM IST</p>
            <p className={styles.last_para}>Weekends: 9 AM — 5 PM IST</p>
            <Link href="https://amann-y.netlify.app/" target="_blank">
              {" "}
              Chat Now <span>-&gt;</span>
            </Link>
          </div>

          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdForum />{" "}
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected </p>
            <p className={styles.last_para}>response time: 72 hours </p>
            <Link
              href="https://amann-y.netlify.app/"
              target="_blank"
              className={styles.anchorLink}
            >
              {" "}
              Ask The Community <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
