import { isClient } from "./isClient";

export const setLocalStorage = (
  value: any,
  key: string = "chat-app-messages"
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string = "chat-app-messages") => {
  let value = null;

  if (isClient()) {
    value = localStorage.getItem(key);
  }

  if (!value) return null;

  return JSON.parse(value);
};
