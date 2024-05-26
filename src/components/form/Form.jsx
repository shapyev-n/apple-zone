import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Snackbar,
  TextField,
} from "@mui/material";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const init = {
  category: "",
  name: "",
  image: "",
  price: "",
  descr: "",
};

const Form = ({ isEdit }) => {
  const { addProduct, editProduct, oneProduct } = useProduct();
  const [inputValues, setInputValues] = useState(init);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // !add

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: +e.target.value };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  function handleAddProduct() {
    if (!inputValues.name || !inputValues.price || !inputValues.descr) {
      alert("Заполните все поля!");
    } else {
      addProduct(inputValues);
      setInputValues(init);
    }
  }
  const handleSelektClick = () => {
    if (!inputValues) {
      setInputValues("Store");
    }
  };
  // ?add

  // !edit
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (oneProduct && isEdit) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);

  function handleSaveProduct() {
    editProduct(id, inputValues);
    navigate("/list");
  }
  // ?edit

  return (
    <Box
      sx={{
        width: "450px",
        m: "0 auto",
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "20px",
          }}
        >
          {isEdit ? (
            false
          ) : (
            <select
              value={inputValues.category}
              onChange={handleInp}
              name="category"
              id=""
              style={{
                width: "100%",
                height: "40px",
                padding: "0 15px",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              <option value="Store">Store</option>
              <option value="Mac">Mac</option>
              <option value="iPad">iPad</option>
              <option value="iPhone">iPhone</option>
              <option value="Watch">Watch</option>
              <option value="Vision">Vision</option>
              <option value="AirPods">AirPods</option>
              <option value="TV & Home">TV & Home</option>
              <option value="Accessories">Accessories</option>
            </select>
          )}
          <TextField
            value={inputValues.name}
            onChange={handleInp}
            name="name"
            placeholder="Name"
            autoCorrect="on"
          />
          <TextField
            value={inputValues.image}
            onChange={handleInp}
            name="image"
            placeholder="URL image"
            autoCorrect="on"
          />
          <TextField
            value={inputValues.price}
            onChange={handleInp}
            name="price"
            type="number"
            placeholder="Price"
            autoCorrect="on"
          />
          <TextField
            value={inputValues.descr}
            onChange={handleInp}
            name="descr"
            placeholder="Description"
            autoCorrect="on"
          />
          {isEdit ? (
            <Button
              onClick={() => {
                handleSaveProduct();
              }}
              sx={{ background: "#00a2ff" }}
              variant="contained"
            >
              seve
            </Button>
          ) : (
            <Box>
              <Button
                onClick={() => {
                  handleAddProduct();
                  handleClick();
                  handleSelektClick();
                }}
                sx={{ background: "#00a2ff", width: "100%" }}
                variant="contained"
              >
                create
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Данные загружены."
              />
            </Box>
          )}
        </Card>
      </FormControl>
    </Box>
  );
};

export default Form;
