import Head from "next/head";
import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import styles from "components/organisms/Cart/Cart.module.scss";
import { CartResume, CartOffer } from "components/organisms/Cart";
import Wrapper from "components/molecules/Wrapper";
import { useCart } from "utils/hooks";

export default function Cart() {
  const { cart } = useCart();
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
      <Header
        minimize
        breadcrumb={{ label: "Page d'accueil", path: "/", current: "Panier" }}
      />
      <Wrapper>
        <div className={styles.cart}>
          <CartResume cart={cart} />
          <CartOffer cart={cart} />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
