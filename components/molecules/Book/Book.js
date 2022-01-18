import styles from "./Book.module.scss";
import Link from "next/link";
import { normalizeText } from "utils/helpers";
import Image from "components/atoms/Image";
import Paragraph from "components/atoms/Paragraph";
import AddToBag from "components/molecules/AddToBag";

export default function Book({ book }) {
  const { title, cover, price } = book;
  const path = `/book/${normalizeText(title, "link")}`;
  return (
    <div className={styles.book}>
      <Link href={path}>
        <a>
          <div className={styles.cover}>
            <Image src={cover} alt={title} priority />
          </div>
          <div className={styles.title}>
            <Paragraph upper small bold black>
              {title}
            </Paragraph>
            <Paragraph black>{`${price}€`}</Paragraph>
          </div>
        </a>
      </Link>
      <AddToBag product={book} library />
    </div>
  );
}
