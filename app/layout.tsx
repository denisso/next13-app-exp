import "./globals.css";
import Link from "next/link";
import style from "./layout.module.scss";

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
          <div className={style.nav}>
            <div className="link">
              <Link href={"/blog"}>Blog</Link>
            </div>
            <div className="link">
              <Link href={"/about"}>About</Link>
            </div>
            <div className="link">
              <Link href={"/account"}>Account</Link>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
