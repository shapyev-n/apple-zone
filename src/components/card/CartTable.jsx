import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartTable = ({ card }) => {
  const { deleteProductFromCard, changeProductCount } = useCart();
  const navigate = useNavigate();

  return (
    <Box id="cartTable">
      <Container className="container">
        {card.products.map((el) => (
          <Card className="cartTable">
            <Box className="count">
              <Typography component="div" variant="h5">
                {el.item.name}
                <br />
              </Typography>
              <Select
                onChange={(e) => {
                  changeProductCount(e.target.value, el.item.id);
                }}
                labelId="custom-select-label"
                id="custom-select"
                sx={{ width: "150px" }}
                value={el.count}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </Box>
            <Box className="box_img">
              <Typography sx={{ fontSize: "25px" }}>{el.subPrice}$</Typography>
              <CardMedia
                image={el.item.image}
                component="img"
                sx={{ width: 250, objectFit: "cover", height: "auto" }}
                alt="Product-Image"
              />
              <Button
                onClick={() => {
                  deleteProductFromCard(el.item.id);
                }}
                variant="contained"
                size="medium"
                sx={{ m: "5 0" }}
              >
                Remove
              </Button>
            </Box>
          </Card>
        ))}
      </Container>
      <Box className="mainTotalPrice">
        <Container className="totalPrice">
          <p>TotalPrice: {card.totalCount}$</p>
          <Button onClick={() => navigate("/payment")} variant="contained">
            Buy
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default CartTable;
