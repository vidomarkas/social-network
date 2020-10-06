import React from "react";
import styles from "./formControl.module.scss";

export const Textarea = (props) => {
  const { input } = props;

  return (
    <div>
      <textarea
        {...input}
        className={
          props.meta.touched && props.meta.error ? styles.redBorder : null
        }
      />
      {props.meta.touched &&
        ((props.meta.error && (
          <span className={styles.error}>{props.meta.error}</span>
        )) ||
          (props.meta.warning && (
            <span className={styles.warning}>{props.meta.warning}</span>
          )))}
    </div>
  );
};
export const Input = ({ input, ...props }) => {
  return (
    <div>
      <input
        {...input}
        {...props}
        className={
          props.meta.touched && props.meta.error ? styles.redBorder : null
        }
      />
      {props.meta.touched &&
        ((props.meta.error && (
          <span className={styles.error}>{props.meta.error}</span>
        )) ||
          (props.meta.warning && (
            <span className={styles.warning}>{props.meta.warning}</span>
          )))}
    </div>
  );
};
