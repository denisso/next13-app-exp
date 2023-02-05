"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <div className={styles.nav}>
      <div className={`${styles.link} ${pathname === "/" && styles.active}`}>
        <Link href={"/"}>Home</Link>
      </div>
      <div className={`${styles.link} ${pathname === "/blog" && styles.active}`}>
        <Link href={"/blog"}>Blog</Link>
      </div>
      <div className={`${styles.link} ${pathname === "/about" && styles.active}`}>
        <Link href={"/about"}>About</Link>
      </div>
      <div className={`${styles.link} ${pathname === "/account" && styles.active}`}>
        <Link href={"/account"}>Account</Link>
      </div>
    </div>
  );
};
