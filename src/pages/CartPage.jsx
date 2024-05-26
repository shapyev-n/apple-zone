import React from "react";
import { useCart } from "../context/CartContext";
import CartTable from "../components/card/CartTable";
import Loader from "../components/card/Loader";

const CartPage = () => {
  const { card } = useCart();
  // console.log(card.products.map((el)=> el.subPrice));
  return (
    <div>
      {card.products.length > 0 && card !== null ? (
        <CartTable card={card} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CartPage;
