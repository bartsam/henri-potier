import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    quantity: 0,
    items: [],
    total: 0,
  });

  const handleCartItems = (action, currentItem) => {
    const itemArlreadyInCart = cart.items.filter(
      (item) => item.id === currentItem.isbn
    )[0];

    if (action === "reset" && itemArlreadyInCart) {
      setCart({
        ...cart,
        quantity: cart.quantity - 1,
        total: cart.total - currentItem.price,
        items: cart.items.filter((item) => {
          return item.id !== currentItem.isbn;
        }),
      });
    }
    if (action === "remove" && itemArlreadyInCart) {
      itemArlreadyInCart.qty -= 1;
      setCart({
        ...cart,
        total: cart.total - currentItem.price,
        quantity: cart.quantity - 1,
      });
    }
    if (action === "add") {
      if (itemArlreadyInCart) {
        itemArlreadyInCart.qty += 1;
        setCart({
          ...cart,
          total: cart.total + currentItem.price,
          quantity: cart.quantity + 1,
        });
      } else {
        setCart({
          ...cart,
          total: cart.total + currentItem.price,
          quantity: cart.quantity + 1,
          items: [
            ...cart.items,
            {
              id: currentItem.isbn,
              name: currentItem.title,
              image: currentItem.cover,
              price: currentItem.price,
              qty: 1,
            },
          ],
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
