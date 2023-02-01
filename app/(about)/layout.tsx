import "../globals.css";
import style from "../layout.module.scss"
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
        <header className={style.box}>About Page Layout</header>
        {children}
      </body>
    </html>
  );
}
