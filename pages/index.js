import Head from "next/head";
import Spinner from "components/atoms/Spinner";
import Wrapper from "components/molecules/Wrapper";
import Header from "components/organisms/Header";
import Library from "components/organisms/Library";
import Footer from "components/organisms/Footer";

export default function Home({ books }) {
  return (
    <>
      <Head>
        <title>Henri Potier Edition</title>
        <meta name="description" content="La bibliothèque d'Henri Potier" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Header books={books} />
      <Wrapper>
        {books ? (
          <Library books={books} />
        ) : (
          <div data-testid="loader">
            <Spinner theme="light" />
          </div>
        )}
      </Wrapper>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const books = await fetch("https://henri-potier.techx.fr/books").then(
    (response) => response.json()
  );
  return { props: { books } };
}
