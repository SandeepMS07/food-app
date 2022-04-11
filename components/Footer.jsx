import styles from "../styles/Footer.module.css";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" priority="true" alt="" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZ, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Bengaluru, 577201
            <br /> (+91) 92358 56328
          </p>
          <p className={styles.text}>
            2356 K. Lavelle Road #235.
            <br /> Bengaluru, 560064
            <br /> (+91) 96584 95684
          </p>
          <p className={styles.text}>
            1614 E. SRS St #104.
            <br /> Chitradurga, 577201
            <br /> (+91) 91106 15863
          </p>
          <p className={styles.text}>
            1614 W. BIET St #125.
            <br /> Davanagere, 577217
            <br /> (+91) 95903 8546
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY- SUNDAY
            <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
