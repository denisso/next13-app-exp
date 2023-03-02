import { ReactNode } from "react";
import moment from "moment";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Layout Static: generated at {moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      <div>
        <pre>
          <code>{`export const dynamic = "force-static";`}</code>
        </pre>
      </div>
      <div>{children}</div>
    </div>
  );
}

export const dynamic = "force-static";
