import React from "react";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();
  return (
    <div className="adminPanel">
      <IconButton
        onClick={() => {
          navigate("/admin");
        }}
      >
        <AdminPanelSettingsOutlinedIcon sx={{ color: "#000" }} />
      </IconButton>
    </div>
  );
};

export default AdminPanel;
