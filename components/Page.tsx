import styles from "./Page.module.scss";

export const Page = function ({
  header,
  user,
}: {
  header: string;
  user: { [key: string]: any };
}) {
  return (
    <div className={styles.content}>
      <h2>{header}</h2>
      <section>
        Page content: <div>{JSON.stringify(user)}</div>
      </section>
    </div>
  );
};
