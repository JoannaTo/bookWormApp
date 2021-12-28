export class Quote {
  public author: string;
  public quote: string;

  constructor(author: string, quote: string) {
    (this.author = author), (this.quote = quote);
  }
}
