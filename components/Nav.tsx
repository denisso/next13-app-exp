"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Nav.module.scss";
import { Context } from "./ClientContext";

const arr = ["/", ...Array.from(Array(15), (x, index) => index + 1)];

export const Nav = () => {
  const router = useRouter();
  const context = React.useContext(Context);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    context?.setId(e.target.value);
    router.push(`${window.location.origin}/${e.target.value}`);
  };

  return (
    <div className={styles.nav}>
      Choose User ID
      <select onChange={handleChange} value={context?.id}>
        {arr.map((e) => (
          <option key={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};
