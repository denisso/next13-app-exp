import { Layout as LayoutComponent, TProps } from "@/components/layout";

export default function Layout({ children, params }: TProps) {
  return (
    <>
      <LayoutComponent prefix="dynamicparams-false" params={params}>
        <div>
          <h2>Layout Dynamic Params false</h2>
          <div>export const dynamicParams = false;</div>
          <div>
            Dynamic segments not included in generateStaticParams will return a
            404.
          </div>
        </div>
      </LayoutComponent>
      <section>{children}</section>
    </>
  );
}
export const dynamicParams = false;
