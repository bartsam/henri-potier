import styles from "./Book.module.scss";
import Link from "next/link";
import { normalizeText } from "utils/helpers";
import { useCart } from "utils/hooks";
import Button from "components/atoms/Button";
import Image from "next/image";
import { Plus, Minus, ShoppingCart } from "react-feather";

export default function Book({ book }) {
  const { cart, handleCartItems } = useCart();
  const { title, cover, price } = book;
  const path = `/book/${normalizeText(title, "link")}`;

  const isBookInCart = cart.items.filter((item) => item.isbn === book.isbn)[0];
  console.log(book);
  return (
    <div className={styles.book}>
      <Link href={path}>
        <a>
          <div className={styles.cover}>
            <Image src={cover} alt={title} layout="fill" />
          </div>
          <p className={styles.title}>{title}</p>
        </a>
      </Link>
      <div className={styles.footer}>
        <p className={styles.price}>{`${price}€`}</p>
        {isBookInCart && isBookInCart.qty ? (
          <div className={styles.quantity}>
            <Button
              label="Add to bag"
              theme="dark"
              event={() => handleCartItems("remove", book)}
            >
              <Minus size={16} color="white" />
            </Button>
            <span>{isBookInCart.qty}</span>
            <Button
              label="Add to bag"
              theme="primary"
              event={() => handleCartItems("add", book)}
            >
              <Plus size={16} color="black" />
            </Button>
          </div>
        ) : (
          <Button
            label="Add to bag"
            theme="primary"
            event={() => handleCartItems("add", book)}
          >
            <ShoppingCart size={16} color="black" />
          </Button>
        )}
        {/* <Button
          label="Add to bag"
          theme="primary"
          event={() => handleCartItems("add", book)}
        >
          <ShoppingCart size={16} color="black" />
        </Button> */}
      </div>
    </div>
  );
}
