import Link from "next/link";

export default function Blog() {
  return (
    <section>
      <div>Blog</div>
      <div>
        <Link href={"/"}>Goto Home</Link>
      </div>
    </section>
  );
}
