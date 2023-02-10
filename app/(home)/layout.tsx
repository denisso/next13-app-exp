import "../globals.css";
import style from "../layout.module.scss";

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
        <div style={{ textAlign: "center" }}>Next.js 13.1.7-canary on 2023/02/10</div>
        <header className={style.box}>Home Page Layout</header>
        {children}
      </body>
    </html>
  );
}
