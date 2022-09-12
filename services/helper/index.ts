export * from "./isClient";
export * from "./localstorage";
export * from "./session";
export * from "./uuid";

export const loadMessages = async (): Promise<string | null> => {
  const data = localStorage.getItem("count");

  if (!data) return null;

  return await JSON.parse(data);
};

export const saveMessages = (data: string) => {
  localStorage.setItem("count", JSON.stringify(data));
};
