import BookCard from "./BookCard";

const BookList = ({ books, onSeeMore }) => {
  return (
    <div className="row g-3 justify-content-center">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onSeeMore={onSeeMore} />
      ))}
    </div>
  );
};
export default BookList;
