export const uuid = (): string =>
  (Math.floor(Math.random() * (10000 - 9999)) + 9999).toString();
