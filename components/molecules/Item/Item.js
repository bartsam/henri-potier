import styles from "./Item.module.scss";
import Link from "next/link";
import { normalizeText } from "utils/helpers";
import { useCart } from "utils/hooks";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Paragraph from "components/atoms/Paragraph";
import { Plus, Minus } from "react-feather";
import { useMediaQuery } from "utils/hooks";

export default function Item({ item }) {
  const { handleCartItems } = useCart();
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  const formatItem = {
    isbn: item.id,
    title: item.name,
    cover: item.image,
    price: item.price,
  };
  const path = `/book/${normalizeText(item.name, "link")}`;
  return (
    <div className={styles.item}>
      <Link href={path}>
        <a className={styles.left}>
          <div className={styles.cover}>
            <Image src={item.image} alt={item.name} priority />
          </div>
        </a>
      </Link>
      <div className={styles.right}>
        <div>
          <Button href={path} label={item.name}>
            <Paragraph bold small upper black>
              {item.name}
            </Paragraph>
          </Button>
          {isDesktop && (
            <Paragraph bold tiny upper fader>
              {item.id}
            </Paragraph>
          )}
        </div>

        <div>
          <div className={styles.line}>
            <Paragraph bold small upper fader>
              Prix unitaire
            </Paragraph>
            <Paragraph>{`${item.price}€`}</Paragraph>
          </div>
          <div className={styles.quantity}>
            <Button
              label="Add to bag"
              theme="primary"
              event={() =>
                item.qty > 1
                  ? handleCartItems("remove", formatItem)
                  : handleCartItems("reset", formatItem)
              }
            >
              <Minus size={16} color="black" />
            </Button>
            <Paragraph>{item.qty}</Paragraph>
            <Button
              label="Add to bag"
              theme="primary"
              event={() => handleCartItems("add", formatItem)}
            >
              <Plus size={16} color="black" />
            </Button>
          </div>

          <div className={styles.line}>
            <Paragraph bold small upper fader>
              Prix total
            </Paragraph>
            <Paragraph>{`${item.price * item.qty}€`}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
