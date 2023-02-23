"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Nav.module.scss";
import { Context, EFetchSide } from "./ClientContext";

const arr = ["/", ...Array.from(Array(15), (x, index) => index + 1)];

export const Nav = () => {
  const router = useRouter();
  const context = React.useContext(Context);
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    context?.setPending(isPending);
  }, [isPending, context]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const urlPath =
      e.target.value === "/"
        ? `${window.location.origin}`
        : `${window.location.origin}/${context?.fetchSide}/${e.target.value}`;
    startTransition(() => {
      router.push(urlPath);
    });
  };

  const handleChangeFetchSide = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.setFetchSide(e.target.value as EFetchSide);
  };
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
      <div className={styles.clientServer}>
        <span>Select</span>
        <input
          type="radio"
          name="fetchside"
          value={EFetchSide.server}
          checked={context?.fetchSide === EFetchSide.server}
          onChange={handleChangeFetchSide}
        />
        <span>server or</span>
        <input
          type="radio"
          name="fetchside"
          value={EFetchSide.client}
          checked={context?.fetchSide === EFetchSide.client}
          onChange={handleChangeFetchSide}
        />
        <span>client fetch function</span>
      </div>
    </div>
  );
};
