import "./globals.css";
import Link from "next/link";
import styles from "./layout.module.scss";

/**
 * https://beta.nextjs.org/docs/guides/seo
 * https://beta.nextjs.org/docs/api-reference/metadata
 */

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

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
        <div>
          <nav className={styles.nav}>
            <div className={styles.link}>
              <Link href={"/"}>Home</Link>
            </div>
            <div className={styles.link}>
              <Link href={"/blog"}>Blog</Link>
            </div>
            <div className={styles.link}>
              <Link href={"/about"}>About</Link>
            </div>
            <div className={styles.link}>
              <Link href={"/account"}>Account</Link>
            </div>
          </nav>
        </div>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
