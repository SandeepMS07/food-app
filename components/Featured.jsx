import React from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  // const [index,  setindex] = useState(0)
  const images = [
    "/img/featured22.png",
    "/img/featured10.png",
    "/img/featured30.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
      <div className={styles.wrapper}>
        {images.map((img, ind) => (
          <div className={styles.imgContainer} key={ind}>
            <Image src={img} alt="" layout="fill" objectFit="contain"/>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src="/img/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
