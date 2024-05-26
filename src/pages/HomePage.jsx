import React from "react";
import Section1 from "../components/sections/section1/Section1";
import Section2 from "../components/sections/section2/Section2";
import Section3 from "../components/sections/section3/Section3";
import Section4 from "../components/sections/section4/Section4";
import Footer from "../components/footer/Footer";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
};

export default HomePage;
