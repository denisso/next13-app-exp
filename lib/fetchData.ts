interface IfetchData {
  (id: string): Promise<{ [key: string]: any }>;
}

export const fetchData: IfetchData = (id) =>
  new Promise(async (resolve) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    resolve({});
  });
