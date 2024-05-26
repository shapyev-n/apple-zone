import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/404.jpg";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        zIndex: 1000,
      }}
    >
      <img
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        src={img}
        alt="404"
      />
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          height: "60px",
          width: "270px",
          background: "#004fe2",
          color: "#fff",
          fontWeight: "700",
          bottom: "30px",
        }}
      >
        GO TO HOMEPAGE
      </button>
    </div>
  );
};

export default NotFoundPage;
