"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Nav.module.scss";
import { Context } from "./ClientContext";

const arr = ["/", ...Array.from(Array(15), (x, index) => index + 1)];

export const Nav = () => {
  const router = useRouter();
  const context = React.useContext(Context);
  const [isPending, startTransition] = React.useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      router.push(`${window.location.origin}/${e.target.value}`);
    });
  };
  React.useEffect(() => {
    context?.setPending(isPending);
  }, [isPending, context]);
  return (
    <div className={styles.nav}>
      Choose User ID
      <select
        onChange={handleChange}
        value={context?.id}
        {...(isPending ? { disabled: true } : {})}
      >
        {arr.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    </div>
  );
};
