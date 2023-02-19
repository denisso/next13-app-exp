// import "server-only";

interface IfetchData {
  (id: string): Promise<{ data: { [key: string]: any } }>;
}

export const fetchData: IfetchData = (id) =>
  new Promise(async (resolve) => {
    let data = null;
    try {
      const response = await fetch("http://localhost:3001/users/" + id, {
        next: { revalidate: false },
        cache: "force-cache",
      });
      data = await response.json();
    } catch (e) {
      if (typeof e === "string") {
        data = { error: e.toUpperCase() };
      } else if (e instanceof Error) {
        data = { error: e.message };
      }
    }

    resolve({ data });
  });
