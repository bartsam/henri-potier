import styles from "./Library.module.scss";
import Book from "components/molecules/Book";
// import Button from "components/atoms/Button";
import Spinner from "components/atoms/Spinner";

export default function Library({ books }) {
  return (
    <div className={styles.library}>
      <div className={styles.wrapper}>
        <h2>Bibliothèque d&apos;Henri Potier</h2>
        {/* <Button label={title} href={path}>
          <span>{title}</span>
        </Button> */}
        <div className={styles.grid}>
          {books ? (
            books.map((book, key) => <Book key={key} book={book} />)
          ) : (
            <Spinner theme="dark" />
          )}
        </div>
      </div>
    </div>
  );
}
