"use client";

import styles from "./ClientComponent.module.scss";
import { Context } from "./ClientContext";
import React from "react";
import { TData } from "@/lib/fetchData";
import { EFetchSide } from "./types";

interface IClientComponent {
  (args: { id: string; data?: TData; side: EFetchSide }): JSX.Element;
}

export const ClientComponent: IClientComponent = function ({ data, id, side }) {
  const context = React.useContext(Context);
  const currentId = React.useRef("");

  React.useEffect(() => {
    context?.setId(id);
    context?.setFetchSide(side);

    if (!data?.payload || data?.error) return;

    if (!context?.data?.[side]?.[id]) {
      // id not exist in cache, and should be assigned to cache
      if (context?.fetchSide === side && id !== "/") {
        currentId.current = id;
        Object.assign(context?.data?.[side], {
          [id]: { value: data?.payload, count: 1 },
        });
        context?.setData({ ...context?.data });
      }
    } else {
      if (id === currentId.current) return;
      currentId.current = id;
      const e = context?.data?.[side]?.[id];
      Object.assign(context?.data?.[side]?.[id], {
        value: e?.value,
        count: e?.count + 1,
      });
      context?.setData({ ...context?.data });
    }
  }, [context, id, data, side]);

  const value = context?.data?.[side]?.[id]?.value;
  const count = context?.data?.[side]?.[id]?.count || 0;

  return data?.error ? (
    <>Error: {data.error}</>
  ) : id !== "/" ? (
    <article>
      <header>
        <h2 className={styles.title}>
          {side} side id: {id}
        </h2>
      </header>
      <section className={styles.content}>
        <div>
          <div>
            For id {id} count of requests is {count}
          </div>
          <div>Value for first fetch: {value}</div>
          <div>
            Value for current fetch № {count}: {data?.payload}{" "}
            {count > 1 &&
              (value === data?.payload
                ? "This value from cache"
                : "This value not from cache")}
          </div>
        </div>
      </section>
    </article>
  ) : (
    <>Index Page</>
  );
};
