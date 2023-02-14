import { Page as PageComponent, TProps } from "@/components/page";

export async function generateStaticParams() {
  return [{slug: "1"}, {slug: "2"}];
}

export default function Page(props: TProps) {
  return <PageComponent {...props} />;
}
export const dynamicParams = false;
