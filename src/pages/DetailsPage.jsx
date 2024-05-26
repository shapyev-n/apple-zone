import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import CartBasket from "../components/card/CartBasket";
import { Box, Typography } from "@mui/material";

const DetailsPage = () => {
  const { oneProduct, getOneProduct } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {oneProduct ? (
        <CartBasket oneProduct={oneProduct} />
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default DetailsPage;
