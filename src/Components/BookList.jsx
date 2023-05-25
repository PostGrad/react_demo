import { books } from "../books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>Best Seller Books</h1>
      <section className="booklist">
        {books.map((book) => (
          <Book key={book.id} {...book}></Book>
        ))}
      </section>
    </>
  );
};

export default BookList;
