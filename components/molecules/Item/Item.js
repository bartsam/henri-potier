import styles from "./Item.module.scss";
import Link from "next/link";
import { normalizeText } from "utils/helpers";
import { useCart } from "utils/hooks";
import Button from "components/atoms/Button";
import Image from "next/image";
import { Plus, Minus, ShoppingCart } from "react-feather";

export default function Item({ item }) {
  const { handleCartItems } = useCart();
  const { title, cover, price, qty } = item;
  const path = `/book/${normalizeText(title, "link")}`;
  return (
    <div className={styles.item}>
      <Link href={path}>
        <a className={styles.left}>
          <div className={styles.cover}>
            <Image src={cover} alt={title} layout="fill" />
          </div>
        </a>
      </Link>
      <div className={styles.right}>
        <Link href={path}>
          <a className={styles.link}>
            <p className={styles.title}>{title}</p>
          </a>
        </Link>
        <div className={styles.quantity}>
          <Button
            label="Add to bag"
            theme="primary"
            event={() =>
              qty > 1
                ? handleCartItems("remove", item)
                : handleCartItems("reset", item)
            }
          >
            <Minus size={16} color="black" />
          </Button>
          <span>{qty}</span>
          <Button
            label="Add to bag"
            theme="primary"
            event={() => handleCartItems("add", item)}
          >
            <Plus size={16} color="black" />
          </Button>
        </div>
        <p className={styles.price}>{`Prix totale : ${price * qty}€`}</p>
      </div>
    </div>
  );
}
