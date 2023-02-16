import Link from "next/link";
import styles from "./Page.module.scss";
export const Page = ({
  headerText,
  children,
}: {
  headerText: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>{headerText}</h2>
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
