"use client";
import styles from "./ClientComponent.module.scss";
import { Context } from "./ClientContext";
import React from "react";
import { TData } from "@/lib/fetchData";
import { EFetchSide } from "./types";
import { useRouter } from "next/navigation";

interface IuseTimer {
  (arg: { date?: number }): number;
}

const useTimer: IuseTimer = ({ date }) => {
  const [value, setValue] = React.useState(0);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    setTimer(Date.now());
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setTimer(Date.now());
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  React.useEffect(() => {
    if (date === undefined) return;
    const r = +date + 60000 - Date.now();
    if (r <= 0) setValue(0);
    else setValue(Math.floor((+date + 60000 - Date.now()) / 1000));
  }, [timer, date]);

  return value;
};

interface ICacheRevalidate {
  (arg: { data?: TData }): JSX.Element;
}

const CacheRevalidate: ICacheRevalidate = ({ data }) => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const prevPayload = React.useRef<number>(0);
  const isTimeDown = React.useRef(false);
  const timer = useTimer({ date: data?.payload });
  const [isRevalidate, setREvalidate] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const isReady = React.useRef(false);

  React.useEffect(() => {
    if (isPending) setMessage("Pending...");
  }, [isPending]);

  const revalidate = React.useCallback(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);

  React.useEffect(() => {
    // revalidation on init
    revalidate();
  }, [revalidate]);

  const handleRevalidate = () => {
    isReady.current = true;
    revalidate();
    if (timer <= 0) {
      // more than one revalidation may be required,
      // depends on when the cache in fetch is updated

      isTimeDown.current = true;
      if (data?.payload) {
        prevPayload.current = data?.payload;
      }
      setREvalidate(true);
    }
  };
  React.useEffect(() => {
    if (!data?.payload) return;

    const setMessageWrapper = (message: string) => {
      if (!isReady.current)
        setMessage(`Component loaded, please, push button"Check cache"`);
      else setMessage(message);
    };

    if (isTimeDown.current) {
      if (data?.payload === prevPayload.current) {
        revalidate();
      } else {
        setREvalidate(false);
        isTimeDown.current = false;
        prevPayload.current = data?.payload;
        setMessageWrapper(`Route is refreshed. Press button "Check cache"`);
      }
    } else {
      if (data?.payload !== prevPayload.current) {
        prevPayload.current = data?.payload;
        setMessageWrapper(`✖ Value "NOT" from cache`);
      } else {
        setMessageWrapper(`✔ Value from cache`);
      }
    }
  }, [data, revalidate]);

  React.useEffect(() => {
    if (timer <= 0) {
      setMessage(`Time Dowm, please, push button "Refresh"`);
    }
  }, [timer]);
  return (
    <div className={styles.container}>
      <button className={styles.button}
        {...(isPending || isRevalidate ? { disabled: true } : {})}
        onClick={handleRevalidate}
      >
        {timer <= 0 ? "Refresh route" : "Check cache"}
      </button>
      <span className={styles.timer}>{timer > 0 ? timer : "Time down"}</span>
      <div>Value: {data?.payload}</div>
      <div>Message:</div>
      <span>{message}</span>
    </div>
  );
};

interface IClientComponent {
  (args: { id: string; data?: TData; side: EFetchSide }): JSX.Element;
}

export const ClientComponent: IClientComponent = function ({ data, id, side }) {
  const context = React.useContext(Context);
  
  React.useEffect(() => {
    // for setting elements in Nav component
    context?.setId(id);
    context?.setFetchSide(side);
  }, [context, id, side]);

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
        <CacheRevalidate data={data} />
      </section>
    </article>
  ) : (
    <>Index Page</>
  );
};
