import "./globals.css";
import Link from "next/link";
import styles from "./layuot.module.scss";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className={styles.nav}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/client">
            Client
          </Link>
          <Link className={styles.link} href="/server">
            Server
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
