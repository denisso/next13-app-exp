"use client";
import React from "react";
import styles from "./FormFeedback.module.scss";

export const FormFeedback = () => {
  const [submit, setSetSuubmit] = React.useState(false);
  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSetSuubmit(true);
  }, []);

  return (
    <div className={styles.formContainer}>
      <label>Form Feedback</label>
      {submit ? (
        <div>✓ Feedback sent!</div>
      ) : (
        <>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input />
            <button className={styles.button} >Submit</button>
          </form>
        </>
      )}
    </div>
  );
};
