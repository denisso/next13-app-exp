interface IfetchData {
  (id: string): Promise<string>;
}

export const fetchData: IfetchData = (id) =>
  new Promise(async (resolve) => {
    let data = "";
    try {
      const response = await fetch("http://localhost:3001/users/" + id, {
        // next: { revalidate: false },
        cache: "force-cache",
      });
      data = JSON.stringify(await response.json());
    } catch (e) {
      if (typeof e === "string") {
        data = `error: ${e.toUpperCase()}`;
      } else if (e instanceof Error) {
        data = ` error: ${e.message}`;
      }
    }

    resolve(data);
  });
