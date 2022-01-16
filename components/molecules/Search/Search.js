import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { normalizeText } from "utils/helpers";
import { Search, X } from "react-feather";
import Button from "components/atoms/Button";
import Paragraph from "components/atoms/Paragraph";
import Image from "components/atoms/Image";

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
        <div className={styles.field}>
          <input
            className={styles.input}
            placeholder="Rechercher un livre"
            onChange={(e) => handleSearch(e)}
          />
          <Search size={16} color="white" />
        </div>
        <div className={styles.results}>
          {results.map((book, key) => (
            <div className={styles.result} key={key}>
              <Button href={`/book/${normalizeText(book.title, "link")}`}>
                <div className={styles.cover} key={key}>
                  <Image src={book.cover} alt={book.title} />
                </div>
                <Paragraph upper small white bold>
                  {book.title}
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
