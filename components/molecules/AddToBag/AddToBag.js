import styles from "./AddToBag.module.scss";
import Paragraph from "components/atoms/Paragraph";
import Button from "components/atoms/Button";
import { useCart } from "utils/hooks";
import { useState, useEffect } from "react";
import { ShoppingCart, Plus, Minus } from "react-feather";
import { useMediaQuery } from "utils/hooks";

export default function AddToBag({ product, library }) {
  const { cart, handleCartItems } = useCart();
  const [quantity, setQuantity] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 48rem)");

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
            label="remove from bag"
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
            <span data-testid="buy-remove">
              <Minus size={16} color="black" />
            </span>
          </Button>
          <Paragraph>
            <span data-testid="buy-quantity">{quantity}</span>
          </Paragraph>
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
          {!isDesktop && library ? (
            <ShoppingCart size={16} color="black" />
          ) : (
            <Paragraph bold upper small>
              <span data-testid="buy-add">Ajouter au panier</span>
            </Paragraph>
          )}
        </Button>
      )}
    </div>
  );
}
