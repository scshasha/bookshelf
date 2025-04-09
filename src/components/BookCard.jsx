const BookCard = ({ book, onSeeMore }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img
          className="card-img-top"
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.smallThumbnail
              : "https://placehold.co/128x193"
          }
          alt={book.volumeInfo.title}
        />
        <div className="card-body">
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">{book.volumeInfo?.authors?.join(", ")}</p>
          <button
            className="btn btn-outline-secondary"
            onClick={() => onSeeMore(book)}
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookCard;
