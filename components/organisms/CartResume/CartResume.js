import styles from "./CartResume.module.scss";
import Item from "components/molecules/Item";
// import Button from "components/atoms/Button";
import Spinner from "components/atoms/Spinner";
import { useCart, useFetch } from "utils/hooks";
import { useState, useEffect } from "react";

export default function CartResume() {
  const { cart, handleCartItems } = useCart();
  const [promotion, setPromotion] = useState(0);

  const itemsIsbnString = cart.items.map((item) => item.isbn).toString();
  const { data, isLoading, error } = useFetch(
    `https://henri-potier.techx.fr/books/${itemsIsbnString}/commercialOffers`,
    itemsIsbnString.length > 0
  );

  useEffect(() => {
    if (data && !isLoading && !error) {
      let promo = 0;
      data.offers.forEach((offer) => {
        if (offer.type === "percentage") {
          const value = 1 - offer.value / 100;
          if (promo < value) {
            promo = value;
          }
        }
        if (offer.type === "minus") {
          const value = offer.value;
          if (promo < value) {
            promo = value;
          }
        }
        if (offer.type === "slice") {
          const slice = Math.trunc(cart.total / offer.sliceValue);
          const value =
            cart.total >= 100 && slice >= 1 ? slice * offer.value : 0;
          if (promo < value) {
            promo = value;
          }
        }
        setPromotion(promo);
      });
    }
  }, [data, cart.total, isLoading, error]);

  return (
    <>
      <div className={styles.resume}>
        {cart.items.map((item, key) => (
          <Item key={key} item={item} />
        ))}
      </div>

      <div className={styles.order}>
        {cart.items.length === 0 ? (
          <p>empty</p>
        ) : error ? (
          <p>error</p>
        ) : isLoading ? (
          <Spinner theme="dark" />
        ) : (
          <div className={styles.totals}>
            <p className={styles.price}>{`Prix total : ${cart.total}€`}</p>
            <p className={styles.price}>{`Réductions : ${promotion}€`}</p>
            <p className={styles.price}>{`Prix final : ${
              cart.total - promotion
            }€`}</p>
          </div>
        )}
      </div>
    </>
  );
}
