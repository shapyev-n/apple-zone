import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTION } from "../helpers/const";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../FireBase";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  data: [],
  oneProduct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION.GET:
      return { ...state, data: action.payload };
    case ACTION.GET_ONE:
      return { ...state, oneProduct: action.payload };
    case ACTION.CLEAR:
      return { ...state, data: [] };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [newData, setNewData] = useState([]);
  const productCollectionRef = collection(db, "data");

  // !add
  async function addProduct(newProduct) {
    await addDoc(productCollectionRef, newProduct);
  }
  // ?add

  // !get
  async function getProduct() {
    let data = await getDocs(productCollectionRef);
    data = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNewData(data);
    dispatch({ type: ACTION.GET, payload: data });
  }
  // ?get

  // !delete
  async function deleteProduct(id) {
    const docRef = doc(db, "data", id);
    await deleteDoc(docRef);
    getProduct();
  }
  // ?delete

  // !pagination
  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const count = Math.ceil(state.data.length / itemPerPage);

  function currentPage() {
    const start = (page - 1) * itemPerPage;
    const end = start + itemPerPage;
    return state.data.slice(start, end);
  }
  // ?pagination

  // !get one protuct

  async function getOneProduct(id) {
    const productRef = doc(db, "data", id);
    const docRef = await getDoc(productRef, id);
    let data = { ...docRef.data(), id: docRef.id };
    dispatch({ type: "GET_ONE", payload: data });
  }
  // ?get one protuct

  // !edit
  async function editProduct(id, edited) {
    const docRef = doc(db, "data", id);
    await updateDoc(docRef, edited);
  }
  // ?edit

  // !filter
  function filterData(category) {
    dispatch({ type: ACTION.CLEAR });
    let data = newData.filter((el) => el.category === category);
    dispatch({
      type: ACTION.GET,
      payload: data,
    });
  }
  // ?filter

  const values = {
    addProduct,
    getProduct,
    data: state.data,
    deleteProduct,
    setPage,
    currentPage,
    count,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    filterData,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
