export class Book {
  public imgPath: string;
  public name: string;
  public author: string;
  public rating: number;
  public status: string;
  public comment: string;

  constructor(
    imgPath: string,
    name: string,
    author: string,
    rating: number,
    status: string,
    comment: string
  ) {
    this.imgPath = imgPath;
    this.name = name;
    this.author = author;
    this.rating = rating;
    this.status = status;
    this.comment = comment;
  }
}
