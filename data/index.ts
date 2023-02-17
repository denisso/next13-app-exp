type TData = {
  value: string;
};

export const data: TData = { value: "" };

Object.defineProperty(data, "value", {
  get() {
    if (typeof process.env.VAL !== "string") {
      process.env.VAL = "";
    }
    return process.env.VAL;
  },
  set(value) {
    process.env.VAL = value;
  },
});
