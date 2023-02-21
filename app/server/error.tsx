"use client";
import { useRouter } from "next/navigation";
import styles from "../error.module.scss";
import { startTransition } from "react";

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
      <h2>Server error boundary</h2>
      <div>{error.message}</div>
      <div>
        <button
          className={styles.navItem}
          onClick={async () => {
            const url = new URL(window.location.href);
            router.push(url.origin + url.pathname);
            router.refresh();
            startTransition(() => reset());
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
