import Head from "next/head";
import Header from "components/organisms/Header";
import Library from "components/organisms/Library";

export default function Home({ books }) {
  return (
    <>
      <Head>
        <title>Henri Potier</title>
        <meta name="description" content="La bibliothèque d'Henri Potier" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Header books={books} />
      <Library books={books} />
    </>
  );
}

export async function getServerSideProps() {
  const books = await fetch("https://henri-potier.techx.fr/books").then(
    (response) => response.json()
  );
  return { props: { books } };
}
