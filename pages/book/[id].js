import Header from "components/organisms/Header";
import Wrapper from "components/molecules/Wrapper";
import Product from "components/organisms/Product";
import { normalizeText } from "utils/helpers";

export default function Book({ books, book }) {
  return (
    <>
      <Header
        books={books}
        breadcrumb={{ label: "Page d'accueil", path: "/", current: book.title }}
      />
      <Wrapper>
        <Product product={book} />
      </Wrapper>
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
