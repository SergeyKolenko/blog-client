export class Post {
  id?: number;
  body: string;
  comments?: Comment[];
  user_name: string;

  constructor(body: string) {
    this.body = body;
  }
}
