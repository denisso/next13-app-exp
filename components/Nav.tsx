import Link from "next/link";
import styles from "./Nav.module.scss";

export const Nav = () => (
  <>
    <nav className={styles.nav}>
      <div className={styles.link}>
        <Link href={"/"}>Home</Link>
      </div>
      <div className={styles.link}>
        <Link href={"/streaming"}>Streaming</Link>
      </div>
      <div className={styles.link}>
        <Link href={"/redirect"}>Redirect to Goto Home</Link>
      </div>
      <div className={styles.link}>
        <Link href={"/gotohome"}>Goto Home</Link>
      </div>
    </nav>
  </>
);
