import styles from "./page.module.scss";

export default function template({children}:{children: React.ReactNode}) {
  return (
    <main className={styles.main}>
      <div className={styles.box}>{children}</div>
    </main>
  );
}