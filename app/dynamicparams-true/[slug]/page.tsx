import { Page, TProps } from "@/components/page";

export async function generateStaticParams() {
  return [{slug: "1"}, {slug: "2"}];
}

export default function PageComponent(props: TProps) {
  return <Page {...props} />;
}

export const dynamicParams = true;
