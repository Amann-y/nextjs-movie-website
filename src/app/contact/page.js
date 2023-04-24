import React from "react";
import Contactcard from "../components/Contactcard";
import styles from "./contact.module.css";
import Contactform from "../components/Contactform";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>;
        <Contactcard />
        <section className={styles.contact_section}>
          <h2>We'd love to hear from You</h2>
          <Contactform />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7720962.4445920745!2d75.21597803302494!3d19.107603567479906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1682328519368!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default Contact;
