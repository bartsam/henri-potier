import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "components/atoms/Button";
import { Search, X } from "react-feather";
import { normalizeText } from "../../../utils/helpers";
import styles from "./Search.module.scss";

const SearchBar = ({ books }) => {
  const [isSearchOpen, seIsSearchOpen] = useState(false);
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
    <>
      <Button label="Cart" event={() => seIsSearchOpen(!isSearchOpen)}>
        {!isSearchOpen ? (
          <Search size={16} color="white" />
        ) : (
          <X size={16} color="white" />
        )}
      </Button>
      <div
        className={`${styles.search} ${
          isSearchOpen ? styles["search--on"] : styles["search--off"]
        }`}
      >
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            placeholder="Search"
            onChange={(e) => handleSearch(e)}
          />
          {results.map((book, key) => (
            <li key={key}>
              <Link href={`/book/${normalizeText(book.title, "link")}`}>
                <a>{book.title}</a>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
