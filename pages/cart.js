import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import styles from "components/organisms/Cart/Cart.module.scss";
import { CartResume, CartOffer } from "components/organisms/Cart";
import Wrapper from "components/molecules/Wrapper";

export default function Cart() {
  return (
    <>
      <Header
        minimize
        breadcrumb={{ label: "Page d'accueil", path: "/", current: "Panier" }}
      />
      <Wrapper>
        <div className={styles.cart}>
          <CartResume />
          <CartOffer />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
