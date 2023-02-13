import Link from "next/link";
import styles from "./page.module.scss";

const Page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  if (searchParams?.error) {
    throw Error("Custom server error");
  }

  return (
    <Link
      href={{
        pathname: "/server",
        query: { error: "true" },
      }}
      className={styles.navItem}
    >
      Get error
    </Link>
  );
};
export default Page;
export const dynamic = "force-dynamic";
