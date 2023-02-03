import styles from "./Page.module.scss";

export const Page = ({

  header,
}: {

  header: string;
}) => (
  <div className={styles.content}>
    <h2>{header}</h2>
    <section>
      Page content
    </section>
  </div>
);
