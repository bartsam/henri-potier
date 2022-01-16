import styles from "./Cart.module.scss";
import Item from "components/molecules/Item";
import { useCart } from "utils/hooks";
import Button from "components/atoms/Button";

export default function CartResume() {
  const { cart } = useCart();
  return cart.items.length === 0 ? (
    <div className={styles.empty}>
      <h2>Le Panier est vide</h2>
      <Button href={`/`} label="go to homepage" theme="primary">
        <span>Voir tous les produits</span>
      </Button>
    </div>
  ) : (
    <div className={styles.resume}>
      {cart.items.map((item, key) => (
        <Item key={key} item={item} />
      ))}
    </div>
  );
}
