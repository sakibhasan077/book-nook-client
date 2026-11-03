export interface IBook {
  _id: string;
  title: string;
  author: string;
  category: string;
  imageUrl: string;
  description: string;
  userEmail: string;
  userName: string;
  totalCopy: string;
}

export interface IBorrow {
  _id: string;
  bookId: string;
  bookTitle: string;
  bookImage: string;
  bookAuthor?: string;
  userEmail: string;
  borrowDate: string;
  returnDate: string;
}
