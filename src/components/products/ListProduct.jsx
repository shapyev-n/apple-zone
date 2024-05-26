import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import { Box, Container, Skeleton } from "@mui/material";
import Card from "../card/Card";
import BasicPagination from "../pagination/BasicPagination";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";

const ListProduct = () => {
  const { data, getProduct, currentPage, filterData } = useProduct();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/mac") {
      filterData("Mac");
    } else if (location.pathname === "/ipad") {
      filterData("iPad");
    } else if (location.pathname === "/iphone") {
      filterData("iPhone");
    } else if (location.pathname === "/watch") {
      filterData("Watch");
    } else if (location.pathname === "/vision") {
      filterData("Vision");
    } else if (location.pathname === "/airpods") {
      filterData("AirPods");
    } else if (location.pathname === "/tv_home") {
      filterData("TV & Home");
    } else if (location.pathname === "/accessories") {
      filterData("Accessories");
    } else {
      getProduct();
    }
  }, [location.pathname]);

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {data.length > 0 ? (
            currentPage().map((el, idx) => <Card key={idx} el={el} />)
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "40px",
              }}
            >
              <div
                style={{
                  position: "relative",
                }}
              >
                <Skeleton
                  sx={{
                    bgcolor: "grey.300",
                    width: "280px",
                    minHeight: "430px",
                    borderRadius: "20px",
                  }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "200px",
                    height: "70px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    right: "15px",
                    bgcolor: "grey.400",
                    width: "42px",
                    height: "70px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "250px",
                    height: "370px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "310px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "110px",
                    height: "60px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "56px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "235px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                }}
              >
                <Skeleton
                  sx={{
                    bgcolor: "grey.300",
                    width: "280px",
                    minHeight: "430px",
                    borderRadius: "20px",
                  }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "200px",
                    height: "70px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    right: "15px",
                    bgcolor: "grey.400",
                    width: "42px",
                    height: "70px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "250px",
                    height: "370px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "310px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "110px",
                    height: "60px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "56px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "235px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                }}
              >
                <Skeleton
                  sx={{
                    bgcolor: "grey.300",
                    width: "280px",
                    minHeight: "430px",
                    borderRadius: "20px",
                  }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "200px",
                    height: "70px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    right: "15px",
                    bgcolor: "grey.400",
                    width: "42px",
                    height: "70px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "250px",
                    height: "370px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "310px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "110px",
                    height: "60px",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "15px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "56px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Skeleton
                  sx={{
                    position: "absolute",
                    top: "370px",
                    left: "235px",
                    bgcolor: "grey.400",
                    width: "30px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </Box>
          )}
        </Container>
        <BasicPagination />
      </Box>
      <Footer />
    </>
  );
};

export default ListProduct;
