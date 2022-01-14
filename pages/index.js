import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Search from "../components/atoms/Search";
import styles from "../styles/Home.module.css";
import { useCart } from "../utils/hooks";
import { normalizeText } from "../utils/helpers";

export default function Home({ books }) {
  const { handleCartItems } = useCart();
  return (
    <>
      <Head>
        <title>Henri Potier</title>
        <meta name="description" content="La bibliothèque d'Henri Potier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/cart`}>
        <a>cart</a>
      </Link>
      <Search books={books} />
      <ul>
        {books.map((book, key) => (
          <li key={key}>
            <Link href={`/book/${normalizeText(book.title, "link")}`}>
              <a>{book.title}</a>
            </Link>
            <button onClick={() => handleCartItems("add", book)}>
              add to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const books = await fetch("https://henri-potier.techx.fr/books").then(
    (response) => response.json()
  );
  return { props: { books } };
}
