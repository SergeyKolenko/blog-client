import { User } from "./user";

export class Post {
  id?: number;
  title: string;
  body: string;
  user: User;
  comments?: Comment[];
  created_at?: string;

  constructor(body: string, title: string) {
    this.body = body;
    this.title = title;
  }
}
