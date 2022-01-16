import styles from "./Product.module.scss";
import Paragraph from "components/atoms/Paragraph";
import Layout from "components/molecules/Layout";
import Book from "components/molecules/Book";
import Buy from "components/molecules/Buy";
import Image from "components/atoms/Image";

export default function Product({ product }) {
  const { title, cover, isbn, price, synopsis } = product;

  return (
    <>
      <Layout>
        <div className={styles.product}>
          {/* <Book book={product} /> */}
          <div className={styles.cover}>
            <Image src={cover} alt={title} />
          </div>
          <div className={styles.resume}>
            <div className={styles.title}>
              <h2>{title}</h2>
              <div className={styles.detail}>
                <Paragraph bold tiny fader upper>
                  {isbn}
                </Paragraph>
                <Paragraph medium upper white>
                  {`${price}€`}
                </Paragraph>
              </div>
              <div className={styles.buy}>
                <Buy product={product} />
              </div>
              {/* <Button
                label="Add to bag"
                theme="primary"
                event={() => handleCartItems("add", product)}
              >
                <Paragraph bold upper>
                  {" "}
                  Ajouter au panier
                </Paragraph>
              </Button> */}
            </div>
            <div className={styles.synopsis}>
              <h3>Synopsis</h3>
              {synopsis.map((paragraph, key) => (
                <Paragraph key={key} white>
                  {paragraph}
                </Paragraph>
              ))}
            </div>
          </div>
          {/* <div className={styles.cover}>
            <Image src={cover} alt={title} />
          </div>
          <div className={styles.title}>
            <h2>{title}</h2>
            <div className={styles.detail}>
              <Paragraph bold tiny fader upper>
                {isbn}
              </Paragraph>
              <Paragraph medium upper white>
                {`${price}€`}
              </Paragraph>
            </div>
          </div> */}
        </div>
      </Layout>
    </>
  );
}
