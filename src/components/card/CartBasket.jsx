import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartBasket({ oneProduct }) {
  const { addProductToCard, checkProductInCard } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Card className="cardBasket">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <img
            style={{
              width: "200px",
              height: "230px",
              objectFit: "cover",
            }}
            src={oneProduct.image}
            alt={oneProduct.name}
          />
          <Box>
            {checkProductInCard(oneProduct.id) ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Button
                  onClick={() => {
                    navigate("/list");
                  }}
                  variant="contained"
                  size="medium"
                  sx={{ m: "5 0" }}
                >
                  continue shoppin
                </Button>
                <Button disabled sx={{ background: "#1d1d1d60" }}>
                  BUY
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  addProductToCard(oneProduct);
                }}
                variant="contained"
                size="medium"
                sx={{ m: "5 0" }}
              >
                BUY
              </Button>
            )}
          </Box>
        </Box>
        <Box>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
              {oneProduct.name}
            </Typography>
            <Typography sx={{ fontSize: "24px" }}>
              {oneProduct.price}$
            </Typography>
          </CardContent>

          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{oneProduct.descr}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
