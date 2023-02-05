import "./globals.css";
import Link from "next/link";
import styles from "./layout.module.scss";
import { Nav } from "@/components/Nav";
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
        <div className={styles.container}>
          <h1>Layout Content</h1>
          <Nav/>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
