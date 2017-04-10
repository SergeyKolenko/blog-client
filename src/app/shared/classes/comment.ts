export class Comment {
  id?: number;
  user_name: string;
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
