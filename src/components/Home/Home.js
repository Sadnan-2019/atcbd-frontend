import React from "react";
import GsapSlider from "../GsapSlider/GsapSlider";
import Services from "../Services/Services";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import Products from "../Products/Products";
import ProductCarousel from "../Products/ProductCarousel";
import Quote from "../Quote/Quote";
import TeamSlider from "../TeamSlider/TeamSlider";
import News from "../News/News";

const Home = () => {
  return (
    <div>
      <GsapSlider></GsapSlider>
      <News></News>
      <Products></Products>
      <ProductCarousel></ProductCarousel>
      <CompanyOverview></CompanyOverview>
      <Services></Services>
         <TeamSlider></TeamSlider>
      <Quote></Quote>
   

      {/* <Login></Login> */}
    </div>
  );
};

export default Home;
