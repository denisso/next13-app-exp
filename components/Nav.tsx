"use client";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.scss";

enum Enum {
  Home = "/",
  Static = "/static",
  Dynamic = "/static/dynamic",
  Refresh = "refresh",
}

const nav: Array<{ text: string; path: Enum }> = [
  { text: "Home", path: Enum.Home },
  { text: "Static", path: Enum.Static },
  { text: "Dynamic", path: Enum.Dynamic },
];

export const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();

  const handlerRefresh = (arg: Enum) => {
    if (arg === Enum.Refresh) {
      startTransition(() => {
        router.refresh();
      });
    } else {
      startTransition(() => {
        router.push(arg);
      });
    }
  };
  return (
    <div className={styles.container}>
      {nav.map((e, i) => (
        <Fragment key={e.text}>
          <button
            className={`${styles.buttonNav} ${pathname === e.path && styles.active}`}
            {...(isPending ? { disabled: true } : {})}
            onClick={() => handlerRefresh(e.path)}
          >
            {e.text}
          </button>
          {i < nav.length - 1 && <div>/</div>}
        </Fragment>
      ))}
      <div>
        <button
          onClick={() => handlerRefresh(Enum.Refresh)}
          className={styles.button}
          {...(isPending ? { disabled: true } : {})}
        >
          Refresh current segment
        </button>
      </div>
    </div>
  );
};
