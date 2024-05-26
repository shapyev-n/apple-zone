import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AdminPanel from "../admin/AdminPanel";
import { NavLink, useNavigate } from "react-router-dom";
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
import Search from "../modals/Search";
import Cart from "../modals/Cart";
import { AccountCircle } from "@mui/icons-material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NavbarMenu from "../layout/NavbarMenu";
import { useAuth } from "../../context/AuthContext";
import EditAuth from "../autentication/EditAuth";

const Header = () => {
  const { user, logOutUser } = useAuth();
  const [hovered, setHovered] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  const navigate = useNavigate();

  const handleMouseEnter = (name) => () => {
    setHovered({ ...hovered, [name]: true });
  };

  const handleMouseLeave = (name) => () => {
    setHovered({ ...hovered, [name]: false });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    handleMouseEnter();
  }, []);

  //yihuojik

  return (
    <Box id="header">
      <Container>
        <Box className="header">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <AdminPanel />
            <IconButton
              onClick={() => {
                navigate("/");
              }}
            >
              <AppleIcon sx={{ color: "#000" }} />
            </IconButton>
          </div>
          <nav>
            <NavLink to={"/store"}>
              <Typography
                onClick={() => {
                  handleClose();

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
          </nav>
          <Box style={{ display: "flex", gap: "10px" }}>
            <IconButton
              onClick={() => {
                // navigate("/search");
                handleMouseEnter("search")();
              }}
            >
              <SearchIcon sx={{ color: "#000" }} />
            </IconButton>
            {hovered.search && (
              <Search handleMouseLeave={handleMouseLeave("search")} />
            )}
            <IconButton
              onClick={() => {
                navigate("/card");
              }}
              onMouseEnter={() => {
                handleMouseEnter("cart")();
              }}
            >
              <ShoppingBagOutlinedIcon sx={{ color: "#000" }} />
            </IconButton>
            {hovered.cart && (
              <Cart handleMouseLeave={handleMouseLeave("cart")} />
            )}
            <div>
              {user ? (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Tooltip title={user.displayName}>
                    <Avatar alt={user.email} src={user.photoURL} />
                  </Tooltip>
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )}
              {user ? (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      handleMouseEnter("editAuth")();
                      // handleClose();
                    }}
                  >
                    Edit Profile
                  </MenuItem>
                  {hovered.editAuth && (
                    <EditAuth handleMouseLeave={handleMouseLeave("editAuth")} />
                  )}
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      logOutUser();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              ) : (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/signUp");
                    }}
                  >
                    Sign up
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/signIn");
                    }}
                  >
                    Sign in
                  </MenuItem>
                </Menu>
              )}
            </div>
            <Button
              className="menuBtn"
              onClick={() => {
                handleOpenMenu();
                // navigate("/navMenu");
              }}
            >
              <MenuOpenIcon sx={{ color: "#000" }} />
            </Button>
            {open && <NavbarMenu handleCloseMenu={handleCloseMenu} />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
