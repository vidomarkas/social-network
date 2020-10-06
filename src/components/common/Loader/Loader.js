import React from "react";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div>
      <div className={s.card}></div>
      <div className={s.card}></div>
      <div className={s.card}></div>
      <div className={s.card}></div>
      <div className={s.card}></div>
    </div>
  );
};

export default Loader;
