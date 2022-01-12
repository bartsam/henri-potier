import React, { useState, createContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    qty: 0,
    items: [],
  });

  const handleCartItems = (currentItem) => {
    console.log(currentItem);
    if (
      cart.items.filter((item) => item.isbn === currentItem.isbn).length === 0
    ) {
      console.log("1");
      currentItem["qty"] = 1;
      setCart({
        ...cart,
        items: [...cart.items, currentItem],
      });
    } else {
      console.log("2");
      const updateItem = cart.items.filter(
        (item) => item.isbn === currentItem.isbn
      )[0];
      updateItem.qty += 1;
      setCart({
        ...cart,
        items: [...cart.items],
      });
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
