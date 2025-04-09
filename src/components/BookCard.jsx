const BookCard = ({ book, onSeeMore }) => {
  const {
    title = "No Title Available",
    authors = ["Unknown Authors"],
    imageLinks = {},
  } = book.volumeInfo;
  const thumbnail =
    imageLinks.thumbnail || "https://placehold.co/128x193?text=Image Not Found";

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img className="card-img-top" src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{authors?.join(", ")}</p>
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
