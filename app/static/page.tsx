import moment from "moment";

export default function Page() {
  return (
    <div>
      <div>Page Static: generated at {moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      <div>
        <pre>
          <code>{`export const dynamic = "force-static";`}</code>
        </pre>
      </div>
    </div>
  );
}

export const dynamic = "force-static";
