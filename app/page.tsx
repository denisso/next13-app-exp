// import styles from "./page.module.css";
import Link from "next/link";
import style from "./page.module.scss"
export default function Home() {
  return (
    <>
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
    </>
  );
}
