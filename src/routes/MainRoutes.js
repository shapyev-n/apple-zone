import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";
import ListProduct from "../components/products/ListProduct";
import DetailsPage from "../pages/DetailsPage";
import Support from "../components/modals/Support";
import Search from "../components/modals/Search";
import Cart from "../components/modals/Cart";
import Login from "../components/autentication/Login";
import Register from "../components/autentication/Register";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import Entertainment from "../components/navbar/Entertainment";
import PaymentPage from "../pages/PaymentPage";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/payment",
      element: <PaymentPage />,
      id: Date.now(),
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: Date.now(),
    },
    {
      link: "/",
      element: <HomePage />,
      id: Date.now(),
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: Date.now(),
    },
    {
      link: "/edit/:id",
      element: <EditPage />,
      id: Date.now(),
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/details/:id",
      element: <DetailsPage />,
      id: Date.now(),
    },
    {
      link: "/store",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/mac",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/ipad",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/iphone",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/watch",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/vision",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/airpods",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/tv_home",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/entertainment",
      element: <Entertainment />,
      id: Date.now(),
    },
    {
      link: "/accessories",
      element: <ListProduct />,
      id: Date.now(),
    },
    {
      link: "/support",
      element: <Support />,
      id: Date.now(),
    },
    {
      link: "/search",
      element: <Search />,
      id: Date.now(),
    },
    {
      link: "/cart",
      element: <Cart />,
      id: Date.now(),
    },
    {
      link: "/signIn",
      element: <Login />,
      id: Date.now(),
    },
    {
      link: "/signUp",
      element: <Register />,
      id: Date.now(),
    },
    {
      link: "/card",
      element: <CartPage />,
      id: Date.now(),
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
