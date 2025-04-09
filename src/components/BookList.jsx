import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className="row g-3 justify-content-center">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
export default BookList;
