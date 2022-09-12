export interface User {
  id: string;
  firstname: string;
  lastname: string;
}

export interface Message {
  id: string;
  text: string;
  created_at: number;
  from: User;
}
