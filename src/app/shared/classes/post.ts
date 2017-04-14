export class Post {
  id?: number;
  title: string;
  body: string;
  comments?: Comment[];
  user_name: string;

  constructor(body: string, title: string) {
    this.body = body;
    this.title = title;
  }
}
