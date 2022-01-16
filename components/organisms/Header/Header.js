import styles from "./Header.module.scss";
import { useCart } from "utils/hooks";
import Link from "next/link";
import Image from "next/image";
import Logo from "assets/images/logo.svg";
import Button from "components/atoms/Button";
import Paragraph from "components/atoms/Paragraph";
import Search from "components/molecules/Search";
import Wrapper from "components/molecules/Wrapper";
import { ShoppingBag, ChevronLeft } from "react-feather";

export default function Header({ books, breadcrumb, minimize }) {
  const { cart } = useCart();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Link href={`/`}>
            <a className={styles.logo}>
              <Image
                src={Logo}
                width="24"
                height="24"
                alt="logo - Les éditions d'Henri Potier"
              />
              <h1>les éditons d&apos;Henri Potier</h1>
            </a>
          </Link>
          {!minimize && (
            <div className={styles.icons}>
              <Button href={`/cart`} label="Cart">
                <ShoppingBag size={16} color="white" />
                {cart.quantity > 0 && (
                  <div className={styles.quantity}>
                    <span>{cart.quantity}</span>
                  </div>
                )}
              </Button>
              <Search books={books} />
            </div>
          )}
        </div>
      </div>
      {breadcrumb && (
        <Wrapper>
          <div className={styles.breadcrumb}>
            <Button href={breadcrumb.path}>
              <Paragraph upper bold small>
                {breadcrumb.label}
              </Paragraph>
            </Button>
            <ChevronLeft size={16} color="#888888" />
            <span className={styles.current}>{breadcrumb.current}</span>
          </div>
        </Wrapper>
      )}
    </>
  );
}
