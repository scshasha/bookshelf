const BASE_URL = "https://www.googleapis.com/books/v1";

const fetchBooks = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/volumes?q=${query}`);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: [${response.status}] ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Fetch aborted");
    } else {
      console.error("Error fetching books:", error);
    }
    return [];
  }
};

export default fetchBooks;
