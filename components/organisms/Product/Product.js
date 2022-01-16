import styles from "./Product.module.scss";
import Paragraph from "@components/atoms/Paragraph";
import Layout from "@components/molecules/Layout";
import Buy from "@components/molecules/Buy";
import Image from "@components/atoms/Image";

export default function Product({ product }) {
  const { title, cover, isbn, price, synopsis } = product;

  return (
    <>
      <Layout>
        <div className={styles.product}>
          <div className={styles.cover}>
            <Image src={cover} alt={title} />
          </div>
          <div className={styles.resume}>
            <div className={styles.title}>
              <h2>{title}</h2>
              <Paragraph tiny upper fader bold>
                {`isbn: ${isbn}`}{" "}
              </Paragraph>
              <Paragraph medium upper white>
                {`${price}€`}
              </Paragraph>
            </div>
            <Buy product={product} />
          </div>
        </div>
        <div className={styles.synopsis}>
          <h3>Résumé</h3>
          {synopsis.map((paragraph, key) => (
            <Paragraph key={key} white>
              {paragraph}
            </Paragraph>
          ))}
        </div>
      </Layout>
    </>
  );
}
