export type TData = Partial<{
  id: string;
  payload: number;
  error: boolean | string;
}>;

interface IfetchData {
  (url: string): Promise<TData>;
}

export const fetchData: IfetchData = (url) =>
  new Promise(async (resolve) => {
    let data: TData = {};
    try {
      const response = await fetch(url, {
        next: { revalidate: 60 },
        // cache: "force-cache",
      });
      data = await response.json();
    } catch (e) {
      if (typeof e === "string") {
        data.error = e;
      } else if (e instanceof Error) {
        data.error = JSON.stringify(e);
      } else {
        data.error = true;
      }
    }

    resolve(data);
  });
