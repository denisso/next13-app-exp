"use client";
import { useRouter } from "next/navigation";
import styles from "../error.module.scss";

const wait = () =>
  new Promise((resolve) => setTimeout(() => resolve(true), 1000));

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <div>
      <h2>Server error boundary work properly</h2>
      <div>{error.message}</div>
      <div>
        <button
          className={styles.navItem}
          onClick={async () => {
            const url = new URL(window.location.href);

            router.push(url.origin + url.pathname);
            // i want make hard navigation and invalidate cache for server component rerender
            router.refresh(); // but throw error occurred in the <Router> component, cannot be catch with global error
            await wait(); // solution for Router error
            reset();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
