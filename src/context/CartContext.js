import React, { createContext, useContext, useEffect, useReducer } from "react";
import { BASKET } from "../helpers/const";
import { calcSubPrice, calcTotalPrice } from "../helpers/Function";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  card: JSON.parse(localStorage.getItem("card")),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BASKET.GET:
      return { ...state, card: action.payload };
    default:
      return state;
  }
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToCard(product) {
    let card = JSON.parse(localStorage.getItem("card"));
    if (!card) {
      card = {
        products: [],
        totalCount: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    card.products.push(newProduct);
    localStorage.setItem("card", JSON.stringify(card));
    getProductFromCard();
  }

  function getProductFromCard() {
    let card = JSON.parse(localStorage.getItem("card"));
    if (!card) {
      card = {
        products: [],
        totalCount: 0,
      };
    }
    dispatch({
      type: BASKET.GET,
      payload: card,
    });
  }

  useEffect(() => {
    getProductFromCard();
  }, []);

  function checkProductInCard(id) {
    let card = JSON.parse(localStorage.getItem("card"));
    if (card) {
      let obj = card.products.some((el) => el.item.id === id);
      return obj ? true : false;
    }
  }

  function deleteProductFromCard(id) {
    let card = JSON.parse(localStorage.getItem("card"));
    card.products = card.products.filter((el) => el.item.id !== id);
    card.totalCount = calcTotalPrice(card.products);
    localStorage.setItem("card", JSON.stringify(card));
    getProductFromCard();
  }

  function changeProductCount(count, id) {
    if (count < 1) {
      alert("error");
    }
    let card = JSON.parse(localStorage.getItem("card"));
    card.products = card.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    card.totalCount = calcTotalPrice(card.products);
    localStorage.setItem("card", JSON.stringify(card));
    getProductFromCard();
  }

  const values = {
    addProductToCard,
    card: state.card,
    checkProductInCard,
    deleteProductFromCard,
    changeProductCount,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContext;
