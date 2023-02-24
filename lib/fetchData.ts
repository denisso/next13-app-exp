export type TData = Partial<{
  id: string;
  payload: string;
  error: boolean;
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
      data.error = true;
    }

    resolve(data);
  });
