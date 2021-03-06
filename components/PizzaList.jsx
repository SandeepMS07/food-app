import styles from "../styles/PizzaList.module.css";
import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        atque aspernatur, sint pariatur consequatur, tempora a accusamus
        excepturi nihil expedita similique possimus repellendus? Reprehenderit
        veniam earum, ut reiciendis soluta adipisci.
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza)=> (
          <PizzaCard key={pizza._id} pizza={pizza}/>

          ))}
          
      </div>
    </div>
  );
};

export default PizzaList;
