import React, { useState, createContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    qty: 0,
    items: [],
  });

  const handleCartItems = (action, currentItem) => {
    const isArlreadyInCart = cart.items.filter(
      (item) => item.isbn === currentItem.isbn
    );
    if (action === "remove" && isArlreadyInCart.length > 0) {
      setCart({
        ...cart,
        items: cart.items.filter((item) => {
          console.log(item.isbn);
          console.log(currentItem.isbn);

          return item.isbn !== currentItem.isbn;
        }),
      });
    }
    if (action === "add") {
      if (isArlreadyInCart.length === 0) {
        currentItem["qty"] = 1;
        setCart({
          ...cart,
          items: [...cart.items, currentItem],
        });
      } else {
        const updateItem = cart.items.filter(
          (item) => item.isbn === currentItem.isbn
        )[0];
        updateItem.qty += 1;
        setCart({
          ...cart,
          items: [...cart.items],
        });
      }
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        handleCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
