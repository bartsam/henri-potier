import Link from "next/link";
import Spinner from "../components/atoms/Spinner";
import { useCart, useFetch } from "../utils/hooks";

export default function Cart() {
  const { cart, handleCartItems } = useCart();
  const itemsIsbnString = cart.items.map((item) => item.isbn).toString();
  const { data, isLoading, error } = useFetch(
    `https://henri-potier.techx.fr/books/${itemsIsbnString}/commercialOffers`,
    itemsIsbnString.length > 0
  );
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>cart</p>
      <ul>
        {cart.items.map((item, key) => (
          <li key={key}>
            <Link href={`/book/${item.isbn}`}>
              <a>{item.title + " x" + item.qty}</a>
            </Link>
            <button onClick={() => handleCartItems("remove", item)}>
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
        <Spinner />
      ) : (
        data.offers.map((offer, key) => (
          <li key={key}>{`${offer.type} : ${offer.value}`}</li>
        ))
      )}
    </>
  );
}
