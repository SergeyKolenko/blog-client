import { Comment } from './comment';
import { User } from './user';

export class Post {
  id?: number;
  body: string;
  comments?: Comment[];
  user: User;

  constructor(body: string, user: User) {
    this.body = body;
    this.user = user;
  }
}
