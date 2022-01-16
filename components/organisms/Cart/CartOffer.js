import styles from "./Cart.module.scss";
import Spinner from "@components/atoms/Spinner";
import { useCart, useFetch } from "@utils/hooks";
import { useState, useEffect } from "react";
import Button from "@components/atoms/Button";
import Paragraph from "@components/atoms/Paragraph";
import { X } from "react-feather";

export default function CartOffer() {
  const { cart } = useCart();
  const [promotion, setPromotion] = useState(0);
  const [alert, setAlert] = useState(false);

  const itemsIsbnString = cart.items.map((item) => item.id).toString();
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
    cart.items.length > 0 && (
      <div className={styles.offer}>
        <div className={styles.order}>
          {error ? (
            <Paragraph fade bold medium>
              Error
            </Paragraph>
          ) : isLoading ? (
            <Spinner theme="dark" />
          ) : (
            <div className={styles.totals}>
              <div className={styles.line}>
                <Paragraph bold small upper fader>
                  total du panier
                </Paragraph>
                <Paragraph crossed>{`${cart.total}€`}</Paragraph>
              </div>
              <div className={styles.line}>
                <Paragraph bold small upper fader>
                  Réductions
                </Paragraph>
                <Paragraph>{`${promotion}€`}</Paragraph>
              </div>
              <div className={styles.line}>
                <Paragraph bold medium upper>
                  Total
                </Paragraph>
                <Paragraph bold medium>{`${
                  cart.total - promotion
                }€`}</Paragraph>
              </div>
            </div>
          )}
        </div>
        <div className={styles.buttons}>
          {alert && (
            <div className={styles.alert}>
              <Button event={() => setAlert(false)} label="go to checkout">
                <X size={16} color="white" />
              </Button>
              <span>Services de paiement indisponible</span>
            </div>
          )}
          <Button
            event={() => setAlert(true)}
            label="go to checkout"
            theme="primary"
          >
            <Paragraph bold small upper black>
              Valider mon panier
            </Paragraph>
          </Button>
        </div>
      </div>
    )
  );
}
