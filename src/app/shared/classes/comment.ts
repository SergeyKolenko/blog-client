import { User } from './user';

export class Comment {
  id?: number;
  user: User;
  text: string;

  constructor(user: User, text: string) {
    this.user = user;
    this.text = text;
  }
}
