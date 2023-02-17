import Link from "next/link";
import styles from "./Page.module.scss";
import { ClientComponent } from "./ClientComponent";
// import { data } from "@/data";

export const Page = ({
  headerText,
  children,
}: {
  headerText: string;
  children?: React.ReactNode;
}) => {
  // data.value = "" + Date.now();
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>{headerText}</h2>
      <div>Data: {process.env.VAL}</div>
      <div>
        <ClientComponent />
      </div>
      <div>
        {children ? (
          children
        ) : (
          <Link href={"/"} legacyBehavior>
            <a className={styles.link}>Go to Home</a>
          </Link>
        )}
      </div>

    </section>
  );
};
