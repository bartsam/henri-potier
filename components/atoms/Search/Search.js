import { useState, useEffect } from "react";
import Link from "next/link";
import { normalizeText } from "../../../utils/helpers";

const Search = ({ books }) => {
  const [search, seSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    seSearch(normalizeText(event.target.value, "search"));
  };

  useEffect(() => {
    const results = books.filter(({ title }) => {
      const titleNormalize = normalizeText(title, "search");
      return search.length >= 3 && titleNormalize.includes(search);
    });
    setResults(results);
  }, [search, books]);
  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      {results.map((book, key) => (
        <li key={key}>
          <Link href={`/book/${book.isbn}`}>
            <a>{book.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Search;
