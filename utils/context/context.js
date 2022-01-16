import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    qty: 0,
    items: [],
    total: 0,
  });

  const handleCartItems = (action, currentItem) => {
    const isArlreadyInCart = cart.items.filter(
      (item) => item.isbn === currentItem.isbn
    );
    if (action === "reset" && isArlreadyInCart.length > 0) {
      setCart({
        ...cart,
        qty: cart.qty - 1,
        items: cart.items.filter((item) => {
          return item.isbn !== currentItem.isbn;
        }),
        total: cart.total - currentItem.price,
      });
    }
    if (action === "remove" && isArlreadyInCart.length > 0) {
      currentItem.qty -= 1;
      setCart({
        ...cart,
        qty: cart.qty - 1,
        items: [...cart.items],
        total: cart.total - currentItem.price,
      });
    }
    if (action === "add") {
      if (isArlreadyInCart.length === 0) {
        currentItem.qty = 1;
        setCart({
          ...cart,
          qty: cart.qty + 1,
          items: [...cart.items, currentItem],
          total: cart.total + currentItem.price,
        });
      } else {
        currentItem.qty += 1;
        setCart({
          ...cart,
          qty: cart.qty + 1,
          items: [...cart.items],
          total: cart.total + currentItem.price,
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
