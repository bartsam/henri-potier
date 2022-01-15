import Header from "components/organisms/Header";
import Search from "components/atoms/Search";
import { normalizeText } from "utils/helpers";

export default function Book({ books, book }) {
  return (
    <>
      <Header books={books} />
      <p>{book.title}</p>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const books = await fetch(`https://henri-potier.techx.fr/books`).then(
    (response) => response.json()
  );
  return {
    props: {
      books: books,
      book: books.filter(
        (currentBook) => normalizeText(currentBook.title, "link") === params.id
      )[0],
    },
  };
}
