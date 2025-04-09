import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import useBooks from "./services/useBooks";

function App() {
  // Destructuring custom hook.
  // useBooks is a custom hook that fetches books based on the search term.
  // It returns an object containing books, loading state, and a function to set the search term.
  const { books, loading, setSearchTerm } = useBooks("Harry Potter");

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      {loading ? (
        <p className="placeholder-glow display-3 text-center text-body-secondary">
          <i className="bi bi-book-half"></i>
          <br />
          <span className="placeholder col-8">Loading...</span>
        </p>
      ) : (
        <BookList books={books} />
      )}
      <Footer />
    </>
  );
}

export default App;
