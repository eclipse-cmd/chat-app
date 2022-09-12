export const setSession = (value: any, key: string = "chat-app-user"): void => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key: string = "chat-app-user") => {
  const value = sessionStorage.getItem(key);

  if (!value) return null;

  return JSON.parse(value);
};
