import styles from "./Header.module.scss";
import Search from "components/atoms/Search";
import Button from "components/atoms/Button";
import Logo from "assets/images/logo.svg";
import Image from "next/image";
import { ShoppingBag } from "react-feather";
import { useCart } from "utils/hooks";
import Link from "next/link";

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
                {cart.qty > 0 && (
                  <div className={styles.quantity}>
                    <span>{cart.qty}</span>
                  </div>
                )}
              </Button>
              <Search books={books} />
            </div>
          )}
        </div>
      </div>
      {breadcrumb && (
        <div className={styles.breadcrumb}>
          <Button href={breadcrumb.path}>
            <span>{breadcrumb.label}</span>
          </Button>
          <span className={styles.current}>Panier</span>
        </div>
      )}
    </>
  );
}
