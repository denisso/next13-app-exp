"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Nav.module.scss";
import { Context } from "./ClientContext";
import { EFetchSide } from "./types";

const arr = ["/", ...Array.from(Array(15), (x, index) => index + 1)];

export const Nav = () => {
  const router = useRouter();
  const context = React.useContext(Context);
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    context?.setPending(isPending);
  }, [isPending, context]);

  const pushUrlPath = ({ id, side }: { id?: string; side?: EFetchSide }) => {
    if (!id || !side) return;
    const urlPath =
      id === "/"
        ? `${window.location.origin}`
        : `${window.location.origin}/${side}/${id}`;
    startTransition(() => {
      router.push(urlPath);
    });
  };
  const handleChangeId = (e: React.ChangeEvent<HTMLSelectElement>) => {
    context?.setId(e.target.value);
    pushUrlPath({ id: e.target.value, side: context?.fetchSide });
  };

  const handleChangeFetchSide = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.setFetchSide(e.target.value as EFetchSide);
    pushUrlPath({ id: context?.id, side: e.target.value as EFetchSide });
  };
  return (
    <div className={styles.nav}>
      Choose User ID
      <select
        onChange={handleChangeId}
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
          {...(isPending || context?.id === "/" ? { disabled: true } : {})}
        />
        <span>server or</span>
        <input
          type="radio"
          name="fetchside"
          value={EFetchSide.client}
          checked={context?.fetchSide === EFetchSide.client}
          onChange={handleChangeFetchSide}
          {...(isPending || context?.id === "/" ? { disabled: true } : {})}
        />
        <span>client fetch function</span>
      </div>
    </div>
  );
};
