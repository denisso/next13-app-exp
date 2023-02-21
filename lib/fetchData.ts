import moment from "moment";

interface IfetchData {
  (delay: number): Promise<{ data: string }>;
}

export const fetchData: IfetchData = (delay) =>
  new Promise(async (resolve) => {
    await new Promise((resolve) => setTimeout(resolve, delay * 1000));
    resolve({
      data: `Content loaded with a delay: ${delay} at the ${moment().format(
        "MMMM Do YYYY, h:mm:ss a"
      )}`,
    });
  });