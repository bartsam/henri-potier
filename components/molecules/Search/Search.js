import { useState, useEffect, useRef } from "react";
import styles from "./Search.module.scss";
import { normalizeText } from "utils/helpers";
import { useOnClickOutside } from "utils/hooks";
import { Search, X } from "react-feather";
import Button from "components/atoms/Button";
import Paragraph from "components/atoms/Paragraph";
import Image from "components/atoms/Image";

const SearchBar = ({ books }) => {
  const [isSearchOpen, seIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef();

  useOnClickOutside(ref, () => seIsSearchOpen(false));

  const handleSearch = (event) => {
    setSearch(normalizeText(event.target.value, "search"));
  };

  useEffect(() => {
    const results =
      books &&
      books.filter(({ title, synopsis }) => {
        const titleNormalize = normalizeText(title, "search");
        const synopsisNormalize = synopsis
          .map((s) => normalizeText(s, "search"))
          .join();
        return search.length >= 3 && titleNormalize.includes(search)
          ? titleNormalize.includes(search)
          : synopsisNormalize.includes(search);
      });
    setResults(results);
    if (isSearchOpen) {
      const close = (e) => {
        if (e.keyCode === 27) {
          seIsSearchOpen(false);
        }
      };
      window.addEventListener("keydown", close);
    }
    return () => window.removeEventListener("keydown", close);
  }, [search, books, isSearchOpen]);

  return (
    <>
      <Button
        label="Search"
        event={() => seIsSearchOpen(!isSearchOpen)}
        data-testid="search-button"
      >
        {!isSearchOpen ? (
          <Search size={16} color="white" />
        ) : (
          <X size={16} color="white" />
        )}
      </Button>
      <div
        ref={ref}
        className={`${styles.search} ${
          isSearchOpen ? styles["search--on"] : styles["search--off"]
        }`}
        data-testid="search-modal"
      >
        <div className={styles.field}>
          <input
            className={styles.input}
            placeholder="Rechercher un livre"
            onChange={(e) => handleSearch(e)}
            data-testid="search-input"
          />
          <Search size={16} color="white" />
        </div>
        <div className={styles.results} data-testid="search-results">
          {results &&
            results.map((book, key) => (
              <div
                className={styles.result}
                key={key}
                onClick={() => seIsSearchOpen(false)}
              >
                <Button href={`/book/${normalizeText(book.title, "link")}`}>
                  <div className={styles.cover} key={key}>
                    <Image src={book.cover} alt={book.title} />
                  </div>
                  <Paragraph upper small white bold>
                    <span data-testid="search-result">{book.title}</span>
                  </Paragraph>
                </Button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
