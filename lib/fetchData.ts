export type TData = Partial<{
  id: string;
  payload: string;
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
        cache: "force-cache",
      });
      data = await response.json();
    } catch (e) {
      if (typeof e === "string") {
        data.error = `error: ${e.toUpperCase()}`;
      } else if (e instanceof Error) {
        data.error = ` error: ${e.message}`;
      } else {
        data.error = true;
      }
    }

    resolve(data);
  });
