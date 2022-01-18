import styles from "./Library.module.scss";
import Book from "components/molecules/Book";
import Layout from "components/molecules/Layout";

export default function Library({ books }) {
  return (
    <div className={styles.library}>
      <Layout>
        <h2>Bibliothèque d&apos;Henri Potier</h2>
        <div className={styles.grid}>
          {books.map((book, key) => (
            <Book key={key} book={book} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
