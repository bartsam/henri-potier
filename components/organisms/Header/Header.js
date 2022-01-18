import styles from "./Header.module.scss";
import { useCart } from "utils/hooks";
import Link from "next/link";
import Button from "components/atoms/Button";
import Paragraph from "components/atoms/Paragraph";
import Search from "components/molecules/Search";
import Wrapper from "components/molecules/Wrapper";
import { ShoppingCart, ChevronLeft } from "react-feather";

export default function Header({ books, breadcrumb, minimize }) {
  const { cart } = useCart();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Link href={`/`}>
            <a className={styles.logo}>
              <svg
                viewBox="0 0 256 256"
                width="24"
                fill="none"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Logo Henri Potier</title>
                <circle fill="#46328c" cx="128" cy="128" r="128" />
                <path
                  fill="#f2e74b"
                  d="M105.922 51L111.887 61V111L91.7931 121V71L97.7585 61H66.6756L72.641 71V121L52.547 111L42.5 101L52.547 121L72.641 131V161L66.6756 171H98.7004L92.735 161V131L112.829 121V171L107.806 181H138.888L133.865 171V111C133.865 111 152.939 102.016 153.959 101V151L143.912 141L155.215 186L145.168 181L163.064 251.135V207.875L173.111 211L163.064 171L173.111 181V141C176.133 144.984 183.158 151 183.158 151C186.18 151 205.254 145.883 208.276 142.875L213.299 101C213.299 101 204.194 78.8906 199.17 72.875C198.15 72.875 179.155 79.9844 173.111 81V71L153.017 81V91L132.923 101V61L138.888 51H105.922ZM190.379 85.0625C190.379 85.0625 193.205 119.008 193.205 121V131C193.205 131 183.158 142.016 183.158 141L173.111 131V91C177.114 89.9844 189.359 84.0469 190.379 85.0625Z"
                />
              </svg>

              <h1>les éditons d&apos;Henri Potier</h1>
            </a>
          </Link>
          {!minimize && (
            <div className={styles.icons}>
              {books && <Search books={books} />}
              <Button href={`/cart`} label="Cart">
                <ShoppingCart size={16} color="white" />
                {cart.quantity > 0 && (
                  <div className={styles.quantity}>
                    <span>{cart.quantity}</span>
                  </div>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
      {breadcrumb && (
        <Wrapper>
          <div className={styles.breadcrumb}>
            <Button href={breadcrumb.path}>
              <Paragraph upper bold small white>
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
