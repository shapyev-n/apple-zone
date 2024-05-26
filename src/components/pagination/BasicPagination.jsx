import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ProductContext";

export default function BasicPagination() {
  const { count, setPage } = useProduct();
  function handlerPage(p, n) {
    setPage(n);
  }
  return <Pagination onChange={handlerPage} count={count} />;
}
