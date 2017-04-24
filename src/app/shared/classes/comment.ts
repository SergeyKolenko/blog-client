import { User } from "./user";

export class Comment {
  id?: number;
  user: User;
  text: string;
  created_at: string;

  constructor(text: string) {
    this.text = text;
  }
}
