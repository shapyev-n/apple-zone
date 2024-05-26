import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20%",
        gap: "50px",
      }}
    >
      <h1>Shopping cart empty</h1>
      <Button
        onClick={() => navigate("/store")}
        sx={{
          background: "#004fe2",
          color: "#fff",
          transition: "background-color 0.3s ease",
          "&:hover": {
            background: "#001fe9",
          },
        }}
      >
        go to the store
      </Button>
    </div>
  );
};

export default Loader;
