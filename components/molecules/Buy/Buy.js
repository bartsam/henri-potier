import styles from "./Buy.module.scss";
import Paragraph from "components/atoms/Paragraph";
import Button from "components/atoms/Button";
import { useCart } from "utils/hooks";
import { useState, useEffect } from "react";
import { Plus, Minus, ShoppingCart } from "react-feather";

export default function Buy({ product }) {
  const { cart, handleCartItems } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const item = cart.items.filter((item) => item.id === product.isbn);
    if (item && item.length) {
      setQuantity(item[0].qty);
    }
  }, [cart.items, product.isbn]);
  return (
    <div className={styles.buy}>
      {quantity ? (
        <div className={styles.quantity}>
          <Button
            label="Add to bag"
            theme="primary"
            event={() => {
              if (quantity > 1) {
                setQuantity((quantity -= 1));
                handleCartItems("remove", product);
              } else {
                setQuantity(0);
                handleCartItems("reset", product);
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
              handleCartItems("add", product);
            }}
          >
            <Plus size={16} color="black" />
          </Button>
        </div>
      ) : (
        <Button
          label="Add to bag"
          theme="primary"
          event={() => handleCartItems("add", product)}
        >
          <ShoppingCart size={16} color="black" />
        </Button>
      )}
    </div>
  );
}
