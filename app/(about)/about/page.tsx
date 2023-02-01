import styles from "../../page.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.link} legacyBehavior>
        <a className={styles.button}>Goto to Home</a>
      </Link>
    </main>
  );
}
