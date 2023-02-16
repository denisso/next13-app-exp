import moment from "moment";

interface IfetchData {
  (id: string): Promise<{ data: string }>;
}

export const fetchData: IfetchData = (id) =>
  new Promise(async (resolve) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    resolve({
      data: `data for page with id: ${id} at the ${moment().format(
        "MMMM Do YYYY, h:mm:ss a"
      )}`,
    });
  });
