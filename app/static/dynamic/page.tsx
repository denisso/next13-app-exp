import moment from "moment";

export default function Page() {
  return (
    <div>
      <div>Page Dynamic: generated at {moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      <div>
        <pre>
          <code>{`export const dynamic = "force-dynamic";`}</code>
        </pre>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";