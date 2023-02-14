import moment from "moment";
export type TProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
interface IPage {
  (props: TProps): JSX.Element;
}

export const Page: IPage = (props) => {
  const timeNow= moment().format("MMMM Do YYYY, h:mm:ss a")
  return (
    <div>
      <h2>Page content</h2>
      <div>
        Params: {JSON.stringify(props.params)} date:{" "}
        {timeNow}
      </div>
    </div>
  );
};
