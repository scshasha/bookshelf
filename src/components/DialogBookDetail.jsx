const DialogBookDetail = ({ book, onClose }) => {
  const {
    title = "No Title Available",
    authors = ["Unknown Authors"],
    imageLinks = {},
    publishedDate = "No Published Date Available",
    description = "No Description Available",
  } = book;
  const thumbnail =
    imageLinks.thumbnail || "https://placehold.co/128x193?text=Image Not Found";

  return (
    <div
      className="modal show d-block"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img className="img-fluid mb-3" src={thumbnail} alt={title} />
            <p>
              <strong>Authors:</strong> {authors?.join(", ")}
            </p>
            <p>
              <strong>Published Date:</strong> {publishedDate}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DialogBookDetail;
