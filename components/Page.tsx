"use client";
import React from "react";
import styles from "./Page.module.scss";
import Link from "next/link";
import { counter } from "@/store/store";

export default function Page({ href }: { href: string }) {
  const [value, setValue] = React.useState(counter.value);
  const ref = React.useRef(true);
  React.useEffect(() => {
    if (ref.current) {
      ref.current = false;
      counter.value += 1;
      setValue(counter.value);
    }
  }, []);
  return (
    <main className={styles.main}>
      <div>
        <Link href={href} className={styles.link} legacyBehavior>
          <a className={styles.button}>Goto to {href}</a>
        </Link>
      </div>
      <div>
        Counter switch root layout without reload page: {value} 
      </div>
    </main>
  );
}
