import { Suspense } from "react";
import { Spinner } from "@/components/Spinner";
import { ServerComponent } from "@/components/ServerComponent";
import { ClientComponent } from "@/components/ClientComponent";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <ClientComponent id={params.id}>
      <section>
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error Server Component */}
          <ServerComponent delay={1} />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error Server Component */}
          <ServerComponent delay={2} />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error Server Component */}
          <ServerComponent delay={3} />
        </Suspense>
      </section>
    </ClientComponent>
  );
}
export const dynamic = "force-dynamic";
