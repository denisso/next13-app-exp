"use client";
import styles from "./ClientComponent.module.scss";

export const ClientComponent = function ({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.content}>
      <h2>{header}</h2>
      <section>{children}</section>
    </div>
  );
};
