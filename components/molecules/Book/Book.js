import styles from "./Book.module.scss";
import Link from "next/link";
import { normalizeText } from "utils/helpers";
import { useCart } from "utils/hooks";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Paragraph from "components/atoms/Paragraph";
import { Plus, Minus, ShoppingCart } from "react-feather";
import { useState, useEffect } from "react";
import Buy from "components/molecules/Buy";

export default function Book({ book }) {
  // const { cart, handleCartItems } = useCart();
  // console.log(book);
  // const [quantity, setQuantity] = useState(0);
  const { title, cover, price } = book;
  const path = `/book/${normalizeText(title, "link")}`;

  // useEffect(() => {
  //   const item = cart.items.filter((item) => item.id === book.isbn);
  //   if (item && item.length) {
  //     setQuantity(item[0].qty);
  //   }
  // }, [cart.items, book.isbn]);

  return (
    <div className={styles.book}>
      <Link href={path}>
        <a>
          <div className={styles.cover}>
            <Image src={cover} alt={title} />
          </div>
          <Paragraph upper small bold>
            {title}
          </Paragraph>
        </a>
      </Link>
      <div className={styles.footer}>
        <Paragraph upper small bold>{`${price}€`}</Paragraph>
        <Buy product={book} />

        {/* {quantity ? (
          <div className={styles.quantity}>
            <Button
              label="Add to bag"
              theme="primary"
              event={() => {
                if (quantity > 1) {
                  setQuantity((quantity -= 1));
                  handleCartItems("remove", book);
                } else {
                  setQuantity(0);
                  handleCartItems("reset", book);
                }
              }}
            >
              <Minus size={16} color="black" />
            </Button>
            <Paragraph>{quantity}</Paragraph>
            <Button
              label="Add to bag"
              theme="primary"
              event={() => {
                setQuantity((quantity += 1));
                handleCartItems("add", book);
              }}
            >
              <Plus size={16} color="black" />
            </Button>
          </div>
        ) : (
          <>
            <Paragraph upper small bold>{`${price}€`}</Paragraph>
            <Button
              label="Add to bag"
              theme="primary"
              event={() => handleCartItems("add", book)}
            >
              <ShoppingCart size={16} color="black" />
            </Button>
          </>
        )} */}
      </div>
    </div>
  );
}
