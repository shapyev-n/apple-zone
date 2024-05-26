import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";
import StoreBar from "../modals/StoreBar";
import Mac from "../modals/Mac";
import Ipad from "../modals/Ipad";
import Iphone from "../modals/Iphone";
import Watch from "../modals/Watch";
import Vision from "../modals/Vision";
import AirPods from "../modals/AirPods";
import TvHome from "../modals/TvHome";
import Entertaiment from "../modals/Entertaiment";
import Accessories from "../modals/Accessories";
import Support from "../modals/Support";
import AdminPanel from "../admin/AdminPanel";

const style = {
  position: "absolute",
  top: "0",
  right: "0",
  width: "25%",
  heighteight: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  zIndex: 109,
};

const NavbarMenu = ({ handleCloseMenu }) => {
  const [hovered, setHovered] = useState({});

  const [open] = useState(true);

  const handleMouseEnter = (name) => () => {
    setHovered({ ...hovered, [name]: true });
  };

  const handleMouseLeave = (name) => () => {
    setHovered({ ...hovered, [name]: false });
  };

  return (
    <>
      <Modal
        id="menuNavs"
        open={open}
        onClose={handleCloseMenu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="mod" sx={style}>
          <nav
            className="menuNavs"
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <NavLink to={"/store"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("store")();
                  // handleMouseLeave("mac")();
                  // handleMouseLeave("ipad")();
                  // handleMouseLeave("iphone")();
                  // handleMouseLeave("watch")();
                  // handleMouseLeave("vision")();
                  // handleMouseLeave("airpods")();
                  // handleMouseLeave("tv_home")();
                  // handleMouseLeave("entertainment")();
                  // handleMouseLeave("accessories")();
                  // handleMouseLeave("support")();
                  // handleMouseLeave("search")();
                  // handleMouseLeave("cart")();
                }}
              >
                Store
              </Typography>
            </NavLink>
            {hovered.store && (
              <StoreBar handleMouseLeave={handleMouseLeave("store")} />
            )}

            <NavLink to={"/mac"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("mac")();
                }}
              >
                Mac
              </Typography>
            </NavLink>
            {hovered.mac && <Mac handleMouseLeave={handleMouseLeave("mac")} />}

            <NavLink to={"/ipad"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("ipad")();
                }}
              >
                iPad
              </Typography>
            </NavLink>
            {hovered.ipad && (
              <Ipad handleMouseLeave={handleMouseLeave("ipad")} />
            )}

            <NavLink to={"/iphone"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("iphone")();
                }}
              >
                iPhone
              </Typography>
            </NavLink>
            {hovered.iphone && (
              <Iphone handleMouseLeave={handleMouseLeave("iphone")} />
            )}

            <NavLink to={"/watch"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("watch")();
                }}
              >
                Watch
              </Typography>
            </NavLink>
            {hovered.watch && (
              <Watch handleMouseLeave={handleMouseLeave("watch")} />
            )}

            <NavLink to={"/vision"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("vision")();
                }}
              >
                Vision
              </Typography>
            </NavLink>
            {hovered.vision && (
              <Vision handleMouseLeave={handleMouseLeave("vision")} />
            )}

            <NavLink to={"/airpods"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("airpods")();
                }}
              >
                AirPods
              </Typography>
            </NavLink>
            {hovered.airpods && (
              <AirPods handleMouseLeave={handleMouseLeave("airpods")} />
            )}

            <NavLink to={"/tv_home"}>
              <Typography
                sx={{ display: "flex", width: "90px" }}
                onClick={() => {
                  handleMouseEnter("tv_home")();
                }}
              >
                TV & Home
              </Typography>
            </NavLink>
            {hovered.tv_home && (
              <TvHome handleMouseLeave={handleMouseLeave("tv_home")} />
            )}

            <NavLink to={"/entertainment"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("entertainment")();
                }}
              >
                Entertainment
              </Typography>
            </NavLink>
            {hovered.entertainment && (
              <Entertaiment
                handleMouseLeave={handleMouseLeave("entertainment")}
              />
            )}

            <NavLink to={"/accessories"}>
              <Typography
                onClick={() => {
                  handleMouseEnter("accessories")();
                }}
              >
                Accessories
              </Typography>
            </NavLink>
            {hovered.accessories && (
              <Accessories handleMouseLeave={handleMouseLeave("accessories")} />
            )}

            <NavLink to={"/support"}>
              <Typography
                onMouseEnter={() => {
                  handleMouseEnter("support")();
                }}
              >
                Support
              </Typography>
            </NavLink>
            {hovered.support && (
              <Support handleMouseLeave={handleMouseLeave("support")} />
            )}
            <AdminPanel />
          </nav>
        </Box>
      </Modal>
    </>
  );
};

export default NavbarMenu;
