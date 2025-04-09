import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

const useBooks = (initialQuery) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  useEffect(() => {
    async function fetchBooksData(query) {
      setLoading(true);
      try {
        const items = await fetchBooks(query);
        setBooks(items);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Failed to fetch:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    if (searchTerm) {
      fetchBooksData(searchTerm);
    }
  }, [searchTerm]);

  return { books, loading, setSearchTerm };
};

export default useBooks;
