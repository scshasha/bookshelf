import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import fetchBooks from "./services/api-client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Javascript");

  useEffect(() => {
    fetchData();
    console.log(`Query:: ${searchTerm}`);
    console.log(`Books fetched::`, books);
  }, [searchTerm]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const items = await fetchBooks(searchTerm);
      setBooks(items);
      setLoading(false);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log("Failed to fetch books:", error);
      }
    } finally {
      setLoading(false);
    }
    // const response = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    // );
    // const data = await response.json();
  };

  const handleSearch = (query) => {
    if (!query) {
      console.error("Search term is empty");
      return;
    }
    if (query.length < 3) {
      console.error("Search term must be at least 3 characters long");
      return;
    }
    if (query.length > 50) {
      console.error("Search term must be less than 50 characters long");
      return;
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(query)) {
      console.error("Search term must be alphanumeric");
      return;
    }
    if (query.trim() === "") {
      console.error("Search term cannot be just whitespace");
      return;
    }
    if (query === searchTerm) {
      console.error("Search term is the same as the previous one");
      return;
    }
    setSearchTerm(query);
    fetchData();
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
