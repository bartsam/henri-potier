import Link from "next/link";
import Spinner from "components/atoms/Spinner";
import { useCart, useFetch } from "utils/hooks";
import { useState, useEffect } from "react";
import Header from "components/organisms/Header";
import CartResume from "components/organisms/CartResume";
import Item from "components/molecules/Item";

export default function Cart() {
  return (
    <>
      <Header minimize breadcrumb={{ label: "Page d'accueil", path: "/" }} />
      <CartResume />
    </>
  );
}
