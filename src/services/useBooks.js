import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

const useBooks = (initialQuery) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBooksData(query) {
      setLoading(true);
      try {
        const items = await fetchBooks(query, controller);
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

    // return () => {
    //   controller.abort();
    // };
  }, [searchTerm]);

  return { books, loading, setSearchTerm };
};

export default useBooks;
