import Head from "next/head";
import Header from "@components/organisms/Header";
import Wrapper from "@components/molecules/Wrapper";
import Footer from "@components/organisms/Footer";
import Product from "@components/organisms/Product";
import { normalizeText } from "@utils/helpers";

export default function Book({ books, book }) {
  return (
    <>
      <Head>
        <title>Henri Potier Edition - {book.title}</title>
        <meta
          name="description"
          content={`La bibliothèque d'Henri Potier : ${book.title}`}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Header
        books={books}
        breadcrumb={{ label: "Page d'accueil", path: "/", current: book.title }}
      />
      <Wrapper>
        <Product product={book} />
      </Wrapper>
      <Footer />
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
