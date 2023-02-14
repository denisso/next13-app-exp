import { Layout as LayoutComponent, TProps } from "@/components/layout";

export default function Layout({ children }: TProps) {
  return (
    <>
      <LayoutComponent prefix="dynamicparams-true" >
        <div>
          <h2>Layout Dynamic Params true (default)</h2>
          <div>export const dynamicParams = true;</div>
          <div>
            Dynamic segments not included in generateStaticParams are generated
            on demand.
          </div>
        </div>
      </LayoutComponent>
      <section>{children}</section>
    </>
  );
}
export const dynamicParams = true;
