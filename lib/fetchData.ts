import "server-only";

interface IfetchData {
  (id: string): Promise<string>;
}

type TCache = {
  [key: string]: string;
};

const cache: TCache = {};

export const fetchData: IfetchData = (id) =>
  new Promise(async (resolve) => {
    let data = "";
    try {
      if (cache[id]) {
        data = cache[id];
      } else {
        const response = await fetch("http://localhost:3001/users/" + id, {
          next: { revalidate: false },
          cache: "force-cache",
        });
        data = JSON.stringify(await response.json());
        cache[id] = data;
      }
    } catch (e) {
      if (typeof e === "string") {
        data = `Error: ${e.toUpperCase()} `;
      } else if (e instanceof Error) {
        data = `Error: ${e.message}`;
      }
    }

    resolve(data);
  });
