type TItem = { slug: number; };

interface IgetPosts {
  (num?: number): Promise<Array<TItem>>;
}

export const getPosts: IgetPosts = (num = 3) =>
  new Promise((resolve) => {
    const arr: Array<TItem> = [];
    for (let i = 0; i < num; num++) {
      arr.push({ slug: i });
    }
    resolve(arr);
  });

