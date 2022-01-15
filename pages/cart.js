import Link from "next/link";
import Spinner from "components/atoms/Spinner";
import { useCart, useFetch } from "utils/hooks";
import { useState, useEffect } from "react";
import Header from "components/organisms/Header";

export default function Cart(props) {
  const { cart, handleCartItems } = useCart();
  const itemsIsbnString = cart.items.map((item) => item.isbn).toString();
  const { data, isLoading, error } = useFetch(
    `https://henri-potier.techx.fr/books/${itemsIsbnString}/commercialOffers`,
    itemsIsbnString.length > 0
  );
  console.log(cart);
  return (
    <>
      <Header minimize breadcrumb={{ label: "Page d'accueil", path: "/" }} />
      <ul>
        {cart.items.map((item, key) => (
          <li key={key}>
            <Link href={`/book/${item.isbn}`}>
              <a>{item.title + " x" + item.qty}</a>
            </Link>
            <button onClick={() => handleCartItems("add", item)}>+1</button>
            {item.qty > 1 && (
              <button onClick={() => handleCartItems("remove", item)}>
                -1
              </button>
            )}
            <button onClick={() => handleCartItems("reset", item)}>
              remove from cart
            </button>
          </li>
        ))}
      </ul>
      {cart.items.length === 0 ? (
        <p>empty</p>
      ) : error ? (
        <p>error</p>
      ) : isLoading ? (
        <Spinner theme="dark" />
      ) : (
        data.offers.map((offer, key) => (
          <li key={key}>{`${offer.type} : ${offer.value}`}</li>
        ))
      )}
    </>
  );
}
